import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "./Frontpage";
import BusinessPage from "./Business";
import IndividualsPage from "./Individuals";
import ProjectsPage from "./Projects";
import PurchasePage from "./Purchase";
import AboutUsPage from "./AboutUs";

export default function App() {
  const tab = new URLSearchParams(window.location.search).get("tab");
  const route = tab
    ? `/${tab}`
    : window.location.pathname.replace("/greatfortheplanet", "") || "/";

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