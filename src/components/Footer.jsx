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
          <li>16 Peverel Close, Cambridge, CB5 8RW, UK</li>
          <li><a href="mailto:hello@takadigital.co.uk">hello@takadigital.co.uk</a></li>
        </ul>
      </div>
    </div>
    <div className="wrap footer-base">
      <small>© {new Date().getFullYear()} Taka Digital Limited. Registered in England, company no. 15046292 (incorporated 3 August 2023). Registered office: 16 Peverel Close, Cambridge, England, CB5 8RW.</small>
      <small>Project work supported by Innovate UK.</small>
    </div>
  </footer>
);

export default Footer;
