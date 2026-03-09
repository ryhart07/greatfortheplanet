export default function Navbar() {
  const currentPath = window.location.pathname.toLowerCase();
  const isCurrentPage = (path) => currentPath === path.toLowerCase();

  return (
  <nav className="navigation-bar">
    <a className="home-page" href="/">Greatfortheplanet</a>
    <ul className="nav-centre">
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/Individuals") ? " current-page" : ""}`} href="/Individuals">Individuals</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/Business") ? " current-page" : ""}`} href="/Business">Business</a>
      </li>
      <li className="purchase-button">
        <a className={`link-nav-bar${isCurrentPage("/Purchase") ? " current-page" : ""}`} href="/Purchase">Purchase</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/Projects") ? " current-page" : ""}`} href="/Projects">Projects</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/AboutUs") ? " current-page" : ""}`} href="/AboutUs">About Us</a>
      </li>
    </ul>
    <div className="sign-up-sign-in-wrapper">
      <a className="log-in" id="nav-login-btn" href="/login">
        Log In
      </a>
      <a className="sign-up" id="nav-signup-btn" href="/sign-up">
        Sign Up
      </a>
    </div>
  </nav>
  );
}