import React from 'react';
import whyUs from '../assets/img/whyus.jpeg';

const Features = () => {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Why Choose Taka Digital?</h2>
          <p>Discover why we are the right partner for your financial and property management needs.</p>
        </div>

        <div className="row gy-4">
          <div className="features-image col-lg-6 order-lg-2" data-aos="fade-up" data-aos-delay="100">
            <img src={whyUs} alt="Why Choose Us" />
          </div>

          <div className="col-lg-6 order-lg-1">
            <div className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-battery-charging flex-shrink-0"></i>
              <div>
                <h4>Transparent, Tailored Advice</h4>
                <p>We provide clear, personalized guidance to help you make informed decisions.</p>
              </div>
            </div>

            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-laptop flex-shrink-0"></i>
              <div>
                <h4>Tech-Driven Tools</h4>
                <p>Our digital-first approach ensures better decisions through data-driven insights.</p>
              </div>
            </div>

            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-house-door flex-shrink-0"></i>
              <div>
                <h4>Full-Service Property Management</h4>
                <p>From tenant sourcing to maintenance, we handle it all for you.</p>
              </div>
            </div>

            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-person-lines-fill flex-shrink-0"></i>
              <div>
                <h4>Experts Who Speak Your Language</h4>
                <p>No jargon, just straightforward advice you can trust.</p>
              </div>
            </div>

            <div className="features-item d-flex mt-5 ps-0 ps-lg-3" data-aos="fade-up" data-aos-delay="600">
              <i className="bi bi-headset flex-shrink-0"></i>
              <div>
                <h4>Support Every Step of the Way</h4>
                <p>Our team is with you from planning to execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
