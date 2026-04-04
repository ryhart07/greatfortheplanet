import { useState } from "react";

export default function Footer() {
  const [view, setView] = useState(null);

  function footerToggles(section) {
    setView((prev) => (prev === section ? null : section));
  }
  
  return (
    <footer className="website-footer-box">
      <p>
        © 2026 Greatfortheplanet.
        All rights reserved |
        <button className="privacy-policy" onClick={() => footerToggles('privacy')}>Privacy Policy</button>
        | 
        <button className="terms-and-conditions" onClick={() => footerToggles('terms')}>Terms & Conditions</button>
      </p>
      <div className={`footer-expand ${view === 'privacy' ? 'footer-expand--open' : ''}`}>
        <p className="privacy-policy-clicked">
          This website may collect basic personal information such as names, email addresses,
          and technical data like IP address to operate and improve the site and respond to enquiries.
          Data is not sold or shared with third parties except where required by law, is stored securely
          for only as long as necessary, and cookies may be used to enhance user experience.
          By using this website, you agree to this policy.
        </p>
      </div>
      <div className={`footer-expand ${view === 'terms' ? 'footer-expand--open' : ''}`}>
        <p className="terms-and-conditions-clicked">
          By using this website, you agree to these Terms and Conditions. All content is provided for general
          information only and may be changed without notice. We make no guarantees about accuracy, availability,
          or suitability of the information on this site. We are not responsible for any loss or damage arising from
          the use of this website. Links to third-party websites are provided for convenience and we have no control
          over their content. Unauthorised use of this website may give rise to a claim for damages and/or be a criminal
          offence. Continued use of the website indicates acceptance of these terms.
        </p>
      </div>
    </footer>
  );
}