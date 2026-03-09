export default function HomePage() {  
  return (
    <>
    <link rel="icon" type="images/x-icon" href="images/home_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"></link>
    <title>Greatfortheplanet | Home</title>
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
      <div className="container">
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
            <a href="/greatfortheplanet/?tab=Purchase" className="events-button">
              Tourism Events
            </a>
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
                <a className="projects-button" href="/greatfortheplanet/?tab=Projects">
                  Explore Projects
                </a>
              </div>
              <div className="card-right">
                <div className="table-div">
                  <table id="gametable" className="api-table">
                    <tr className="api-table-row">
                      <th className="api-table-header">🏙️ City</th>
                      <th className="api-table-header">🌱 Carbon Offset (tons)</th>
                      <th className="api-table-header">🌡️ Temperature (°C)</th>
                    </tr>
                    <tr className="api-table-row">
                      <td className="api-table-cells">New York</td>
                      <td className="api-table-cells">5000</td>
                      <td className="api-table-cells">15</td>
                    </tr>
                    <tr className="api-table-row">
                      <td className="api-table-cells">London</td>
                      <td className="api-table-cells">3200</td>
                      <td className="api-table-cells">12</td>
                    </tr>
                    <tr className="api-table-row">
                      <td className="api-table-cells">Tokyo</td>
                      <td className="api-table-cells">4500</td>
                      <td className="api-table-cells">18</td>
                    </tr>
                    <tr className="api-table-row">
                      <td className="api-table-cells">Sydney</td>
                      <td className="api-table-cells">2800</td>
                      <td className="api-table-cells">22</td>
                    </tr>
                    <tr className="api-table-row">
                      <td className="api-table-cells">Paris</td>
                      <td className="api-table-cells">4100</td>
                      <td className="api-table-cells">10</td>
                    </tr>
                    <tr className="api-table-row">
                      <td className="api-table-cells">Berlin</td>
                      <td className="api-table-cells">3600</td>
                      <td className="api-table-cells">8</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}