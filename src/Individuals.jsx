export default function IndividualsPage() {
  return (
    <>
      <link rel="icon" type="images/x-icon" href="images/man_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></link>
      <title>Greatfortheplanet | Individuals</title>
      <div className="container">
        <section className="introduction-section">
          <div className="card">
            <div className="kicker">
              <span className="dot"></span>
              Individual Carbon Offsets
            </div>
            <h1 className="title-in-card">
              Your Carbon Footprint is bigger than you think.
            </h1>
            <hr className="card-seperator-line" />
            <p className="paragraph-in-card">
              The average carbon footprint for a person in the UK is around 10 tonnes of CO2 per year. while the global average 
              rests at around 4 tons**. Some of the biggest contributors to your carbon footprint are:
            </p>
            <div className="image-container">
              <img className="carbon-footprint-per-person-img" src="/images/your-footprint.png" alt="Carbon Footprint Per Person Graph" />
            </div>
          </div>
          <div className="card">
            <h2 className="title-in-second-card">
              How to Offset Your Carbon Footprint
            </h2>
            <hr className="card-seperator-line" />
            <p className="paragraph-in-card">
              Offsetting your carbon footprint is easy with Greatfortheplanet. Simply calculate your annual carbon emissions using our carbon calculator.
            </p>
            <p className="paragraph-in-card">
              Once you know your carbon footprint, you can purchase the equivalent amount of carbon offsets through our platform. These offsets fund projects that reduce or capture greenhouse gas emissions, such as reforestation, renewable energy, and energy efficiency initiatives.
            </p>
            <p className="paragraph-in-card">
              Join thousands of individuals making a real difference in the fight against climate change. Every offset counts towards a healthier planet.
            </p>
            <div className="button-group">
              <a href="#/Purchase" className="events-button">Calculate Your Offset</a>
              <a href="#/Projects" className="projects-button">View Projects</a>
            </div>
            <div className="features-showcase">
              <div className="feature-card">
                <div className="feature-check">✓</div>
                <div className="feature-content">
                  <h4 className="feature-name">Easy to Use</h4>
                  <p className="feature-desc">Simple calculator to find your footprint</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-check">✓</div>
                <div className="feature-content">
                  <h4 className="feature-name">Transparent</h4>
                  <p className="feature-desc">Track exactly where your money goes</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-check">✓</div>
                <div className="feature-content">
                  <h4 className="feature-name">Verified Impact</h4>
                  <p className="feature-desc">All projects third-party certified</p>
                </div>
              </div>
              <div className="feature-card">
                <div className="feature-check">✓</div>
                <div className="feature-content">
                  <h4 className="feature-name">Global Reach</h4>
                  <p className="feature-desc">Support projects worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}