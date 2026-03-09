export default function Navbar({ currentPath, onNavigate }) {
  const isCurrentPage = (path) => currentPath === path.toLowerCase();

  const handleClick = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();
    onNavigate(path);
  };

  return (
  <nav className="navigation-bar">
    <a className="home-page" href="/greatfortheplanet/" onClick={(event) => handleClick(event, "/")}>Greatfortheplanet</a>
    <ul className="nav-centre">
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/individuals") ? " current-page" : ""}`} href="/greatfortheplanet/individuals" onClick={(event) => handleClick(event, "/individuals")}>Individuals</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/business") ? " current-page" : ""}`} href="/greatfortheplanet/business" onClick={(event) => handleClick(event, "/business")}>Business</a>
      </li>
      <li className="purchase-button">
        <a className={`link-nav-bar${isCurrentPage("/purchase") ? " current-page" : ""}`} href="/greatfortheplanet/purchase" onClick={(event) => handleClick(event, "/purchase")}>Purchase</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/projects") ? " current-page" : ""}`} href="/greatfortheplanet/projects" onClick={(event) => handleClick(event, "/projects")}>Projects</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/aboutus") ? " current-page" : ""}`} href="/greatfortheplanet/aboutus" onClick={(event) => handleClick(event, "/aboutus")}>About Us</a>
      </li>
    </ul>
    <div className="sign-up-sign-in-wrapper">
      <a className="log-in" id="nav-login-btn" href="/greatfortheplanet/login" onClick={(event) => handleClick(event, "/login")}>
        Log In
      </a>
      <a className="sign-up" id="nav-signup-btn" href="/greatfortheplanet/sign-up" onClick={(event) => handleClick(event, "/sign-up")}>
        Sign Up
      </a>
    </div>
  </nav>
  );
}