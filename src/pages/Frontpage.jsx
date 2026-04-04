import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/pageTitle";
import { useState, useEffect } from "react";
import { PUBLIC_URL } from "../services/api";
import { getRegionalIntensity } from "../services/api";
import dropdownArrow from "/images/arrow_drop_down.svg";
import refreshIcon from "/images/refresh.svg";

export default function HomePage() {
  usePageTitle("Home");

  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const regionsCities = ["London", "Wales", "North Scotland", "Yorkshire", "North West England", "North Wales & Merseyside"];

  useEffect(() => {
    getRegionalIntensity()
      .then((data) => setRegions(data.filter(region => regionsCities.includes(region.shortname))))
      .catch(() => setRegions([]))
      .finally(() => setLoading(false));
  }, []);

  function refreshData() {
    setLoading(true);
    getRegionalIntensity()
      .then((data) => setRegions(data.filter(region => regionsCities.includes(region.shortname))))
      .catch(() => setRegions([]))
      .finally(() => setLoading(false));
  }

  function levelColour(index) {
    switch (index) {
      case "very low":
        return "level-very-low";
      case "low":
        return "level-low";
      case "moderate":
        return "level-moderate";
      case "high":
        return "level-high";
      case "very high":
        return "level-very-high";
      default:
        console.warn(`Unknown intensity index: ${index}`);
        return "";
    }
  }

  return (
    <>
      <header>
        <div className="header-background-id">
          <div className="text-on-image">
            <h1 className="page-title">
              Greatfortheplanet
            </h1>
            <h1 className="heading-one-inspiration-text">
              Climate Action Starts Here
            </h1>
            <h2 className="heading-two-inspiration-text">
              Let's Work Together to Reduce Global Carbon Emissions
            </h2>
          </div>
        </div>
      </header>
      <main className="container">
        <section className="introduction-section">
          <div className="card">
            <div className="kicker">
              <span className="dot"></span>
                Real Offsets. Real Impact.
            </div>
            <h1 className="title-in-card">
              Make the food and beverage sector carbon neutral worldwide.
            </h1>
            <hr className="card-seperator-line" />
            <p className="paragraph-in-card">
              The Food and Beverage Industry is one of the biggest generators of carbon in the world from production to
              shipping to retail. Our goal is to work with the industry both as individuals and businesses to help cut
              these emissions and protect a healthy planet for this great industry.
            </p>
            <p className="paragraph-in-card">
              Climate change is driven by greenhouse gases such as Carbon Dioxide, Methane and Nitrous Oxide. More carbon
              remains in the air than ever, trapping heat in our atmosphere.
            </p>
          </div>
          <div className="card">
            <h2 className="title-in-second-card">
              What can one person do?
            </h2>
            <hr className="card-seperator-line" />
            <p className="paragraph-in-card">
              There are steps we can make to help curb greenhouse gas emissions right now, they include not only supporting 
              Greta Thurnberg and other activism, but taking public transport, recycling and carbon offsetting.
            </p>
            <p className="paragraph-in-card">
              Carbon offsets are financial contributions to projects that help reduce Greenhouse Gas emissions in various 
              industries, or encourage new sustainable energy projects in an effort to balance out the damage the human race 
              is doing to the planet. 
            </p>
            <Link to="/purchase" className="events-button">
              Tourism Events
            </Link>
          </div>
        </section>
        <section>
          <div className="card">
            <div className="inside-card">
              <div className="card-left">
                <h1 className="title-in-table-card">
                  How carbon is affecting cities
                </h1>
                <hr className="card-seperator-line" />
                <p className="paragraph-in-table-card">
                  A recent report by JP Morgan stated that Climate Change is so severe now that the human race may not 
                  be able to survive on planet earth or at least be living in a very different world in less than a 
                  lifetime from now. Time is running out to limit the impending climate catastrophe if it hasn't run out 
                  already - Most people see that real steps have to be taken, but what can one person do? Climate Change 
                  is caused by Greenhouse gases, which are Carbon Dioxide, Methane and Nitrous Oxide and are what our 
                  machines, flights, agriculture, factory farms, and other environmentally harmful activities churn out 
                  into the atmosphere. Nowadays, more particles of carbon remain in the air than ever, trapping heat in 
                  our atmosphere.
                </p>
                <Link to="/projects" className="projects-button">
                  Explore Projects
                </Link>
              </div>
              <div className="card-right">
                <div className="table-div">
                  <table id="gametable" className="api-table">
                    <thead>
                      <tr className="api-table-row">
                        <th className="api-table-header">📍 Region</th>
                        <th className="api-table-header">🌱 Carbon Intensity</th>
                        <th className="api-table-header">📊 Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading ? (
                        <tr className="api-table-row">
                          <td className="api-table-cells" colSpan="3"><span>Loading...</span></td>
                        </tr>
                      ) : regions.length === 0 ? (
                        <tr className="api-table-row">
                          <td className="api-table-cells" colSpan="3"><span>Unable to load data</span></td>
                        </tr>
                      ) : (
                        regions.map((region) => (
                          <tr className="api-table-row" key={region.regionid}>
                            <td className="api-table-cells"><span>{region.shortname}</span></td>
                            <td className="api-table-cells">
                              <span>{region.intensity.forecast} 
                                <span className="table-unit"> gCO2/kWh</span>
                              </span>
                            </td>
                            <td className={`api-table-cells ${levelColour(region.intensity.index)}`}>
                              <span>{region.intensity.index}</span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                  <div className="table-caption">
                    <div className="caption-header">
                      <div className="caption-kicker" onClick={() => setShow(!show)}>
                        <span 
                          className="caption-toggle"
                        >
                          What does this data mean?
                        </span>
                        <img 
                          src={dropdownArrow} 
                          alt="toggle" 
                          className={`caption-arrow ${show ? "caption-arrow-open" : ""}`} 
                        />
                      </div>
                      <div 
                        className="table-refresh"
                        onClick={refreshData}
                      >
                        <span className="refresh-text">Refresh Data</span>
                        <img src={refreshIcon} alt="refresh" className="refresh-icon" />
                      </div>
                    </div>
                    <div className={`caption-content ${show ? "caption-visible" : ""}`}>
                      <p className="caption-text">
                        Data from <a href={PUBLIC_URL} target="_blank" rel="noopener noreferrer">{PUBLIC_URL}</a>
                      </p>
                      <p className="caption-text">
                        Carbon intensity is measured in grams of CO2 emitted per kilowatt-hour (gCO2/kWh) of electricity consumed. 
                        The lower the carbon intensity, the greener the electricity. By checking the carbon intensity of your region, 
                        you can make informed decisions about when to use electricity and when to reduce your consumption to minimize 
                        your carbon footprint.
                      </p>
                      <p className="caption-text">
                        The levels are categorized as follows:
                      </p>
                      <ul className="caption-list">
                        <li>
                          <span className="very-low"><strong>Very Low:</strong> 0-50 gCO2/kWh</span> - 
                          Excellent for using electricity.
                        </li>
                        <li>
                          <span className="low"><strong>Low:</strong> 51-100 gCO2/kWh</span> - 
                          Still good, but consider reducing usage if possible.
                        </li>
                        <li>
                          <span className="moderate"><strong>Moderate:</strong> 101-200 gCO2/kWh</span> - 
                          Try to minimize electricity use during this time.
                        </li>
                        <li>
                          <span className="high"><strong>High:</strong> 201-300 gCO2/kWh</span> - 
                          Avoid using electricity if you can.
                        </li>
                        <li>
                          <span className="very-high"><strong>Very High:</strong> 301+ gCO2/kWh</span> - 
                          Critical time to reduce electricity consumption.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}