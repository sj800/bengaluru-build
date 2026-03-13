import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">Bengaluru Builds</div>
      <div className="footer__links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <div className="footer__social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2"/><rect x="7" y="7" width="10" height="10" rx="5" stroke="#fff" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="2"/></svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2"/><path d="M14 8h-2a2 2 0 0 0-2 2v2h-2v2h2v4h2v-4h2l1-2h-3v-2a1 1 0 0 1 1-1h2V8z" stroke="#fff" strokeWidth="2"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="2"/></svg>
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="#fff" strokeWidth="2"/><path d="M8 16l1-3 3-1 3 1-1 3-3 1z" stroke="#fff" strokeWidth="2"/></svg>
        </a>
      </div>
    </div>
    <div className="footer__copyright">
      Copyright © 2026 Bengaluru Builds. All rights reserved.
    </div>
  </footer>
);

export default Footer;
