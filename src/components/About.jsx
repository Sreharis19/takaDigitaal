/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const About = () => {
  return (
    <section id="about" class="about section">
    <div class="container section-title" data-aos="fade-up">
      <h2>About</h2>
      <p><b>Your Trusted Partner in Financial Growth & Property Success</b></p>
    </div>
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
          <p>Taka Digital was founded on a simple idea: modern wealth deserves modern solutions. With decades of combined experience in finance, real estate, and digital transformation, we guide our clients toward smarter financial decisions and more profitable property portfolios.</p>
          <p><b>Mission:</b> Empower clients to achieve long-term financial stability through transparent advice, smart property strategies, and digital-first tools.</p>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <p><b>What makes us different?</b></p>
          <ul>
            <li><i class="bi bi-check2-circle"></i> <span>Personalized financial consultation</span></li>
            <li><i class="bi bi-check2-circle"></i> <span>End-to-end property management</span></li>
            <li><i class="bi bi-check2-circle"></i> <span>Data-driven insights and forecasting</span></li>
            <li><i class="bi bi-check2-circle"></i> <span>Transparent fees. No jargon. No surprises.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
