import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { path: "/individuals", label: "Individuals", itemClassName: "list-item-in-navigation-bar" },
    { path: "/business", label: "Business", itemClassName: "list-item-in-navigation-bar" },
    { path: "/purchase", label: "Purchase", itemClassName: "purchase-button" },
    { path: "/projects", label: "Projects", itemClassName: "list-item-in-navigation-bar" },
    { path: "/aboutus", label: "About Us", itemClassName: "list-item-in-navigation-bar" },
  ];
  const accountItems = [
    { path: "/login", label: "Log In", className: "log-in" },
    { path: "/signup", label: "Sign Up", className: "sign-up" },
  ];
  const { pathname } = useLocation();
  const currentPath = (pathname || "/").toLowerCase();
  const isCurrentPage = (path) => currentPath === path.toLowerCase();
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      return undefined;
    }

    document.documentElement.style.overflow = isMobileMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = (
    <ul className="nav-centre">
      {navItems.map(({ path, label, itemClassName }) => (
        <li key={path} className={itemClassName}>
          <Link
            className={`link-nav-bar${isCurrentPage(path) ? " current-page" : ""}`}
            to={path}
            onClick={closeMobileMenu}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const accountLinks = () => (
    <div className="sign-up-sign-in-wrapper">
      {accountItems.map(({ path, label, className, }) => (
        <Link
          key={path}
          className={className}
          to={path}
          onClick={closeMobileMenu}
        >
          {label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={`mobile-nav-toggle${isMobileMenuOpen ? " is-open" : ""}`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
      <button
        type="button"
        className={`mobile-nav-backdrop${isMobileMenuOpen ? " is-open" : ""}`}
        onClick={closeMobileMenu}
      />

      <nav className="navigation-bar desktop-navigation-bar">
        <Link className="home-page" to="/" onClick={closeMobileMenu}>
          Greatfortheplanet
        </Link>
        {navLinks}
        {accountLinks("desktop")}
      </nav>

      <nav
        id="mobile-navigation-bar"
        className={`navigation-bar mobile-navigation-bar${isMobileMenuOpen ? " is-open" : ""}`}
      >
        <div className="mobile-nav-header">
          <Link className="home-page" to="/" onClick={closeMobileMenu}>
            Greatfortheplanet
          </Link>
          {navLinks}
        </div>
        <div className="mobile-nav-footer">
          {accountLinks("mobile")}
        </div>
      </nav>
    </>
  );
}