export default function LogInPage() {
  return (
    <>
      <div id="container">
        <section className="login-section">
          <div className="card">
            <div className="log-in-text">
              <h1 className="title-in-card">Sign Up</h1>

              <div className="card-paragraph-wrapper">
                <p className="card-paragraph">
                  Create a Greatfortheplanet account here.
                </p>
                <p className="card-paragraph">
                  Already have an account?
                  <a className="sign-up-link" href="login.html">
                    Log In
                  </a>
                  here.
                </p>
              </div>

              <div className="home-page-link-wrapper">
                <p className="home-page-link">
                  <img
                    src="/images/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
                    alt="Home"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <a className="home-link" href="index.html">
                    Return to Home Page
                  </a>
                </p>
              </div>
            </div>
            <hr className="card-seperator-line" />
            <form
              className="login-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="login-wrapper">
                <label className="input-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="input-field"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
                <label className="input-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="input-field"
                  type="password"
                  id="password"
                  name="password"
                  minLength="3"
                  maxLength="20"
                  required
                />
              </div>
              <div className="login-button-wrapper">
                <div className="remember-me-wrapper">
                  <input
                    className="remember-me-checkbox"
                    type="checkbox"
                    id="remember-me"
                  />
                  <label className="remember-me-label" htmlFor="remember-me">
                    Remember me
                    <span className="checkbox-checked">
                      We wont ask for your login details next time.
                    </span>
                  </label>
                </div>
                <button className="login-button" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="social-card">
            <p className="or-log-in-with-text">or sign up with</p>
            <div className="api-login-options-wrapper">
              <button
                className="api-login-option google-login-option"
                type="button"
                onClick={() => {}}
              >
                <img
                  className="api-login-icon"
                  src="/images/google-icon.png"
                  alt="Google Logo"
                />
                <span className="api-login-text">Google</span>
              </button>
              <button
                className="api-login-option apple-login-option"
                type="button"
                onClick={() => {}}
              >
                <img
                  className="api-login-icon"
                  src="/images/apple_logo.svg"
                  alt="Apple Logo"
                />
                <span className="api-login-text">Apple</span>
              </button>
            </div>
            <hr className="card-seperator-line" />
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
        </section>
      </div>
    </>
  );
}