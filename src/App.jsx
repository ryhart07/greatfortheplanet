import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./Frontpage";
import BusinessPage from "./business";
import IndividualsPage from "./Individuals";
import ProjectsPage from "./Projects";
import PurchasePage from "./Purchase";
import AboutUsPage from "./AboutUs";

export default function App() {
  const basePath = "/greatfortheplanet";
  const redirectPath = sessionStorage.getItem("redirectPath");

  const getRoute = () => (window.location.pathname.replace(basePath, "") || "/").toLowerCase();
  const [route, setRoute] = useState(getRoute());

  if (redirectPath && redirectPath.startsWith(basePath)) {
    sessionStorage.removeItem("redirectPath");
    window.history.replaceState(null, "", redirectPath);
  }

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigateTo = (nextRoute) => {
    const target = `${basePath}${nextRoute === "/" ? "/" : nextRoute}`;
    if (window.location.pathname !== target) {
      window.history.pushState({}, "", target);
      setRoute(nextRoute.toLowerCase());
    }
  };

  let CurrentPage = HomePage;
  switch (route) {
    case "/":
      CurrentPage = HomePage;
      break;
    case "/business":
      CurrentPage = BusinessPage;
      break;
    case "/individuals":
      CurrentPage = IndividualsPage;
      break;
    case "/projects":
      CurrentPage = ProjectsPage;
      break;
    case "/purchase":
      CurrentPage = PurchasePage;
      break;
    case "/aboutus":
      CurrentPage = AboutUsPage;
      break;
  }

  return (
    <>
      <Navbar currentPath={route} onNavigate={navigateTo} />
      <CurrentPage />
      <Footer />
    </>
  );
}