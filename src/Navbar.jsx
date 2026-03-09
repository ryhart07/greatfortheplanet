export default function Navbar({ currentPath, onNavigate }) {
  const isCurrentPage = (path) => currentPath === path.toLowerCase();

  const handleNavClick = (event, path) => {
    // Keep normal browser behavior for modified clicks and middle-click open-in-new-tab.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    onNavigate(path);
  };

  return (
  <nav className="navigation-bar">
    <a className="home-page" href="/greatfortheplanet/" onClick={(event) => handleNavClick(event, "/")}>Greatfortheplanet</a>
    <ul className="nav-centre">
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/individuals") ? " current-page" : ""}`} href="/greatfortheplanet/individuals" onClick={(event) => handleNavClick(event, "/individuals")}>Individuals</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/business") ? " current-page" : ""}`} href="/greatfortheplanet/business" onClick={(event) => handleNavClick(event, "/business")}>Business</a>
      </li>
      <li className="purchase-button">
        <a className={`link-nav-bar${isCurrentPage("/purchase") ? " current-page" : ""}`} href="/greatfortheplanet/purchase" onClick={(event) => handleNavClick(event, "/purchase")}>Purchase</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/projects") ? " current-page" : ""}`} href="/greatfortheplanet/projects" onClick={(event) => handleNavClick(event, "/projects")}>Projects</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/aboutus") ? " current-page" : ""}`} href="/greatfortheplanet/aboutus" onClick={(event) => handleNavClick(event, "/aboutus")}>About Us</a>
      </li>
    </ul>
    <div className="sign-up-sign-in-wrapper">
      <a className="log-in" id="nav-login-btn" href="/greatfortheplanet/login" onClick={(event) => handleNavClick(event, "/login")}>
        Log In
      </a>
      <a className="sign-up" id="nav-signup-btn" href="/greatfortheplanet/sign-up" onClick={(event) => handleNavClick(event, "/sign-up")}>
        Sign Up
      </a>
    </div>
  </nav>
  );
}