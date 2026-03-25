import React, { useState } from 'react';
import './HotelBrick.css';

const HotelBrick = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); 
  };

  return (
    <div className="hotel_brick_container">
      <header className="hotel_brick_header">
        <nav className="hotel_brick_nav">
          <div className="hotel_brick_logo">HOTEL BRICK</div>
          
          {/* Hamburger Toggle */}
          <button 
            className={`hotel_brick_hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span className="hotel_brick_bar"></span>
            <span className="hotel_brick_bar"></span>
            <span className="hotel_brick_bar"></span>
          </button>

          {/* Navigation Menu */}
          <ul className={`hotel_brick_menu ${isMenuOpen ? 'hotel_brick_menu_open' : ''}`}>
            <li><button onClick={() => scrollToSection('history')} className="hotel_brick_nav_btn">History</button></li>
            <li><button onClick={() => scrollToSection('rooms')} className="hotel_brick_nav_btn">Rooms</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hotel_brick_nav_btn">Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hotel_brick_hero">
          <div className="hotel_brick_hero_overlay">
            <h1 className="hotel_brick_hero_title">Built to Last. <br/>Designed to Remember.</h1>
            <p className="hotel_brick_hero_tagline">A 19th-Century London Icon</p>
          </div>
        </section>

        {/* History Section - Image on Right for Desktop */}
        <section id="history" className="hotel_brick_section">
          <div className="hotel_brick_history_flex">
            <div className="hotel_brick_text_block">
              <h2 className="hotel_brick_subtitle">Our Heritage</h2>
              <p className="hotel_brick_description">
                Established in 1884, Hotel Brick was crafted using reclaimed London Stock bricks. 
                What began as a Victorian warehouse is now a sanctuary for the sophisticated traveler, 
                preserving the "soot and soul" of the city.
              </p>
            </div>
            <div className="hotel_brick_image_frame">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" 
                alt="Antique London Brick Wall" 
                className="hotel_brick_img" 
              />
            </div>
          </div>
        </section>

        <section id="rooms" className="hotel_brick_section hotel_brick_bg_alt">
          <h2 className="hotel_brick_center_title">The Quarters</h2>
          <div className="hotel_brick_grid">
            <div className="hotel_brick_card">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=500" alt="Executive Suite" className="hotel_brick_card_img" />
              <div className="hotel_brick_card_info">
                <h3>The Chancellor Suite</h3>
                <p>Original oak beams and exposed masonry.</p>
              </div>
            </div>
            <div className="hotel_brick_card">
              <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=500" alt="Deluxe Room" className="hotel_brick_card_img" />
              <div className="hotel_brick_card_info">
                <h3>The Library Loft</h3>
                <p>Floor-to-ceiling history and velvet comforts.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="hotel_brick_section">
          <div className="hotel_brick_contact_grid">
            <div className="hotel_brick_contact_details">
              <h2 className="hotel_brick_subtitle">The Concierge</h2>
              <div className="hotel_brick_info_item">
                <strong>Address</strong>
                <p>12-14 Brick Lane, Bloomsbury<br />London, WC1B 3DG</p>
              </div>
              <div className="hotel_brick_info_item">
                <strong>Telephone</strong>
                <p>+44 (0) 20 7946 0123</p>
              </div>
              <div className="hotel_brick_info_item">
                <strong>Electronic Mail</strong>
                <p>stay@hotelbrick.london</p>
              </div>
            </div>

            <div className="hotel_brick_inquiries_box">
              <h3 className="hotel_brick_form_heading">Direct Correspondence</h3>
              <form className="hotel_brick_form" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="hotel_brick_input" required />
                <input type="email" placeholder="Email Address" className="hotel_brick_input" required />
                <textarea placeholder="Tell us about your visit..." className="hotel_brick_textarea"></textarea>
                <button type="submit" className="hotel_brick_submit">Reserve a Moment</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="hotel_brick_footer">
        <p>© 2026 Hotel Brick — A Renowned London Antiquity</p>
      </footer>
    </div>
  );
};

export default HotelBrick;