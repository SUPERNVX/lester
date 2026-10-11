import { useEffect, useRef } from "react";
import * as THREE from "three";

type PreloaderProps = {
  durationMs?: number;
  onComplete?: () => void;
};

const P1_END = 0.32;
const P2_END = 0.65;
const P3_END = 0.82;
const RING_SEG = 64;
const TRAIL = 14;

const GOLD_PALETTE = [
  new THREE.Vector3(0.01, 0.01, 0.01),
  new THREE.Vector3(0.35, 0.22, 0.05),
  new THREE.Vector3(0.85, 0.65, 0.12),
  new THREE.Vector3(1.0, 0.92, 0.5),
];

const DITHER_VERT = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const DITHER_FRAG = `
uniform sampler2D tDiffuse;
uniform vec2 resolution;
uniform float pixelSize;
uniform float ditherAmount;
uniform vec3 colorPalette[4];
varying vec2 vUv;

float bayer4(vec2 p) {
  vec2 m = mod(p, 4.0);
  int x = int(m.x);
  int y = int(m.y);
  if (x == 0) {
    if (y == 0) return 0.0/16.0;
    if (y == 1) return 8.0/16.0;
    if (y == 2) return 2.0/16.0;
    return 10.0/16.0;
  } else if (x == 1) {
    if (y == 0) return 12.0/16.0;
    if (y == 1) return 4.0/16.0;
    if (y == 2) return 14.0/16.0;
    return 6.0/16.0;
  } else if (x == 2) {
    if (y == 0) return 3.0/16.0;
    if (y == 1) return 11.0/16.0;
    if (y == 2) return 1.0/16.0;
    return 9.0/16.0;
  } else {
    if (y == 0) return 15.0/16.0;
    if (y == 1) return 7.0/16.0;
    if (y == 2) return 13.0/16.0;
    return 5.0/16.0;
  }
}

void main() {
  vec2 ditherRes = resolution / pixelSize;
  vec2 pixelUv = floor(vUv * ditherRes) / ditherRes;
  vec4 color = texture2D(tDiffuse, pixelUv);
  float brightness = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  vec2 screenPos = floor(vUv * resolution / pixelSize);
  float threshold = bayer4(screenPos) - 0.5;
  float ditheredLuma = clamp(brightness + threshold * ditherAmount, 0.0, 1.0);

  float maxC = max(color.r, max(color.g, color.b));
  float minC = min(color.r, min(color.g, color.b));
  float chroma = maxC - minC;

  vec3 finalColor;
  if (chroma > 0.05 || (color.r > color.b + 0.03)) {
    if (ditheredLuma < 0.25) finalColor = colorPalette[0];
    else if (ditheredLuma < 0.50) finalColor = colorPalette[1];
    else if (ditheredLuma < 0.75) finalColor = colorPalette[2];
    else finalColor = colorPalette[3];
  } else {
    if (ditheredLuma < 0.35) finalColor = vec3(0.0);
    else if (ditheredLuma < 0.70) finalColor = vec3(0.20);
    else finalColor = vec3(0.40);
  }
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

function buildRocketTargets(total: number): Float32Array {
  const out = new Float32Array(total * 3);
  for (let i = 0; i < total; i++) {
    let x = 0;
    let y = 0;
    let z = 0;
    if (i < 20) {
      const pct = i / 20;
      y = 6 + pct * 9;
      const radius = (1.0 - pct) * 3.2;
      const angle = (i % 6) * ((Math.PI * 2) / 6);
      x = Math.cos(angle) * radius;
      z = Math.sin(angle) * radius;
    } else if (i < 80) {
      const pct = (i - 20) / 60;
      y = -6 + pct * 12;
      const radius = 3.2;
      const angle = (i * 0.65) % (Math.PI * 2);
      x = Math.cos(angle) * radius;
      z = Math.sin(angle) * radius;
    } else if (i < 100) {
      const finIdx = (i - 80) % 4;
      const pct = Math.floor((i - 80) / 4) / 5;
      const finAngle = finIdx * (Math.PI / 2);
      const r = 3.2 + pct * 4.2;
      y = -6 - pct * 3.5;
      x = Math.cos(finAngle) * r;
      z = Math.sin(finAngle) * r;
    } else {
      const pct = (i - 100) / Math.max(1, total - 100);
      y = -9.5 - pct * 8.5;
      const spread = pct * 2.8;
      const angle = Math.random() * Math.PI * 2;
      x = Math.cos(angle) * spread;
      z = Math.sin(angle) * spread;
    }
    out[i * 3] = x;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = z;
  }
  return out;
}

export default function HydrogenPreloader({
  durationMs = 7000,
  onComplete,
}: PreloaderProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const mount = mountRef.current;
    const root = rootRef.current;
    if (!mount) return;

    // Evita canvas duplicado em remontagens (StrictMode dev).
    mount.innerHTML = "";

    const isMobile = window.innerWidth < 768;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const MAX = isMobile ? 70 : 120;
    const BG_COUNT = isMobile ? 1200 : 2000;
    const duration = reduced ? Math.min(durationMs, 1500) : durationMs;

    let w = mount.clientWidth || window.innerWidth;
    let h = mount.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.012);

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(0, 0, 35);

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      stencil: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 1);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    mount.appendChild(renderer.domElement);

    const rt = new THREE.WebGLRenderTarget(w, h, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      depthBuffer: true,
      stencilBuffer: false,
    });

    const postScene = new THREE.Scene();
    const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const ditherMat = new THREE.ShaderMaterial({
      vertexShader: DITHER_VERT,
      fragmentShader: DITHER_FRAG,
      uniforms: {
        tDiffuse: { value: rt.texture },
        resolution: { value: new THREE.Vector2(w, h) },
        pixelSize: { value: 3.0 },
        ditherAmount: { value: 0.85 },
        colorPalette: { value: GOLD_PALETTE },
      },
      depthTest: false,
      depthWrite: false,
    });
    const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), ditherMat);
    quad.frustumCulled = false;
    postScene.add(quad);

    const master = new THREE.Group();
    const clouds = new THREE.Group();
    const rocket = new THREE.Group();
    scene.add(master, clouds, rocket);

    // ---------- dados do campo de átomos (pré-alocados) ----------
    const cosmos = new Float32Array(MAX * 3);
    const rocketPos = buildRocketTargets(MAX);
    const orbitR = new Float32Array(MAX);
    const orbitSpd = new Float32Array(MAX);
    const cosTX = new Float32Array(MAX);
    const sinTX = new Float32Array(MAX);
    const cosTZ = new Float32Array(MAX);
    const sinTZ = new Float32Array(MAX);
    const ringLocal = new Float32Array(MAX * RING_SEG * 3);
    const atomPos = new Float32Array(MAX * 3);
    const trailHist = new Float32Array(MAX * TRAIL * 3);

    for (let i = 0; i < MAX; i++) {
      let x = 0;
      let y = 0;
      let z = 0;
      if (i === 0) {
        x = 0;
        y = 0;
        z = 0;
      } else if (i < 6) {
        const angle = (i / 5) * Math.PI * 2;
        const dist = 12 + (i % 2) * 4;
        x = Math.cos(angle) * dist;
        y = Math.sin(angle) * dist;
        z = (Math.random() - 0.5) * 6;
      } else if (i < 30) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = 18 + Math.random() * 22;
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
      } else {
        x = (Math.random() - 0.5) * 130;
        y = (Math.random() - 0.5) * 130;
        z = (Math.random() - 0.5) * 110;
      }
      cosmos[i * 3] = x;
      cosmos[i * 3 + 1] = y;
      cosmos[i * 3 + 2] = z;
      atomPos[i * 3] = x;
      atomPos[i * 3 + 1] = y;
      atomPos[i * 3 + 2] = z;

      orbitR[i] = 6.0;
      orbitSpd[i] = 2.2 + Math.random() * 0.8;
      const tx = Math.random() * Math.PI;
      const tz = Math.random() * Math.PI;
      cosTX[i] = Math.cos(tx);
      sinTX[i] = Math.sin(tx);
      cosTZ[i] = Math.cos(tz);
      sinTZ[i] = Math.sin(tz);

      for (let s = 0; s < RING_SEG; s++) {
        const a = (s / RING_SEG) * Math.PI * 2;
        let rx = Math.cos(a) * orbitR[i];
        let ry = 0;
        let rz = Math.sin(a) * orbitR[i];
        const y1 = ry * cosTX[i] - rz * sinTX[i];
        const z1 = ry * sinTX[i] + rz * cosTX[i];
        ry = y1;
        rz = z1;
        const x2 = rx * cosTZ[i] - ry * sinTZ[i];
        const y2 = rx * sinTZ[i] + ry * cosTZ[i];
        rx = x2;
        ry = y2;
        ringLocal[(i * RING_SEG + s) * 3] = rx;
        ringLocal[(i * RING_SEG + s) * 3 + 1] = ry;
        ringLocal[(i * RING_SEG + s) * 3 + 2] = rz;
      }
    }

    // ---------- geometrias unificadas (poucos draw calls) ----------
    const protonGeo = new THREE.BufferGeometry();
    const protonArr = new Float32Array(MAX * 3);
    protonArr.set(atomPos);
    protonGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(protonArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const protonMat = new THREE.PointsMaterial({
      size: 3.5,
      color: 0xffd700,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
    });
    const protons = new THREE.Points(protonGeo, protonMat);
    protons.frustumCulled = false;
    master.add(protons);

    const electronGeo = new THREE.BufferGeometry();
    const electronArr = new Float32Array(MAX * 3);
    electronGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(electronArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const electronMat = new THREE.PointsMaterial({
      size: 2.2,
      color: 0xfff0aa,
      sizeAttenuation: true,
      transparent: true,
      depthWrite: false,
    });
    const electrons = new THREE.Points(electronGeo, electronMat);
    electrons.frustumCulled = false;
    master.add(electrons);

    const ringGeo = new THREE.BufferGeometry();
    const ringArr = new Float32Array(MAX * RING_SEG * 2 * 3);
    ringArr.fill(9999);
    ringGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(ringArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const ringMat = new THREE.LineBasicMaterial({
      color: 0xdaa520,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
    });
    const rings = new THREE.LineSegments(ringGeo, ringMat);
    rings.frustumCulled = false;
    master.add(rings);

    const trailGeo = new THREE.BufferGeometry();
    const SEGS = TRAIL - 1;
    const trailArr = new Float32Array(MAX * SEGS * 2 * 3);
    trailArr.fill(9999);
    trailGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(trailArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const trailMat = new THREE.LineBasicMaterial({
      color: 0xffa500,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });
    const trails = new THREE.LineSegments(trailGeo, trailMat);
    trails.frustumCulled = false;
    master.add(trails);

    // ---------- fundo pontilhado neutro (estático) ----------
    {
      const pos = new Float32Array(BG_COUNT * 3);
      const col = new Float32Array(BG_COUNT * 3);
      const c1 = new THREE.Color(0x181818);
      const c2 = new THREE.Color(0x555555);
      const tmp = new THREE.Color();
      for (let i = 0; i < BG_COUNT; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 240;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 240;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 240;
        tmp.copy(c1).lerp(c2, Math.random() * 0.5);
        col[i * 3] = tmp.r;
        col[i * 3 + 1] = tmp.g;
        col[i * 3 + 2] = tmp.b;
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      g.setAttribute("color", new THREE.BufferAttribute(col, 3));
      const m = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: false,
        depthWrite: false,
      });
      const pts = new THREE.Points(g, m);
      pts.frustumCulled = false;
      clouds.add(pts);
    }

    // ---------- foguete dourado ----------
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const solidMat = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    {
      const body = new THREE.Mesh(
        new THREE.CylinderGeometry(3.2, 3.2, 12, 12, 2, true),
        wireMat
      );
      const nose = new THREE.Mesh(
        new THREE.ConeGeometry(3.2, 9, 12, 2),
        wireMat
      );
      nose.position.y = 10.5;
      const nozzle = new THREE.Mesh(
        new THREE.CylinderGeometry(2.0, 2.8, 2.5, 10),
        solidMat
      );
      nozzle.position.y = -7.25;
      rocket.add(body, nose, nozzle);
      for (let i = 0; i < 4; i++) {
        const fin = new THREE.Mesh(
          new THREE.BoxGeometry(0.3, 4.5, 4.0),
          solidMat
        );
        const angle = i * (Math.PI / 2);
        fin.position.set(Math.cos(angle) * 4.2, -6.5, Math.sin(angle) * 4.2);
        fin.rotation.y = angle;
        rocket.add(fin);
      }
    }
    const EXH = 120;
    const exhArr = new Float32Array(EXH * 3);
    const exhVel = new Float32Array(EXH * 3);
    for (let i = 0; i < EXH; i++) {
      exhArr[i * 3] = (Math.random() - 0.5) * 2;
      exhArr[i * 3 + 1] = -8.5 - Math.random() * 10;
      exhArr[i * 3 + 2] = (Math.random() - 0.5) * 2;
      exhVel[i * 3] = (Math.random() - 0.5) * 0.15;
      exhVel[i * 3 + 1] = -0.3 - Math.random() * 0.4;
      exhVel[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
    }
    const exhGeo = new THREE.BufferGeometry();
    exhGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(exhArr, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const exhMat = new THREE.PointsMaterial({
      size: 2.2,
      color: 0xfff0aa,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const exhaust = new THREE.Points(exhGeo, exhMat);
    exhaust.frustumCulled = false;
    rocket.add(exhaust);
    rocket.visible = false;

    // ---------- loop temporal 0 -> 1 ----------
    let raf = 0;
    let disposed = false;
    const start = performance.now();
    let frame = 0;
    const smooth = (x: number) => x * x * (3 - 2 * x);

    const resize = () => {
      w = mount.clientWidth || window.innerWidth;
      h = mount.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      rt.setSize(w, h);
      (ditherMat.uniforms.resolution.value as THREE.Vector2).set(w, h);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    const disposeAll = () => {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      scene.traverse((o) => {
        const mesh = o as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        const mat = (mesh as THREE.Mesh).material as THREE.Material | undefined;
        if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
        else if (mat) mat.dispose();
      });
      ditherMat.dispose();
      rt.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) {
        mount.removeChild(renderer.domElement);
      }
    };

    const finish = () => {
      const cb = onCompleteRef.current;
      disposeAll();
      cb?.();
    };

    const tick = (now: number) => {
      if (disposed) return;
      // Keep the animation clock independent from the geometry cadence: an occasional
      // dropped frame should slow the update rate, not freeze particle activation.
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const elapsedSec = elapsed / 1000;
      frame++;

      const spawn = Math.min(1, t / 0.28);
      const active = Math.floor(1 + Math.pow(spawn, 1.8) * (MAX - 1));

      const baseAngle = elapsedSec * 0.15;
      let camRadius = 40;
      let camAngle = baseAngle;
      let camY = 0;
      if (t < P1_END) {
        const k = t / P1_END;
        camRadius = 35 + k * 25;
        camAngle = baseAngle + k * (Math.PI * 0.5);
        camY = Math.sin(elapsedSec * 0.1) * 8 + (k * 10 - 5);
      } else if (t < P2_END) {
        const k = (t - P1_END) / (P2_END - P1_END);
        const e = smooth(k);
        camRadius = 60 - e * 20;
        camAngle = baseAngle + Math.PI * 0.5 + e * (Math.PI * 0.5);
        const endY1 = Math.sin(elapsedSec * 0.1) * 8 + 5;
        camY = (1 - e) * endY1 + e * 2;
      } else {
        const k = Math.min(1, (t - P2_END) / (1 - P2_END));
        camRadius = 40;
        camAngle = baseAngle + Math.PI + k * (Math.PI * 0.25);
        camY = (1 - k) * 2 + Math.sin(elapsedSec * 0.2) * 3;
      }
      camera.position.set(
        Math.sin(camAngle) * camRadius,
        camY,
        Math.cos(camAngle) * camRadius
      );
      camera.lookAt(0, 0, 0);

      let launchY = 0;
      if (t >= P3_END) {
        const lt = Math.min(1, (t - P3_END) / (1 - P3_END));
        launchY = Math.pow(lt, 2.2) * 95;
        if (root) {
          root.style.transform = `translateY(${(-Math.pow(lt, 2.2) * 100).toFixed(3)}%)`;
        }
      }
      rocket.position.y = launchY;
      master.position.y = launchY;

      master.rotation.y = elapsedSec * 0.06;
      clouds.rotation.y = -elapsedSec * 0.02;

      if (t >= 0.52) {
        rocket.visible = true;
        const k = Math.min(1, (t - 0.52) / 0.2);
        const e = smooth(k);
        wireMat.opacity = e * 0.9;
        solidMat.opacity = e * 0.8;
        exhMat.opacity = e;
        rocket.rotation.y = master.rotation.y;
        const boost = t >= P3_END ? 2.5 : 1.0;
        for (let p = 0; p < EXH; p++) {
          exhArr[p * 3] += exhVel[p * 3] * boost;
          exhArr[p * 3 + 1] += exhVel[p * 3 + 1] * boost;
          exhArr[p * 3 + 2] += exhVel[p * 3 + 2] * boost;
          if (exhArr[p * 3 + 1] < -22) {
            exhArr[p * 3] = (Math.random() - 0.5) * 1.5;
            exhArr[p * 3 + 1] = -8.0;
            exhArr[p * 3 + 2] = (Math.random() - 0.5) * 1.5;
          }
        }
        exhGeo.attributes.position.needsUpdate = true;
      } else {
        rocket.visible = false;
      }

      let dissolve = 1;
      if (t >= 0.65) dissolve = Math.max(0, 1 - (t - 0.65) / 0.12);
      ringMat.opacity = 0.9 * dissolve;
      trailMat.opacity = 0.8 * dissolve;
      electronMat.opacity = dissolve;

      for (let i = 0; i < MAX; i++) {
        const on = i < active;
        const i3 = i * 3;
        let ax: number;
        let ay: number;
        let az: number;
        if (!on) {
          ax = 0;
          ay = 9999;
          az = 0;
        } else if (t < P1_END) {
          ax = cosmos[i3];
          ay = cosmos[i3 + 1];
          az = cosmos[i3 + 2];
        } else if (t < P2_END) {
          const k = (t - P1_END) / (P2_END - P1_END);
          const e = smooth(k);
          ax = cosmos[i3] + (rocketPos[i3] - cosmos[i3]) * e;
          ay = cosmos[i3 + 1] + (rocketPos[i3 + 1] - cosmos[i3 + 1]) * e;
          az = cosmos[i3 + 2] + (rocketPos[i3 + 2] - cosmos[i3 + 2]) * e;
        } else {
          ax = rocketPos[i3];
          ay = rocketPos[i3 + 1];
          az = rocketPos[i3 + 2];
        }
        atomPos[i3] = ax;
        atomPos[i3 + 1] = ay;
        atomPos[i3 + 2] = az;
        protonArr[i3] = ax;
        protonArr[i3 + 1] = ay;
        protonArr[i3 + 2] = az;

        const ang = elapsedSec * orbitSpd[i] * 1.2 + i;
        let ex = Math.cos(ang) * orbitR[i];
        let ey = 0;
        let ez = Math.sin(ang) * orbitR[i];
        const y1 = ey * cosTX[i] - ez * sinTX[i];
        const z1 = ey * sinTX[i] + ez * cosTX[i];
        ey = y1;
        ez = z1;
        const x2 = ex * cosTZ[i] - ey * sinTZ[i];
        const y2 = ex * sinTZ[i] + ey * cosTZ[i];
        ex = x2;
        ey = y2;

        if (on) {
          const base = i * TRAIL * 3;
          for (let k = TRAIL - 1; k > 0; k--) {
            trailHist[base + k * 3] = trailHist[base + (k - 1) * 3];
            trailHist[base + k * 3 + 1] = trailHist[base + (k - 1) * 3 + 1];
            trailHist[base + k * 3 + 2] = trailHist[base + (k - 1) * 3 + 2];
          }
          trailHist[base] = ex;
          trailHist[base + 1] = ey;
          trailHist[base + 2] = ez;
          electronArr[i3] = ax + ex;
          electronArr[i3 + 1] = ay + ey;
          electronArr[i3 + 2] = az + ez;
        } else {
          electronArr[i3] = 0;
          electronArr[i3 + 1] = 9999;
          electronArr[i3 + 2] = 0;
        }

        const rBase = i * RING_SEG * 2 * 3;
        for (let s = 0; s < RING_SEG; s++) {
          const s2 = (s + 1) % RING_SEG;
          const o = rBase + s * 6;
          if (!on) {
            ringArr.fill(9999, o, o + 6);
          } else {
            const l1 = (i * RING_SEG + s) * 3;
            const l2 = (i * RING_SEG + s2) * 3;
            ringArr[o] = ax + ringLocal[l1];
            ringArr[o + 1] = ay + ringLocal[l1 + 1];
            ringArr[o + 2] = az + ringLocal[l1 + 2];
            ringArr[o + 3] = ax + ringLocal[l2];
            ringArr[o + 4] = ay + ringLocal[l2 + 1];
            ringArr[o + 5] = az + ringLocal[l2 + 2];
          }
        }

        const tBase = i * SEGS * 2 * 3;
        const hBase = i * TRAIL * 3;
        for (let k = 0; k < SEGS; k++) {
          const o = tBase + k * 6;
          if (!on) {
            trailArr.fill(9999, o, o + 6);
          } else {
            trailArr[o] = ax + trailHist[hBase + k * 3];
            trailArr[o + 1] = ay + trailHist[hBase + k * 3 + 1];
            trailArr[o + 2] = az + trailHist[hBase + k * 3 + 2];
            trailArr[o + 3] = ax + trailHist[hBase + (k + 1) * 3];
            trailArr[o + 4] = ay + trailHist[hBase + (k + 1) * 3 + 1];
            trailArr[o + 5] = az + trailHist[hBase + (k + 1) * 3 + 2];
          }
        }
      }

      protonGeo.attributes.position.needsUpdate = true;
      electronGeo.attributes.position.needsUpdate = true;
      ringGeo.attributes.position.needsUpdate = true;
      trailGeo.attributes.position.needsUpdate = true;

      if (frame % 6 === 0 && fillRef.current) {
        fillRef.current.style.transform = `scaleX(${t.toFixed(4)})`;
      }

      renderer.setRenderTarget(rt);
      renderer.render(scene, camera);
      renderer.setRenderTarget(null);
      renderer.render(postScene, postCam);

      if (t >= 1) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      disposeAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [durationMs]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] bg-black will-change-transform"
    >
      <div ref={mountRef} className="absolute inset-0 overflow-hidden" />
      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <div
          role="progressbar"
          aria-label="Carregando"
          className="h-[3px] w-48 overflow-hidden rounded-full bg-white/10"
        >
          <div
            ref={fillRef}
            className="h-full w-full origin-left bg-gradient-to-r from-gold-700 via-gold-400 to-gold-200"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
