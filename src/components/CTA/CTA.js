import React from "react";
import "./CTA.css";
import Button from "../Button/Button";

const CTA = () => (
  <section className="cta-section">
    <div className="cta__banner">
      <h2 className="cta__headline">Ready to upgrade your digital footprint?</h2>
      <p className="cta__subhead">
        Let’s discuss your next project, profile, or platform.
      </p>
      <form className="cta__form">
        <input
          type="email"
          placeholder="Enter your email"
          className="cta__input"
        />
        <Button className="cta__button">Get in Touch</Button>
      </form>
    </div>
  </section>
);

export default CTA;
