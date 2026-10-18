import React from 'react';

const Footer = ({ logo, sitename }) => (
  <footer className="site-footer">
    <div className="wrap footer-grid">
      <div className="footer-brand">
        <span className="footer-logo">
          <img src={logo} alt={sitename} />
        </span>
        <p>Quantum sensing, AI and data engineering for critical infrastructure and industry.</p>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#news">News &amp; events</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#technology">Technology</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>31 Keynes Rd, Cambridge, CB5 8PP, UK</li>
          <li><a href="tel:+447867211695">+44 7867 211695</a></li>
          <li><a href="mailto:hello@takadigital.co.uk">hello@takadigital.co.uk</a></li>
        </ul>
      </div>
    </div>
    <div className="wrap footer-base">
      <small>© {new Date().getFullYear()} Taka Digital Ltd. All rights reserved.</small>
      <small>Project work supported by Innovate UK and EPSRC.</small>
    </div>
  </footer>
);

export default Footer;
