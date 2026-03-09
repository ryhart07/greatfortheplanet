export default function Navbar() {
  const rawPath = (window.location.pathname.replace("/greatfortheplanet", "") || "/").toLowerCase();
  const currentPath = rawPath.length > 1 ? rawPath.replace(/\/+$/, "") : rawPath;
  const isCurrentPage = (path) => currentPath === path.toLowerCase();

  return (
  <nav className="navigation-bar">
    <a className="home-page" href="/greatfortheplanet/">Greatfortheplanet</a>
    <ul className="nav-centre">
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/individuals") ? " current-page" : ""}`} href="/greatfortheplanet/individuals">Individuals</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/business") ? " current-page" : ""}`} href="/greatfortheplanet/business">Business</a>
      </li>
      <li className="purchase-button">
        <a className={`link-nav-bar${isCurrentPage("/purchase") ? " current-page" : ""}`} href="/greatfortheplanet/purchase">Purchase</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/projects") ? " current-page" : ""}`} href="/greatfortheplanet/projects">Projects</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/aboutus") ? " current-page" : ""}`} href="/greatfortheplanet/aboutus">About Us</a>
      </li>
    </ul>
    <div className="sign-up-sign-in-wrapper">
      <a className="log-in" id="nav-login-btn" href="/greatfortheplanet/login">
        Log In
      </a>
      <a className="sign-up" id="nav-signup-btn" href="/greatfortheplanet/sign-up">
        Sign Up
      </a>
    </div>
  </nav>
  );
}