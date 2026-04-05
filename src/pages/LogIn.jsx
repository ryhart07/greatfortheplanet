import { useState } from "react";
import { usePageTitle } from "../hooks/pageTitle";
import { Link } from "react-router-dom";
import homePageIcon from "/images/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import googleIcon from "/images/google-icon.png";
import appleIcon from "/images/apple_logo.svg";

export default function LogInPage() {
  usePageTitle("Log In");
  const [passwordValue, setPasswordValue] = useState("");
  const specialCharacters = "!@#$%^&*()_+{}|:\"<>?[];',./`~$£€=-\\";
  
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

  const password = "input-field";
  const googleLogInButton = getGoogleLogInClass();
  const appleLogInButton = getAppleLogInClass();

  function handleLogIn() {
    const submitButton = "login-button";
    
    // Placeholder for log in logic
    console.log("Logging In!");
    
    return submitButton;
  }

  return (
    <h1>Log In Page is being made.</h1>
  );
}