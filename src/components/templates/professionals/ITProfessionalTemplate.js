import React from 'react';
import './ITProfessionalTemplate.css';

const ITProfessionalTemplate = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="it-prof-sirius-template-wrapper">
      {/* HEADER / NAVIGATION */}
      <nav className="it-prof-sirius-nav">
        <div className="it-prof-sirius-nav-container">
          <div className="it-prof-sirius-nav-logo" onClick={() => window.location.href = '/'}>
            Bengaluru Builds
          </div>
          <div className="it-prof-sirius-nav-menu">
            <button onClick={() => scrollToSection('experience')}>Experience</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('education')}>Education</button>
            <button className="it-prof-sirius-nav-cta" onClick={() => scrollToSection('contact')}>Contact Me</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="it-prof-sirius-hero">
        <div className="it-prof-sirius-hero-grid">
          <div className="it-prof-sirius-hero-text">
            <span className="it-prof-sirius-hero-label">Senior Data Scientist @ NVIDIA</span>
            <h1>Turning Complex Data into <span>Predictive Intelligence.</span></h1>
            <p>
              7+ years of experience building scalable ML pipelines and neural architectures. 
              Specializing in NLP and Computer Vision to drive multi-million dollar revenue growth.
            </p>
            <div className="it-prof-sirius-hero-actions">
              <button className="it-prof-sirius-btn-primary" onClick={() => scrollToSection('projects')}>View Portfolio</button>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="it-prof-sirius-btn-secondary">LinkedIn Profile</a>
            </div>
          </div>
          <div className="it-prof-sirius-hero-image-container">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&fit=crop" alt="Professional Portrait" />
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="it-prof-sirius-section">
        <h2 className="it-prof-sirius-section-heading">Professional Journey</h2>
        <div className="it-prof-sirius-experience-list">
          <div className="it-prof-sirius-exp-item">
            <div className="it-prof-sirius-exp-meta">
              <span className="it-prof-sirius-exp-date">2021 - Present</span>
              <img 
                src="https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" 
                alt="NVIDIA" 
                className="it-prof-sirius-company-logo"
                />
            </div>
            <div className="it-prof-sirius-exp-content">
              <h3>Senior Data Scientist</h3>
              <h4>NVIDIA | Bengaluru</h4>
              <p>Leading the development of Generative AI models for autonomous vehicle simulation. Optimized model latency by 40% using TensorRT.</p>
            </div>
          </div>

          <div className="it-prof-sirius-exp-item">
            <div className="it-prof-sirius-exp-meta">
              <span className="it-prof-sirius-exp-date">2018 - 2021</span>
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968866.png" alt="Amazon" className="it-prof-sirius-company-logo"/>
            </div>
            <div className="it-prof-sirius-exp-content">
              <h3>Data Scientist II</h3>
              <h4>Amazon | Hyderabad</h4>
              <p>Designed recommendation engines for AWS Marketplace. Increased cross-sell conversion by 18% through A/B testing and XGBoost refinement.</p>
            </div>
          </div>

          <div className="it-prof-sirius-exp-item">
            <div className="it-prof-sirius-exp-meta">
              <span className="it-prof-sirius-exp-date">2017 (6 Months)</span>
              <img src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google" className="it-prof-sirius-company-logo"/>
            </div>
            <div className="it-prof-sirius-exp-content">
              <h3>Machine Learning Intern</h3>
              <h4>Google | Mountain View</h4>
              <p>Assisted in fine-tuning BERT models for search query intent classification. Automated data cleaning scripts in PySpark.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS & TOOLS */}
      <section id="skills" className="it-prof-sirius-skills">
        <div className="it-prof-sirius-skills-container">
          <div className="it-prof-sirius-skill-box">
            <h3>Core Skillset</h3>
            <div className="it-prof-sirius-skill-tags">
              <span>Deep Learning</span> <span>Reinforcement Learning</span> <span>Time-Series Analysis</span>
              <span>Cloud Computing (AWS/GCP)</span> <span>MLOps</span> <span>Distributed Systems</span>
            </div>
          </div>
          <div className="it-prof-sirius-skill-box">
            <h3>Industry Toolkit</h3>
            <div className="it-prof-sirius-tool-grid">
              <div className="it-prof-sirius-tool-icon"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="Python"/><span>Python</span></div>
              <div className="it-prof-sirius-tool-icon"><img src="https://cdn-icons-png.flaticon.com/128/2103/2103633.png" alt="PyTorch"/><span>PyTorch</span></div>
              <div className="it-prof-sirius-tool-icon"><img src="https://cdn-icons-png.flaticon.com/128/919/919836.png" alt="MySQL"/><span>SQL</span></div>
              <div className="it-prof-sirius-tool-icon"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968532.png" alt="Docker"/><span>Docker</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* GIT PROJECTS */}
      <section id="projects" className="it-prof-sirius-section">
        <h2 className="it-prof-sirius-section-heading">Open Source & Research</h2>
        <div className="it-prof-sirius-project-cards">
          <div className="it-prof-sirius-git-card">
            <div className="it-prof-sirius-git-header">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="GitHub" />
              <a href="https://github.com" target="_blank" rel="noreferrer">View Repo</a>
            </div>
            <h3>Neural-Flow-Optimizer</h3>
            <p>A Python library for optimizing neural network architecture search using genetic algorithms.</p>
            <div className="it-prof-sirius-git-tags"><span>Python</span> <span>Cuda</span></div>
          </div>
          <div className="it-prof-sirius-git-card">
            <div className="it-prof-sirius-git-header">
              <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="GitHub" />
              <a href="https://github.com" target="_blank" rel="noreferrer">View Repo</a>
            </div>
            <h3>RealTime-Sentiment-API</h3>
            <p>Scalable FastAPI wrapper for multi-language sentiment analysis using Transformer models.</p>
            <div className="it-prof-sirius-git-tags"><span>FastAPI</span> <span>NLP</span></div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="it-prof-sirius-section">
        <h2 className="it-prof-sirius-section-heading">Education</h2>
        <div className="it-prof-sirius-edu-grid">
          <div className="it-prof-sirius-edu-card">
            <span className="it-prof-sirius-edu-year">2017 - 2019</span>
            <h3>M.S. in Artificial Intelligence</h3>
            <p>Stanford University | GPA: 3.9/4.0</p>
          </div>
          <div className="it-prof-sirius-edu-card">
            <span className="it-prof-sirius-edu-year">2013 - 2017</span>
            <h3>B.Tech in Computer Engineering</h3>
            <p>IIT Bombay | Honours in Mathematics</p>
          </div>
          <div className="it-prof-sirius-edu-card">
            <span className="it-prof-sirius-edu-year">2013</span>
            <h3>High School (CBSE)</h3>
            <p>Delhi Public School | 98.2%</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="it-prof-sirius-contact">
        <div className="it-prof-sirius-contact-info">
          <h2>Let's build something intelligent.</h2>
          <p>Available for consulting and high-impact data engineering roles.</p>
          <div className="it-prof-sirius-contact-links">
            <a href="mailto:expert@datascience.com">expert@datascience.com</a>
            <span>+91 99999 88888</span>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
        </div>
        <div className="it-prof-sirius-footer-bottom">
          <p>© 2026 Sirius Theme | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ITProfessionalTemplate;