import { useState } from "react";
import { usePageTitle } from "../hooks/pageTitle";
import { Link } from "react-router-dom";
import homePageIcon from "/images/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import googleIcon from "/images/google-icon.png";
import appleIcon from "/images/apple_logo.svg";

export default function LogInPage() {
  usePageTitle("Log In");
  const [passwordValue, setPasswordValue] = useState("");
  const password = "input-field";
  const submitButton = "login-button";
  const googleLogInButton = getGoogleLogInClass();
  const appleLogInButton = getAppleLogInClass();
  
  function passwordValidation(e) {
    setPasswordValue(e.target.value);

    const tempPassword = "testing123";

    // BUG - This condition is not working as expected. 
    // It always logs "Password is correct." even when 
    // the password is incorrect.
    if (passwordValue !== tempPassword) {
        console.log("Incorrect email or password. Please try again.");
    } else {
        console.log("Password is correct.");
    }
  }


  function getGoogleLogInClass() {
    return "google-login-option";
  }

  function handleGoogleLogIn() {
    console.log("Logging in with Google!");
  }

  function getAppleLogInClass() {
    return "apple-login-option";
  }

  function handleAppleLogIn() {
    console.log("Logging in with Apple!");
  } 

  function handleLogIn() {
    // Placeholder for log in logic
    console.log("Logging In!");
  }

  return (
    <div className="container">
      <section className="login-section">
        <div className="card">
          <div className="log-in-text">
            <h1 className="title-in-card log-in-title">Log In</h1>
            <div className="card-paragraph-wrapper">
              <p className="card-paragraph">
                Log in to your Greatfortheplanet account here.
              </p>
              <p className="card-paragraph">
                Don't have an account?
                <Link className="sign-up-link" to="/signup">
                  Sign up
                </Link>
                here.
              </p>
            </div>
            <div className="home-page-link-wrapper">
              <p className="home-page-link">
                <img
                  src={homePageIcon}
                  alt="Home"
                />
                <Link className="home-link" to="/">
                  Return to Home Page
                </Link>
              </p>
            </div>
          </div>
          <hr className="card-seperator-line sign-up-seperator" />
          <form className="login-form">
            <div className="login-wrapper">
              <label className="input-label" htmlFor="email">
                Email Address
              </label>
              <input
                className="input-field"
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <input
                className={password}
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                onChange={passwordValidation}
              />
            </div>
            <div className="forgot-password-link-wrapper">
              <button type="button" className="forgot-password-link">
                Forgot your password?
              </button>
            </div>
            <div className="incorrect-password">
              <p className={passwordValue !== "testing123" && 
                submitButton === true ? 
                "incorrect-password-message" : 
                "hidden"}>
                Incorrect email or password. Please try again.
              </p>
            </div>
            <div className="login-button-wrapper">
              <div className="remember-me-wrapper">
                <input
                  className="remember-me-checkbox"
                  type="checkbox"
                />
                <label className="remember-me-label" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <button
                className={submitButton}
                type="submit"
                // BUG - The onClick handler is not working as expected. 
                // It should only call handleLogIn when submitButton is true, 
                // but it is currently calling handleLogIn regardless of the value of submitButton.
                onClick={submitButton === true ? handleLogIn : undefined}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
        <div className="card">
          <div className="inside-sign-up-card">
            <p className="or-log-in-with-text">or log in with</p>
            <div className="api-login-options-wrapper">
              <button
                className={"api-login-option " + googleLogInButton}
                type="button"
                onClick={handleGoogleLogIn}
              >
                <img
                  className="api-login-icon"
                  src={googleIcon}
                  alt="Google Logo"
                />
                <span className="api-login-text">Google</span>
              </button>
              <button
                className={"api-login-option " + appleLogInButton}
                type="button"
                onClick={handleAppleLogIn}
              >
                <img
                  className="api-login-icon"
                  src={appleIcon}
                  alt="Apple Logo"
                />
                <span className="api-login-text">Apple</span>
              </button>
            </div>
            <hr className="card-seperator-line sign-up-seperator" />
            <div className="bottom-of-sign-up-card">
              <h2 className="info-card-title">Why join us?</h2>
              <div className="info-card-content">
                <div className="info-item">
                  <span className="info-icon">🌍</span>
                  <p>Make a difference for the planet</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">🤝</span>
                  <p>Join a community of changemakers</p>
                </div>
                <div className="info-item">
                  <span className="info-icon">📊</span>
                  <p>Track your environmental impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}