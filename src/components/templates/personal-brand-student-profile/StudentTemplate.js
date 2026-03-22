import React from 'react';
import './StudentTemplate.css';
import { Link } from 'react-router-dom';

const StudentTemplate = () => {
  return (
    <div className="student-template-wrapper">
      <div className="student-profile">
        {/* Navigation */}
        <nav className="student-nav">
        <Link to="/" className="header__left header__logo-link">Bengaluru Builds</Link>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">Education</a>
            <a href="#projects">Market Research</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="badge">MBA Graduate | Automobile Enthusiast</span>
            <h1 className="student-name">User <span>Name.</span></h1>
            <h2 className="hero-tagline">Accelerating Brand Market Share.</h2>
            <p>
              MBA in Marketing with a background in Commerce. I combine financial literacy 
              with a deep understanding of consumer behavior in the Indian Automobile sector. 
              Specialized in B2B sales strategies, dealership management, and EV market penetration.
            </p>
            <div className="hero-btns">
              <button className="primary-btn">Download Sales Portfolio</button>
              <a href="#contact" className="secondary-btn">Schedule an Interview</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-accent"></div>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&h=600&fit=crop" alt="First User Professional" />
          </div>
        </section>

        {/* Education Timeline */}
        <section id="about" className="education">
          <h2 className="section-title">Academic Foundation</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="time-node">2024 - 2026</div>
              <div className="time-content">
                <h4>MBA in Marketing & Sales Management</h4>
                <p className="inst">Bengaluru Institute of Management</p>
                <p className="grade">CGPA: 8.2/10</p>
                <p className="desc">Specialized in Rural Marketing and Brand Management for High-Involvement products.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time-node">2021 - 2024</div>
              <div className="time-content">
                <h4>Bachelor of Commerce (Honours)</h4>
                <p className="inst">St. Joseph’s College of Commerce</p>
                <p className="grade">Aggregate: 85%</p>
                <p className="desc">Focused on Financial Accounting and Corporate Law. Lead the Entrepreneurship Cell.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="time-node">2021</div>
              <div className="time-content">
                <h4>Senior Secondary (CBSE)</h4>
                <p className="inst">The Heritage School</p>
                <p className="grade">Percentage: 92.4%</p>
                <p className="desc">Commerce Stream with Mathematics and Economics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Competencies */}
        <section className="competencies">
          <h3>Industry Toolkit</h3>
          <div className="comp-grid">
            <div className="comp-item">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732221.png" alt="Excel" />
              <span>Advanced Excel (VLOOKUP/Pivots)</span>
            </div>
            <div className="comp-item">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968914.png" alt="Salesforce" />
              <span>Salesforce CRM</span>
            </div>
            <div className="comp-item">
              <img src="https://cdn-icons-png.flaticon.com/128/281/281769.png" alt="Market Research" />
              <span>SPSS Data Analysis</span>
            </div>
            <div className="comp-item">
              <img src="https://cdn-icons-png.flaticon.com/128/919/919851.png" alt="Negotiation" />
              <span>Strategic Negotiation</span>
            </div>
          </div>
        </section>

        {/* Market Research Projects */}
        <section id="projects" className="projects">
          <h2 className="section-title">Case Studies & Market Research</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-tag">Case Study</div>
              <h4>EV Adoption in Tier-2 Cities</h4>
              <p>Conducted primary research with 200+ respondents to identify barriers to EV adoption for mid-range SUVs.</p>
              <div className="project-links">
                <a href="https://github.com/dummyURL" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="Github" />
                  Data Repo
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-tag">Sales Strategy</div>
              <h4>Luxury Car Dealership ROI</h4>
              <p>Analysis of the 'Direct-to-Customer' sales model vs Traditional Dealerships for high-end automobile brands.</p>
              <div className="project-links">
                <a href="https://github.com/dummyURL" target="_blank" rel="noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="Github" />
                  View Analysis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-box">
            <h2>Ready to drive results?</h2>
            <p>Currently open to opportunities in Territory Sales Management and Product Marketing within the Auto sector.</p>
            <div className="contact-list">
              <div className="c-item">
                <strong>Email:</strong> <span>user@email.com</span>
              </div>
              <div className="c-item">
                <strong>Phone:</strong> <span>+91 98XXX XXXXX</span>
              </div>
              <div className="c-item">
                <strong>Professional:</strong> <a href="https://linkedin.com">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="template-footer">
          <p>© 2026 User Name | Built for the Future of Mobility</p>
        </footer>
      </div>
    </div>
  );
};

export default StudentTemplate;