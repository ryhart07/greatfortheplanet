import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./Frontpage";
import BusinessPage from "./Business";
import IndividualsPage from "./Individuals";
import ProjectsPage from "./Projects";
import PurchasePage from "./Purchase";
import AboutUsPage from "./AboutUs";

function getCurrentRoute() {
  const hash = window.location.hash || "#/";
  const route = hash.startsWith("#") ? hash.slice(1) : hash;
  return route || "/";
}

export default function App() {
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getCurrentRoute());
    };

    window.addEventListener("hashchange", onHashChange);

    if (!window.location.hash) {
      window.location.hash = "#/";
    }

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  let CurrentPage = HomePage;
  switch (route.toLowerCase()) {
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
      <Navbar />
      <CurrentPage />
      <Footer />
    </>
  );
}