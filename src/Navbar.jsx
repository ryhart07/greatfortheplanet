export default function Navbar() {
  const currentTab = new URLSearchParams(window.location.search).get("tab");
  const currentPath = currentTab ? `/${currentTab}`.toLowerCase() : "/";
  const isCurrentPage = (path) => currentPath === path.toLowerCase();

  return (
  <nav className="navigation-bar">
    <a className="home-page" href="/greatfortheplanet/">Greatfortheplanet</a>
    <ul className="nav-centre">
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/Individuals") ? " current-page" : ""}`} href="/greatfortheplanet/?tab=Individuals">Individuals</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/Business") ? " current-page" : ""}`} href="/greatfortheplanet/?tab=Business">Business</a>
      </li>
      <li className="purchase-button">
        <a className={`link-nav-bar${isCurrentPage("/Purchase") ? " current-page" : ""}`} href="/greatfortheplanet/?tab=Purchase">Purchase</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/Projects") ? " current-page" : ""}`} href="/greatfortheplanet/?tab=Projects">Projects</a>
      </li>
      <li className="list-item-in-navigation-bar">
        <a className={`link-nav-bar${isCurrentPage("/AboutUs") ? " current-page" : ""}`} href="/greatfortheplanet/?tab=AboutUs">About Us</a>
      </li>
    </ul>
    <div className="sign-up-sign-in-wrapper">
      <a className="log-in" id="nav-login-btn" href="/greatfortheplanet/?tab=login">
        Log In
      </a>
      <a className="sign-up" id="nav-signup-btn" href="/greatfortheplanet/?tab=sign-up">
        Sign Up
      </a>
    </div>
  </nav>
  );
}