import { useEffect, useState } from "react";
import HydrogenPreloader from "./components/HydrogenPreloader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import Proof from "./components/home/Proof";
import Problems from "./components/home/Problems";
import Services from "./components/home/Services";
import Trajectory from "./components/home/Trajectory";
import Missions from "./components/home/Missions";
import Closing from "./components/home/Closing";
import Advisory from "./pages/Advisory";
import ComplexSystems from "./pages/ComplexSystems";
import DeepTech from "./pages/DeepTech";
import AlphaFinder from "./pages/AlphaFinder";
import MissionsPage from "./pages/MissionsPage";

function routeFromHash(): string {
  return window.location.hash || "#/";
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [route, setRoute] = useState(routeFromHash);

  useEffect(() => {
    const onChange = () => {
      setRoute(routeFromHash());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return (
    <div className="min-h-screen bg-void text-mist-100">
      {!loaded && (
        <HydrogenPreloader durationMs={7000} onComplete={() => setLoaded(true)} />
      )}

      {route === "#/advisory" ? (
        <>
          <Navbar active="#/advisory" />
          <Advisory />
          <Footer />
        </>
      ) : route === "#/complex-systems" ? (
        <>
          <Navbar active="#/complex-systems" />
          <ComplexSystems />
          <Footer />
        </>
      ) : route === "#/deep-tech" ? (
        <>
          <Navbar active="#/deep-tech" />
          <DeepTech />
          <Footer />
        </>
      ) : route === "#/alpha-finder" ? (
        <>
          <Navbar active="#/alpha-finder" />
          <AlphaFinder />
          <Footer />
        </>
      ) : route === "#/missions" ? (
        <>
          <Navbar active="#/missions" />
          <MissionsPage />
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <HomeHero />
          <Proof />
          <Problems />
          <Services />
          <Trajectory />
          <Missions />
          <Closing />
        </>
      )}
    </div>
  );
}
