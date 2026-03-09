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

  if (redirectPath && redirectPath.startsWith(basePath)) {
    sessionStorage.removeItem("redirectPath");
    window.history.replaceState(null, "", redirectPath);
  }

  const route = window.location.pathname.replace(basePath, "") || "/";

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