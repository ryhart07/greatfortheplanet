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
    { path: "/login", label: "Log In", className: "log-in", id: "nav-login-btn" },
    { path: "/sign-up", label: "Sign Up", className: "sign-up", id: "nav-signup-btn" },
  ];
  const currentPath = (window.location.pathname.replace("/greatfortheplanet", "") || "/").toLowerCase();
  const isCurrentPage = (path) => currentPath === path.toLowerCase();

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
    if (window.innerWidth <= 1024) {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const goTo = (event, path) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    window.location.assign(path);
  };

  const renderNavLinks = () => (
    <ul className="nav-centre">
      {navItems.map(({ path, label, itemClassName }) => (
        <li key={path} className={itemClassName}>
          <a
            className={`link-nav-bar${isCurrentPage(path) ? " current-page" : ""}`}
            href={`/greatfortheplanet/${path}`}
            onClick={(event) => goTo(event, `/greatfortheplanet${path}`)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderAccountLinks = (idPrefix) => (
    <div className="sign-up-sign-in-wrapper">
      {accountItems.map(({ path, label, className, id }) => (
        <a
          key={path}
          className={className}
          id={`${idPrefix}-${id}`}
          href={`/greatfortheplanet${path}`}
          onClick={(event) => goTo(event, `/greatfortheplanet${path}`)}
        >
          {label}
        </a>
      ))}
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={`mobile-nav-toggle${isMobileMenuOpen ? " is-open" : ""}`}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-navigation-bar"
        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMobileMenuOpen((previousState) => !previousState)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>
      <button
        type="button"
        className={`mobile-nav-backdrop${isMobileMenuOpen ? " is-open" : ""}`}
        aria-label="Close navigation menu"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <nav className="navigation-bar desktop-navigation-bar">
        <a className="home-page" href="/greatfortheplanet/" onClick={(event) => goTo(event, "/greatfortheplanet/")}>
          Greatfortheplanet
        </a>
        {renderNavLinks()}
        {renderAccountLinks("desktop")}
      </nav>

      <nav
        id="mobile-navigation-bar"
        className={`navigation-bar mobile-navigation-bar${isMobileMenuOpen ? " is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <a className="home-page" href="/greatfortheplanet/" onClick={(event) => goTo(event, "/greatfortheplanet/")}>
          Greatfortheplanet
        </a>
        {renderNavLinks()}
        {renderAccountLinks("mobile")}
      </nav>
    </>
  );
}