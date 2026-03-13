import { react } from "react";

export default function ProjectsPage() {
  return (
    <>
      <div className="container">
        <section className="introduction-section">
          <div className="cards-row">
            <div className="card">
              <div className="kicker">
                <span className="dot"></span>
                Projects
              </div>
              <h1 className="title-in-card">Where your offset money goes</h1>
              <hr className="card-seperator-line" />
              <p className="paragraph-in-card">
                Your contribution supports a carefully selected range of climate projects designed to deliver measurable,
                real-world impact. Each project is independently validated by recognised standards, including Gold Standard,
                Verified Carbon Standard, Climate Action Reserve, Earth Sustainability Group, and the American Carbon Registry,
                ensuring transparency and credibility.
              </p>
              <div className="button-group">
                <a href="/greatfortheplanet/purchase" className="link-btn">PURCHASE</a>
                <a href="/greatfortheplanet/aboutus" className="link-btn">About The Mission</a>
              </div>
            </div>
            <div className="card">
              <h2 className="title-in-second-card">Why projects matter</h2>
              <hr className="card-seperator-line" />
              <p className="paragraph-in-card">
                Reducing emissions at the source is the priority, but many emissions cannot be eliminated immediately.
                High-quality climate projects fund real, measurable reductions that happen now, helping to close the gap
                while long-term solutions are developed. The most effective projects are independently verified,
                transparent, and deliver benefits beyond carbon reduction, such as protecting ecosystems, supporting
                local communities, and accelerating the transition to clean energy.
              </p>
            </div>
          </div>
          <div className="card">
            <h1 className="title-in-card">Our Projects</h1>
            <hr className="card-seperator-line" />
            <p className="paragraph-in-card">
              Your contribution is directed to a carefully selected portfolio of climate projects that deliver verified,
              real-world impact. These projects are chosen for their ability to reduce or remove emissions today, while
              also supporting long-term environmental and social outcomes. All projects are independently validated by
              recognised international standards, ensuring transparency, accountability, and measurable results you can trust.
            </p>
            <div className="projects-circle" aria-label="Project categories">
              <div className="project-item">
                <button className="project-bubble" type="button">🌬️ Wind Energy</button>
              </div>
              <div className="project-item">
                <button className="project-bubble" type="button">☀️ Solar Power</button>
              </div>
              <div className="project-item">
                <button className="project-bubble" type="button">🌳 Reforestation</button>
              </div>
              <div className="project-item">
                <button className="project-bubble" type="button">🔬 Methane Reduction</button>
              </div>
              <div className="project-item">
                <button className="project-bubble" type="button">🌊 Ocean Cleanup</button>
              </div>
              <div className="center-text">
                <div className="center-card">
                  <h3 className="center-title">Verified Projects</h3>
                  <p className="center-para">
                    Every program of Greatfortheplanet is validated by either Gold Standard, Verified Carbon Standard, Climate Action Reserve, Earth Sustainability Group or American Carbon Registry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    </>
  );
}