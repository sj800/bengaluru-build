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

  const cardWidth = track.children[0].offsetWidth + 40;
  const totalCards = services.length;

  // Start in middle set, second card centered
  track.scrollLeft = cardWidth * (totalCards + 1);

  const handleScroll = () => {
    const maxScroll = cardWidth * cards.length;

    // if user scrolls too far right
    if (track.scrollLeft > cardWidth * (totalCards * 2)) {
      track.scrollLeft -= cardWidth * totalCards;
    }

    // if user scrolls too far left
    if (track.scrollLeft < cardWidth * totalCards) {
      track.scrollLeft += cardWidth * totalCards;
    }
  };

  track.addEventListener("scroll", handleScroll);

  return () => track.removeEventListener("scroll", handleScroll);
}, []);

  const handleCardClick = (index) => {
    const track = trackRef.current;

    const cardWidth = track.children[0].offsetWidth + 40;

    track.scrollTo({
      left: index * cardWidth,
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