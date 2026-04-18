import { Link } from "react-router-dom";
import { useState } from "react";
import { usePageTitle } from "../hooks/pageTitle";
import CarbonFootprintGraph from "/images/your-footprint.png";

export default function IndividualsPage() {
  usePageTitle("Individuals");
  const [carbonOffset, setCarbonOffset] = useState(1);
  const [carbonOffsetInput, setCarbonOffsetInput] = useState("1");
  const maxCarbonOffset = 10000000;
  const carbonOffsetPrice = 6.99;
  const amountOfPounds = carbonOffset * 1000;
  const estimatedCost = (carbonOffset * carbonOffsetPrice).toFixed(2);

  function commitCarbonOffsetValue(rawValue) {
    if (rawValue === "") {
      setCarbonOffset(1);
      setCarbonOffsetInput("1");
      return;
    }
    const parsed = Number(rawValue);
    if (Number.isNaN(parsed) || parsed < 1) {
      setCarbonOffset(1);
      setCarbonOffsetInput("1");
      return;
    }
    const clamped = Math.min(maxCarbonOffset, Math.floor(parsed));
    setCarbonOffset(clamped);
    setCarbonOffsetInput(String(clamped));
  }

  function handleCarbonOffsetChange(event) {
    const raw = event.target.value;
    setCarbonOffsetInput(raw);
    if (raw === "") {
      return;
    }
    const parsed = Number(raw);
    if (Number.isNaN(parsed)) {
      return;
    }
    if (parsed < 1) {
      setCarbonOffset(1);
      setCarbonOffsetInput("1");
      return;
    }
    const clamped = Math.min(maxCarbonOffset, Math.floor(parsed));
    setCarbonOffset(clamped);
    setCarbonOffsetInput(String(clamped));
  }

  function handleCarbonOffsetKeyDown(event) {
    if (event.key === "-") {
      event.preventDefault();
    }
  }

  function handleCarbonOffsetPaste(event) {
    const text = event.clipboardData.getData("text");
    if (text.includes("-")) {
      event.preventDefault();
    }
  }
  
  function handleCarbonFocus(e) {
    e.target.select();
  }

  return (
    <main className="container">
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
            The average carbon footprint for a person in the UK is around 10 tonnes of 
            CO2 per year. while the global average rests at around 4 tons**. Some of 
            the biggest contributors to your carbon footprint are:
          </p>
          <div className="image-container">
            <img 
              className="carbon-footprint-per-person-img" 
              src={CarbonFootprintGraph} 
              alt="Carbon Footprint Per Person Graph" 
            />
          </div>
        </div>
        <div className="card">
          <h2 className="title-in-second-card">
            How to Offset Your Carbon Footprint
          </h2>
          <hr className="card-seperator-line" />
          <p className="paragraph-in-card">
            Offsetting your carbon footprint is easy with Greatfortheplanet. Simply 
            calculate your annual carbon emissions using our carbon calculator.
          </p>
          <p className="paragraph-in-card">
            Once you know your carbon footprint, you can purchase the equivalent 
            amount of carbon offsets through our platform. These offsets fund projects
            that reduce or capture greenhouse gas emissions, such as reforestation, 
            renewable energy, and energy efficiency initiatives.
          </p>
          <p className="paragraph-in-card">
            Join thousands of individuals making a real difference in the fight against 
            climate change. Every offset counts towards a healthier planet.
          </p>
          <div className="button-group">
            <Link to="/purchase" className="events-button">Calculate Your Offset</Link>
            <Link to="/projects" className="projects-button">View Projects</Link>
          </div>
          <div className="features-showcase">
            <div className="feature-card">
              <div className="feature-check">&#10003;</div>
              <div className="feature-content">
                <h4 className="feature-name">Easy to Use</h4>
                <p className="feature-desc">Simple calculator to find your footprint</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-check">&#10003;</div>
              <div className="feature-content">
                <h4 className="feature-name">Transparent</h4>
                <p className="feature-desc">Track exactly where your money goes</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-check">&#10003;</div>
              <div className="feature-content">
                <h4 className="feature-name">Verified Impact</h4>
                <p className="feature-desc">All projects third-party certified</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-check">&#10003;</div>
              <div className="feature-content">
                <h4 className="feature-name">Global Reach</h4>
                <p className="feature-desc">Support projects worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="individual-calc">
        <div className="card">
          <h2 className="title-in-second-card">
            Calculate Your Carbon Footprint
          </h2>
          <hr className="card-seperator-line" />
          <div className="subheading-in-card">
            <p className="paragraph-in-card individual-calc-paragraph">
              For Customers seeking a more customised approach, our Quick Calculator 
              gives easy access to Carbon Emissions Data.
            </p>
            <p className="paragraph-in-card individual-calc-paragraph">
              £6.99 per 1000lbs of CO2
            </p>
            <p>
              Enter your quantity in 1000 lbs increments below. (For example, to offset 
              20,000 lbs, enter a quantity of “20”)
            </p>
          </div>
          <div className="left-of-card">
            <input 
              type="number" 
              className="carbon-calc-input" 
              placeholder="Enter your details to calculate your footprint" 
              value={carbonOffsetInput}
              onFocus={handleCarbonFocus}
              onChange={handleCarbonOffsetChange}
              onBlur={() => commitCarbonOffsetValue(carbonOffsetInput)}
              onKeyDown={handleCarbonOffsetKeyDown}
              onPaste={handleCarbonOffsetPaste}
              min={1}
              max={maxCarbonOffset}
              inputMode="numeric"
            />
          </div>
          <div className="right-of-card">
            <p className="paragraph-in-card individual-calc-total">
              Amount of pounds: {amountOfPounds} lbs
            </p>
            <p className="paragraph-in-card individual-calc-total">
              Estimated Cost: £{estimatedCost}
            </p>
          </div>
          <div className="explain-calculate">
            <p className="paragraph-in-card individual-calc-paragraph">
              The average citizen in Western Countries produces between 18- 42,000 lbs. 
              of Greenhouse Gas emissions each year, or about 1,500 to 3,500 lbs each 
              month. This is equivalent to the emissions from driving a car for 20,000 
              miles or more.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}