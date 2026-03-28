import { useState } from "react";
import { usePageTitle } from "../hooks/pageTitle";

export default function PurchasePage() {
  usePageTitle("Purchase");

  const [fly, setFly] = useState(false);
  const [people, setPeople] = useState(1);
  const [peopleInput, setPeopleInput] = useState("1");

  const MAX_PEOPLE = 10_000_000;
  const MIN_PURCHASE_LBS = 1_000;
  const RATE_PER_1000 = 5.99;
  const LBS_WITH_FLYING = 3500;
  const LBS_WITHOUT_FLYING = 1750;

  const perPerson = fly ? LBS_WITH_FLYING : LBS_WITHOUT_FLYING;
  const totalBeforeMinimum = people * perPerson;
  const adjustedTotal = Math.max(MIN_PURCHASE_LBS, totalBeforeMinimum);
  const totalCost = (adjustedTotal / 1000) * RATE_PER_1000;

  const formatLbs = (value) => `${value.toLocaleString()} lbs`;
  const formatPounds = (value) => `£${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  function commitPeopleValue(rawValue) {
    if (rawValue === "") {
      setPeople(1);
      setPeopleInput("1");
      return;
    }

    const parsed = Number(rawValue);
    if (Number.isNaN(parsed) || parsed < 1) {
      setPeople(1);
      setPeopleInput("1");
      return;
    }

    const clamped = Math.min(MAX_PEOPLE, Math.floor(parsed));
    setPeople(clamped);
    setPeopleInput(String(clamped));
  }

  function handlePeopleChange(event) {
    const raw = event.target.value;
    setPeopleInput(raw);

    if (raw === "") {
      return;
    }

    const parsed = Number(raw);
    if (Number.isNaN(parsed)) {
      return;
    }

    if (parsed < 1) {
      setPeople(1);
      setPeopleInput("1");
      return;
    }

    const clamped = Math.min(MAX_PEOPLE, Math.floor(parsed));
    setPeople(clamped);
    setPeopleInput(String(clamped));
  }

  function handlePeopleKeyDown(event) {
    if (event.key === "-") {
      event.preventDefault();
    }
  }

  function handlePeoplePaste(event) {
    const text = event.clipboardData.getData("text");
    if (text.includes("-")) {
      event.preventDefault();
    }
  }

  function handlePeopleFocus(event) {
    event.target.select();
  }

  return (
    <div className="container">
      <section className="introduction-section">
        <div className="card">
          <div className="kicker">
            <span className="dot"></span>
            Calculate Carbon Offset Certificates
          </div>
          <h1 className="title-in-card">Calculate Your Carbon Offset Certificates</h1>
          <hr className="card-seperator-line" />
          <p className="paragraph-in-card">
            find out how much carbon you release per person and the cost to offset it
          </p>
          <div className="offset-calculator">
            <div className="calc-two-mini-cards">
              <div className="calc-mini-card calc-mini-card--tall">
                <div className="calc-mini-head">
                  <span className="calc-icon calc-icon--green">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <h3 className="calc-mini-title">Number of People</h3>
                </div>
                {people === MAX_PEOPLE && (
                  <div className="over-people-limit">
                    <span className="over-limit-text">Max {MAX_PEOPLE.toLocaleString()} people</span>
                  </div>
                )}
                <input
                  className="calc-input calc-input--card"
                  type="number"
                  min="1"
                  max={MAX_PEOPLE}
                  value={peopleInput}
                  onChange={handlePeopleChange}
                  onFocus={handlePeopleFocus}
                  onBlur={() => commitPeopleValue(peopleInput)}
                  onKeyDown={handlePeopleKeyDown}
                  onPaste={handlePeoplePaste}
                  inputMode="numeric"
                />
              </div>
              <div className="calc-mini-card calc-mini-card--tall">
                <div className="calc-mini-head">
                  <span className="calc-icon calc-icon--blue">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10.5 6.8 21 3l-3.8 10.5L10.5 6.8Z" />
                      <path d="M21 3 14 14" />
                      <path d="M14 14 7 21l-1.5-5.5L0 14l7-7 7 7Z" opacity="0" />
                      <path d="M14 14 7.5 20.5 6 15l-5.5-1.5L7 7l7 7Z" />
                    </svg>
                  </span>
                  <h3 className="calc-mini-title">Flying Involved?</h3>
                </div>
                <div className="calc-toggle calc-toggle--grid">
                  <button
                    type="button"
                    className={fly ? "calc-btn is-active" : "calc-btn"}
                    onClick={() => setFly(true)}
                    aria-pressed={fly}
                  >
                    Yes, flying
                  </button>
                  <button
                    type="button"
                    className={!fly ? "calc-btn is-active" : "calc-btn"}
                    onClick={() => setFly(false)}
                    aria-pressed={!fly}
                  >
                    No flying
                  </button>
                </div>
              </div>
            </div>

            <div className="calc-mini-card">
              <div className="calc-mini-header">
                <span className="calc-mini-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </span>
                <h3 className="calc-mini-card-title">Your Carbon Offset</h3>
              </div>
              <div className="calc-results">
                <div className="calc-row">
                  <span className="calc-muted">Number of people:</span>
                  <span className="calc-strong">
                    {people}
                  </span>
                </div>

                <div className="calc-row">
                  <span className="calc-muted">Per person offset:</span>
                  <span className="calc-strong">
                    {formatLbs(perPerson)}
                  </span>
                </div>

                <div className="calc-row">
                  <span className="calc-muted">Total before minimum:</span>
                  <span className="calc-strong">
                    {formatLbs(totalBeforeMinimum)}
                  </span>
                </div>
                <div className="calc-mini-divider"></div>
                <div className="calc-row calc-row-big">
                  <span className="calc-muted-big">Carbon Offset Total:</span>
                  <span className="calc-highlight">
                    {formatLbs(adjustedTotal)}
                  </span>
                </div>
                <div className="calc-row calc-row-big">
                  <span className="calc-muted-big">Total Cost:</span>
                  <span className="calc-highlight">
                    {formatPounds(totalCost)}
                  </span>
                </div>
                <div className="calc-purchase-div">
                  <button className="calc-purchase-btn link-btn">PURCHASE</button>
                </div>
              </div>
            </div>
            <div className="calc-mini-card">
              <h3 className="calc-subtitle">Examples</h3>
              <div className="examples-list">
                <div className="calc-example-item">
                  • 8 people skydiving (flying): 8 &times; 3,500 = 28,000 lbs = £167.72
                </div>
                <div className="calc-example-item">
                  • 100 people at a wedding (flying): 100 &times; 3,500 = 350,000 lbs = £2,096.50
                </div>
                <div className="calc-example-item">
                  • 25 people at local birthday party (no flying): 25 &times; 1,750 = 43,750 lbs = £262.06
                </div>
              </div>
              <p className="paragraph-in-card calc-small">
                Rate: £5.99 per 1,000 lbs • Minimum purchase: 1,000 lbs
              </p>
            </div>
            <div className="calculator-footer">
              <p className="calculator-footer-text">
                For a deep dive detailed analysis of your individual Carbon footprint use the WWF Carbon Footprint
                Calculator:{" "}
                <a href="https://footprint.wwf.org.uk/#/" className="calc-link">
                  https://footprint.wwf.org.uk/#/
                </a>
              </p>
            </div>
          </div>
          {/* ADD PURCHASE CALCULATOR, SEE JOHNS EMAIL FOR DETAILS */}
          
        </div>

        <div className="card">
          <h2 className="title-in-second-card">Tourism, Event and Adventure Fast Track</h2>
          <hr className="card-seperator-line" />
          <p className="paragraph-in-card">
            This is the Tourism, Events and Adventures Fast Track option for Greatfortheplanet carbon offsets.
          </p>

          <div className="mini-card-container">
            <div className="mini-card">
              <p className="mini-card-title">Solo Tourism Fast Track Cerificate:</p>
              <p className="mini-card-information">
                Equivalent to: 2 average flights of 5 hours and 1,000 miles traveled by car
              </p>
              <p className="mini-card-paragraph">Included: Offsets + digital certificate</p>
              <a className="mini-card-price buy-now" href="#" data-item="solo-tourism" data-price="25.99">
                £25.99
              </a>
            </div>

            <div className="mini-card">
              <p className="mini-card-title">Couple Tourism Fast Track Cerificate:</p>
              <p className="mini-card-information">
                Equivalent to: 4 average flights of 5 hours and 1,000 miles traveled by car
              </p>
              <p className="mini-card-paragraph">Included: Offsets + digital certificate</p>
              <a className="mini-card-price buy-now" href="#" data-item="couple-tourism" data-price="49.99">
                £49.99
              </a>
            </div>

            <div className="mini-card">
              <p className="mini-card-title">Family Tourism Fast Track Cerificate:</p>
              <p className="mini-card-information">
                Equivalent to: 10 average flights of up to 5 hours and 3,000 miles traveled by car
              </p>
              <p className="mini-card-paragraph">Included: Offsets + digital certificate</p>
              <p className="mini-card-paragraph">Covers Up to 10 people</p>
              <a className="mini-card-price buy-now" href="#" data-item="family-tourism" data-price="135.99">
                £135.99
              </a>
            </div>

            <div className="mini-card">
              <p className="mini-card-title">Group/Family Tourism Fast Track Cerificate:</p>
              <p className="mini-card-information">
                Equivalent to: 20 average flights of 5 hours and 4,000 miles traveled by car
              </p>
              <p className="mini-card-paragraph">Included: Offsets + digital certificate</p>
              <p className="mini-card-paragraph">Covers Up to 10 people</p>
              <a className="mini-card-price buy-now" href="#" data-item="group-tourism" data-price="279.99">
                £279.99
              </a>
            </div>

            <div className="mini-card">
              <p className="mini-card-title">Wedding Fast Track Cerificate:</p>
              <p className="mini-card-information">
                Equivalent to: 100 person wedding and reception and long haul overseas flight honeymoon including all
                car and additional travel.
              </p>
              <p className="mini-card-paragraph">Included: Offsets + digital certificate</p>
              <a className="mini-card-price buy-now" href="#" data-item="wedding-fast-track" data-price="479.99">
                £479.99
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}