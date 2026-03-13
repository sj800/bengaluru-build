import React from 'react';
import './Value.css';

const Value = () => (
  <section className="value-section">
    <div className="value__container">
      <div className="value__left">
        <h2 className="value__heading">The Bengaluru Edge.</h2>
      </div>
      <div className="value__right">
        <ul className="value__list">
          <li><span>Slick & Modern:</span> We don't do boring templates. Every build is customized for maximum aesthetic impact.</li>
          <li><span>All-in-One:</span> From securing your domain to running your Facebook ads, we are your single technical partner.</li>
          <li><span>Performance First:</span> We prioritize load speeds and clean code to ensure your customers never have to wait.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Value;
