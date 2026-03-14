import React, { useRef, useEffect } from "react";
import "./ServicesModal.css";

const services = [
  {
    title: "Static Website Development",
    features: [
      "Blazing fast performance",
      "SEO optimized",
      "Secure architecture",
      "Modern responsive design"
    ]
  },
  {
    title: "Shopify Store Development",
    features: [
      "Custom storefront design",
      "Conversion optimization",
      "Payment integration",
      "Analytics integration"
    ]
  },
  {
    title: "Digital Marketing",
    features: [
      "Instagram & Facebook ads",
      "Audience growth",
      "Content strategy",
      "Campaign optimization"
    ]
  },
  {
    title: "Domain & Email Setup",
    features: [
      "Domain registration",
      "Professional email setup",
      "Email forwarding",
      "Security configuration"
    ]
  }
];

const ServicesModal = ({ close }) => {
  const trackRef = useRef(null);

  const cards = [...services, ...services, ...services];

  useEffect(() => {

    const track = trackRef.current;
    const total = services.length;

    const cardWidth = track.children[0].offsetWidth + 40;

    track.scrollLeft = cardWidth * total;

    const handleScroll = () => {

      const max = cardWidth * total * 2;

      if (track.scrollLeft >= max) {
        track.scrollLeft -= cardWidth * total;
      }

      if (track.scrollLeft <= cardWidth * (total - 1)) {
        track.scrollLeft += cardWidth * total;
      }

    };

    track.addEventListener("scroll", handleScroll);

    return () => track.removeEventListener("scroll", handleScroll);

  }, []);

  const handleCardClick = (index) => {

    const track = trackRef.current;

    const card = track.children[index];

    const trackWidth = track.offsetWidth;

    const cardCenter =
      card.offsetLeft +
      card.offsetWidth / 2 -
      trackWidth / 2;

    track.scrollTo({
      left: cardCenter,
      behavior: "smooth"
    });

  };

  return (
    <div className="services-modal-overlay">

      <button className="modal-close" onClick={close}>✕</button>

      <div className="carousel-track" ref={trackRef}>
        {cards.map((service, i) => (
          <div
            className="carousel-card"
            key={i}
            onClick={() => handleCardClick(i)}
          >
            <h3>{service.title}</h3>

            <ul>
              {service.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServicesModal;