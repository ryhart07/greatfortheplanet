import { useState } from "react";
import { usePageTitle } from "../hooks/pageTitle";
import { Link } from "react-router-dom";
import { createUser } from "../services/api";
import homePageIcon from "/images/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import googleIcon from "/images/google-icon.png";
import appleIcon from "/images/apple_logo.svg";

export default function SignUpPage() {
  usePageTitle("Sign Up");
  const [passwordValue, setPasswordValue] = useState("");
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState("empty-email");
  const [passwordStatus, setPasswordStatus] = useState("empty-password");
  const specialCharacters = "!@#$%^&*()_+{}|:\"<>?[];',./`~$£€=-\\";
  
  function getGoogleSignUpClass() {
    return "google-login-option";
  }

  function handleGoogleSignUp() {
    // This is where the logic for signing up with Google would go. 
    // For now, it just logs to the console.
    console.log("Signing up with Google!");
  }

  function getAppleSignUpClass() {
    return "apple-login-option";
  }

  function handleAppleSignUp() {
    // This is where the logic for signing up with Apple would go. 
    // For now, it just logs to the console.
    console.log("Signing up with Apple!");
  } 
    
  function passwordValidation(e) {
    const value = e.target.value;
    setPasswordValue(value);

    if (value.length < minLength) {
        setPasswordStatus("invalid-password");
    } else if (value.includes(" ")) {
        setPasswordStatus("invalid-password");
    } else if (!/[A-Z]/.test(value)) {
        setPasswordStatus("invalid-password");
    } else if (!specialCharacters.split("").some(char => value.includes(char))) {
        setPasswordStatus("invalid-password");
    } else {
        setPasswordStatus("valid-password");
    }

    return { setPasswordStatus };
  }

  function emailValidation(e) {
    // Make it so that the error message only shows
    // up after the user submits the form or clicks 
    // out of the email input field for the first time
    const value = e.target.value;
    setEmail(value);
    const acceptedEmailDomains = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com"];

    if (acceptedEmailDomains.some(domain => value.endsWith(`@${domain}`)) && 
    value.includes("@") && 
    value.includes(".")) {
        setEmailStatus("valid-email");
    } else {
        setEmailStatus("invalid-email");
    }

    return { setEmailStatus };
  }
  
  const minLength = 8;
  const maxLength = 20;
  const googleSignUpButton = getGoogleSignUpClass();
  const appleSignUpButton = getAppleSignUpClass();

  function handleSignUp(e) {
    e.preventDefault();

    if (emailStatus !== "valid-email" || passwordStatus !== "valid-password") {
      console.error("Email or password is invalid");
      return;
    } else {
      createUser({
        email,
        password: passwordValue
      })
      .then(res => res.json())
      .then(data => console.log(`User created with ID: ${data.id}`))
      .catch(err => console.error(`Error creating user: ${err}`));
    }
  }

  return (
    <div className="container">
      <section className="login-section">
        <div className="card">
          <div className="log-in-text">
            <h1 className="title-in-card log-in-title">Sign Up</h1>
            <div className="card-paragraph-wrapper">
              <p className="card-paragraph">
                Create a Greatfortheplanet account here.
              </p>
              <p className="card-paragraph">
                Already have an account?
                <Link className="sign-up-link" to="/login">
                  Log In
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
                value={email}
                onChange={emailValidation}
                required
              />
              <p>
                {/* Make this look nicer */}
                {emailStatus === "invalid-email" && (
                  <span className="validation-error">Please enter a valid email address.</span>
                )}
              </p>
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <input
                className="input-field"
                type="password"
                placeholder="Enter Password"
                name="password"
                minLength={minLength}
                maxLength={maxLength}
                onChange={passwordValidation}
                required
              />
              <ul className={`input-checklist${passwordValue.length === 0 ? " hide" : ""} ${passwordStatus}`}>
                <li className={passwordValue.length >= minLength ? "checklist-item-valid" : "checklist-item"}>
                  At least {minLength} characters
                </li>
                <li className={passwordValue.includes(" ") ? "checklist-item" : "checklist-item-valid"}>
                  No spaces allowed
                </li>
                <li className={specialCharacters.split("").some(char => 
                  passwordValue.includes(char)) ? "checklist-item-valid" : "checklist-item"}>
                  At least one special character
                </li>
                <li className={/[A-Z]/.test(passwordValue) ? "checklist-item-valid" : "checklist-item"}>
                  At least one uppercase letter
                </li>
              </ul>
            </div>
            <div className="login-button-wrapper">
              <button 
                className="login-button" 
                type="submit"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <div className="card">
          <div className="inside-sign-up-card">
            <p className="or-log-in-with-text">or sign up with</p>
            <div className="api-login-options-wrapper">
              <button
                className={"api-login-option " + googleSignUpButton}
                type="button"
                onClick={handleGoogleSignUp}
              >
                <img
                  className="api-login-icon"
                  src={googleIcon}
                  alt="Google Logo"
                />
                <span className="api-login-text">Google</span>
              </button>
              <button
                className={"api-login-option " + appleSignUpButton}
                type="button"
                onClick={handleAppleSignUp}
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