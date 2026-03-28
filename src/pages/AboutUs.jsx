import { Link } from "react-router-dom";
import { useState } from "react";
import { usePageTitle } from "../hooks/pageTitle";
import Partner1 from "/images/partner1.png";
import Partner2 from "/images/partner2.png";
import Partner3 from "/images/partner3.png";
import Partner4 from "/images/partner4.png";

export default function AboutUsPage() {
  usePageTitle("About Us");

  const helpBoxClass = "how-to-help-box";
  const [message, setMessage] = useState("");

  function handleFeedbackSubmit() {
    if (!message.trim()) return;
    console.log("Thank you for your feedback! We will get back to you as soon as possible.");
  }

  return (
    <div className="container">
      <section className="introduction-section">
        <div className="card">
          <div className="top-of-card">
            <div className="kicker">
              <span className="dot"></span>
              About Us
            </div>
            <h1 className="title-in-card">
              We believe there is no more time.
            </h1>
            <hr className="card-seperator-line" />
            <p className="paragraph-in-card">
              We believe that there is no more time, as a human race we must vastly increase our efforts to reverse climate change or there won't 
              be a habitable planet anymore. We believe technology driven by entrepreneurship and individuals and businesses who see what is 
              happening and going to happen to this planet and are determined to change the course of self destruction our earth is on is the 
              key element to solving this crisis, this philosophy drives our project selection and the redemptions using the Greatfortheplanet 
              carbon offsets. Every program of Greatfortheplanet is validated by either Gold Standard, Earth Sustainability Group, Verified Carbon 
              Standard, Climate Action Reserve, or American Carbon Registry.
            </p>
          </div>
          <div className="bottom-of-card">
            <div className="links-to-pages-in-card">
              <div className="text-to-business-page-in-card">
                <div className="primary-text">
                  Trying to build your business positive reputation?
                </div>
                <div className="secondary-text">
                  Explore our business options:
                </div>
              </div>
              <Link to="/business" className="link-btn about-us-btn">
                Business Options
              </Link>
            </div>
            <div className="links-to-pages-in-card">
              <div className="text-to-individuals-page-in-card">
                <div className="primary-text">
                  Are you an individual wanting to make a difference?
                </div>
                <div className="secondary-text">
                  Explore our individual options:
                </div>
              </div>
              <Link to="/individuals" className="link-btn about-us-btn">
                Individual Options
              </Link>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="title-in-second-card">
            Contact Us
          </h2>
          <hr className="card-seperator-line" />
          <div className="middle-card-content">
            <p className="paragraph-in-card">
              We'd love to hear from you! Whether you have questions about our mission, want to learn more about 
              our projects, or are interested in partnering with us, feel free to reach out.
            </p>
            <p className="subheading-in-card">
              Message:
            </p>
            <textarea
              className={helpBoxClass}
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="feedback-button" onClick={handleFeedbackSubmit}>
              Send Message
            </button>
            <p className="respond-time-warning">
              We aim to respond to all inquiries within 2 business days.
            </p>
            <p className="contact-details-in-card">
              Get in touch with us for more information or to get involved.
            </p>
            <p className="contact-details-in-card">
              <strong>Email:</strong> support@greatfortheplanet.com
            </p>
            <p className="contact-details-in-card">
              <strong>Phone:</strong> +44 7985 215602
            </p>
            <p className="contact-details-in-card">
              <strong>Address:</strong> 1 Hardman St, Manchester M3 3EB, UK
            </p>
          </div>
        </div>
      </section>

      <section className="partner-section">
        <div className="card">
          <h2 className="title-in-card">
            Collaborating for a Sustainable Future
          </h2>
          <hr className="card-seperator-line" />
          <p className="paragraph-in-card">
            We are proud to collaborate with a diverse range of partners who share our commitment to combating climate change. 
            Together, we work towards innovative solutions and impactful projects that drive real change.
          </p>
          <div className="partner-logos">
            <img src={Partner1} alt="Partner 1 Logo" className="partner-logo" />
            <img src={Partner2} alt="Partner 2 Logo" className="partner-logo" />
            <img src={Partner3} alt="Partner 3 Logo" className="partner-logo" />
            <img src={Partner4} alt="Partner 4 Logo" className="partner-logo" />
          </div>
        </div>
      </section>
    </div>
  );
}