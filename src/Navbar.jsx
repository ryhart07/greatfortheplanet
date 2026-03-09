export default function Navbar() {
  const currentPath = (window.location.pathname.replace("/greatfortheplanet", "") || "/").toLowerCase();
  const isCurrentPage = (path) => currentPath === path.toLowerCase();
  const goTo = (event, path) => {
    event.preventDefault();
    window.location.assign(path);
  };

  return (
  <nav className="navigation-bar">
    <a className="home-page" href="/greatfortheplanet/" onClick={(event) => goTo(event, "/greatfortheplanet/")}>Greatfortheplanet</a>
    <ul className="nav-centre">
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/individuals") ? " current-page" : ""}`} href="/greatfortheplanet/individuals" onClick={(event) => goTo(event, "/greatfortheplanet/individuals")}>Individuals</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/business") ? " current-page" : ""}`} href="/greatfortheplanet/business" onClick={(event) => goTo(event, "/greatfortheplanet/business")}>Business</a>
      </li>
      <li className="purchase-button">
        <a className={`link-nav-bar${isCurrentPage("/purchase") ? " current-page" : ""}`} href="/greatfortheplanet/purchase" onClick={(event) => goTo(event, "/greatfortheplanet/purchase")}>Purchase</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/projects") ? " current-page" : ""}`} href="/greatfortheplanet/projects" onClick={(event) => goTo(event, "/greatfortheplanet/projects")}>Projects</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/aboutus") ? " current-page" : ""}`} href="/greatfortheplanet/aboutus" onClick={(event) => goTo(event, "/greatfortheplanet/aboutus")}>About Us</a>
      </li>
    </ul>
    <div className="sign-up-sign-in-wrapper">
      <a className="log-in" id="nav-login-btn" href="/greatfortheplanet/login" onClick={(event) => goTo(event, "/greatfortheplanet/login")}>
        Log In
      </a>
      <a className="sign-up" id="nav-signup-btn" href="/greatfortheplanet/sign-up" onClick={(event) => goTo(event, "/greatfortheplanet/sign-up")}>
        Sign Up
      </a>
    </div>
  </nav>
  );
}