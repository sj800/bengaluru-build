import React, { useState } from "react";
import "./Authority.css";
import ContactFormModal from "../contact/ContactFormModal";

const Authority = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="authority-section">
        <div className="container">

          <h1>
            Build <span className="highlight">Authority</span>.<br/>
            Drive Growth.
          </h1>

          <p>
            75% of consumers judge your credibility by your website design.
            Own your narrative, control your data, and scale your reach with
            a sovereign digital presence.
          </p>

          <button
            className="cta-button"
            onClick={() => setShowModal(true)}
          >
            Launch Your Presence
          </button>

        </div>

        <div className="stats-grid container">

          <div className="stat-card">
            <span className="stat-number">27%</span>
            <span className="stat-label">Higher Conversion with Speed</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">50%</span>
            <span className="stat-label">Lead Growth via 1st Party Data</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">7X</span>
            <span className="stat-label">More Leads with Multi-Landing Pages</span>
          </div>

        </div>
      </section>

      {showModal && (
        <ContactFormModal close={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Authority;