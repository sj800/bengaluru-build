import React, { useState } from "react";
import "./Hero.css";
import Button from "../Button/Button";
import ServicesModal from "../ServicesModal/ServicesModal";

import ContactFormModal from "../contact/ContactFormModal";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__headline">Building Your Digital Future.</h1>

          <p className="hero__subhead">
            From blazing-fast static websites and high-converting Shopify
            stores to full digital platform management.
          </p>

          <div className="hero__actions">
            <Button className="btn-primary" onClick={() => setOpen(true)}>
              Explore Our Services
            </Button>

            <Button onClick={() => setShowForm(true)} className="btn-outline">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      {open && <ServicesModal close={() => setOpen(false)} />}
        {showForm && <ContactFormModal close={() => setShowForm(false)} />}
    </>
  );
};

export default Hero;