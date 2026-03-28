import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/pageTitle";

export default function BusinessPage() {
  usePageTitle("Business");
  
  return (
    <main className="container">
      <section className="introduction-section">
        <div className="card">
          <div className="kicker">
            <span className="dot"></span>
              Business
          </div>
          <h1 className="title-in-card">
            Business guidance
          </h1>
          <hr className="card-seperator-line" />
          <div>
            <p className="paragraph-in-card">
              Offsetting provides a mechanism to reduce greenhouse gas (GHG) emissions in the most cost-
              effective and economically-efficient manner.
              Carbon offsets are therefore an available tool for individuals and organizations that wish to
              mitigate the impact of their own carbon footprint.
              We offer a range of carbon offset projects to international standards.
              Carbon offsetting funds solutions to reducing carbon emissions now. Frequently carbon
              offsetting reduces emissions much faster than you can as an individual/single company.
            </p>
            <p className="paragraph-in-card">
              Any Business Carbon offset including Verified Carbon Standard (VCS), Gold Standard VERs or
              Kyoto compliant offset credits purchased from us will meet the offsetting part of the PAS 2060
              guidance on carbon neutrality, therefore assuring your carbon neutral claims.
            </p>
          </div>
        </div>
        <div className="card">
          <h2 className="title-in-second-card">
            Why Choose Greatfortheplanet for Your Business?
          </h2>
          <hr className="card-seperator-line" />
          <p className="paragraph-in-card">
            <strong>Verified Standards:</strong> All our carbon offset projects meet internationally recognized standards including Gold Standard, Verified Carbon Standard (VCS), and Climate Action Reserve.
          </p>
          <p className="paragraph-in-card">
            <strong>Transparent Impact:</strong> Track exactly where your investments go and measure the real-world impact of your carbon offset contributions.
          </p>
          <p className="paragraph-in-card">
            <strong>Business Solutions:</strong> From corporate sustainability goals to supply chain carbon reduction, we provide tailored solutions for businesses of all sizes.
          </p>
          <div className="button-group">
            <Link to="/purchase" className="link-btn">Get Started</Link>
            <Link to="/aboutus" className="link-btn">Learn More</Link>
          </div>
        </div>
        <div className="card">
          <h2 className="title-in-second-card">
            Getting Started with Carbon Offsetting
          </h2>
          <hr className="card-seperator-line" />
          <p className="paragraph-in-card">
            Ready to offset your business carbon footprint? Our simple three-step process makes it easy:
          </p>
          <p className="paragraph-in-card">
            <strong>Step 1:</strong> Calculate your carbon emissions using our assessment tool or provide your data.
          </p>
          <p className="paragraph-in-card">
            <strong>Step 2:</strong> Browse our curated selection of verified carbon offset projects and choose what aligns with your values.
          </p>
          <p className="paragraph-in-card">
            <strong>Step 3:</strong> Purchase your offsets and begin tracking your impact in real-time through our dashboard.
          </p>
          <p className="paragraph-in-card">
            Contact our team today for a customized quote and consultation.
          </p>
        </div>
      </section>
    </main>
  );
}