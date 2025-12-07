import React from 'react';
import heroBg from '../assets/img/hero-bg.jpg';

const styles = {
  pill: {
    display: 'inline-block',
    padding: '0.25rem 0.9rem',
    borderRadius: 9999,
    border: '1px solid #7dd3fc',
    background: 'rgba(15, 23, 42, 0.9)',
    fontSize: '0.75rem',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#f9fafb',
    marginBottom: '0.75rem',
  }
};

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="Abstract infrastructure background" />

      <div className="container d-flex flex-column align-items-center text-center hero-content">
        <span style={styles.pill}>
          takaDigital · Quantum sensing · AI · Infrastructure intelligence
        </span>

        <h2 className="hero-title">
          Quantum-Enabled Corrosion Monitoring for Critical Infrastructure
        </h2>

        <p className="hero-lead">
          At <strong>TakaDigital</strong>, we build advanced technology that combines{" "}
          <strong>quantum sensing</strong>, <strong>AI</strong> and{" "}
          <strong>data engineering</strong> to detect early-stage corrosion in
          reinforced-concrete bridges, tunnels and other transport assets.
        </p>

        <p className="hero-subtitle">
          Using NV-diamond quantum magnetometry and intelligent signal processing,
          we turn ultra-weak magnetic signatures from corrosion into clear,
          actionable insights for asset owners and infrastructure operators.
        </p>

        <div className="hero-actions d-flex flex-wrap justify-content-center">
          <a href="#contact" className="btn btn-primary me-2 mb-2">
            Talk to our team
          </a>
          <a href="#services" className="btn btn-outline-light mb-2">
            Explore our technology
          </a>
        </div>

        <ul className="hero-highlights list-unstyled mt-3">
          <li>• Non-invasive, quantum-enabled monitoring of reinforced concrete</li>
          <li>• AI-powered corrosion-risk mapping for roads, rail and tunnels</li>
          <li>• Designed for vehicle and drone-based deployments at scale</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
