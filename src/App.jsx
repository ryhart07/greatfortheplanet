import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./Frontpage";
import BusinessPage from "./Business";
import IndividualsPage from "./Individuals";
import ProjectsPage from "./Projects";
import PurchasePage from "./Purchase";
import AboutUsPage from "./AboutUs";

export default function App() {
  let CurrentPage = HomePage;
  switch (window.location.pathname) {
    case "/":
      CurrentPage = HomePage;
      break;
    case "/Business":
      CurrentPage = BusinessPage;
      break;
    case "/Individuals":
      CurrentPage = IndividualsPage;
      break;
    case "/Projects":
      CurrentPage = ProjectsPage;
      break;
    case "/Purchase":
      CurrentPage = PurchasePage;
      break;
    case "/AboutUs":
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