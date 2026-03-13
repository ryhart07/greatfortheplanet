import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Frontpage";
import BusinessPage from "./pages/business";
import IndividualsPage from "./pages/Individuals";
import ProjectsPage from "./pages/Projects";
import PurchasePage from "./pages/Purchase";
import AboutUsPage from "./pages/AboutUs";

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