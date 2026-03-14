import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Frontpage";
import BusinessPage from "./pages/business";
import IndividualsPage from "./pages/Individuals";
import ProjectsPage from "./pages/Projects";
import PurchasePage from "./pages/Purchase";
import AboutUsPage from "./pages/AboutUs";
import LogInPage from "./pages/LogIn";
import SignUpPage from "./pages/SignUp";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/individuals" element={<IndividualsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}