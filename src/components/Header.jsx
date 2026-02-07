import React, { useEffect, useState } from 'react';

const Header = ({ sitename, logo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
      style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="#hero" className="logo d-flex align-items-center me-auto me-xl-0">
          <img
            src={logo}
            alt={sitename}
            style={{
              height: '60px',
              objectFit: 'contain',
            }}
          />
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#hero" className="active" style={{ color: '#000000' }}>Home</a></li>
            <li><a href="#about" style={{ color: '#000000' }}>About</a></li>
            <li><a href="#services" style={{ color: '#000000' }}>Problem Space</a></li>
            <li><a href="#technology" style={{ color: '#000000' }}>Technology</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
        <a className="cta-btn" href="#contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;