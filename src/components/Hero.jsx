import React from 'react';
import heroBg from '../assets/img/hero-bg1.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src={heroBg} alt="" />
      <div className="container d-flex flex-column align-items-center text-center">
        <h2>Welcome to Taka Digital</h2>
        <p>Smart. Secure. Sustainable Wealth Management.</p>
        <p>We specialize in financial consultation and property management for individuals, families, and businesses. At Taka Digital, we blend digital innovation with financial expertise to help you grow and protect your wealth — from tailored investment strategies to hands-off property solutions.</p>
        <p><strong>📈 Clarity in Finance | 🏠 Confidence in Property | 🌐 Digital-First Approach</strong></p>
      </div>
    </section>
  );
};

export default Hero;
