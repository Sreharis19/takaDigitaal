import React from 'react';
import whyUs from '../assets/img/tech.jpg';
import tech from '../assets/img/tech.jpg';

const Features = () => {
  return (
    <section id="technology" className="features section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Our Technology</h2>
          <p>
            At <b>takaDigital</b>, we combine quantum computing, advanced sensing and AI to
            build systems that extract meaningful signals from complex, real-world data.
          </p>
        </div>

        <div className="row gy-4">
          {/* IMAGE SIDE */}
          <div
            className="features-image col-lg-6 order-lg-2 d-flex justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="tech-card-stack">
              {/* Background diagonal card */}
              <div className="tech-card tech-card-secondary">
                <img
                  src={tech}
                  alt="takaDigital technology illustration background"
                  className="tech-card-img"
                />
              </div>

              {/* Main card */}
              <div className="tech-card tech-card-main">
                <div className="tech-card-glow" />
                <img
                  src={whyUs}
                  alt="takaDigital technology illustration"
                  className="tech-card-img"
                />
              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div className="col-lg-6 order-lg-1">
            <div
              className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-cpu flex-shrink-0"></i>
              <div>
                <h4>Quantum & Quantum-Inspired Methods</h4>
                <p>
                  We explore quantum and quantum-inspired approaches for optimisation,
                  simulation and signal processing. The exact techniques depend on the
                  use case and remain intentionally abstracted here, but they are
                  designed to complement—not replace—classical computation.
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-broadcast flex-shrink-0"></i>
              <div>
                <h4>Advanced Sensing & Signal Processing</h4>
                <p>
                  From quantum-enhanced sensing (e.g. NV-diamond magnetometry) to
                  classical sensor arrays, we focus on extracting stable, useful
                  features from noisy environments—whether that&apos;s infrastructure,
                  industrial systems or other domains.
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-diagram-3 flex-shrink-0"></i>
              <div>
                <h4>AI & Modelling Layer</h4>
                <p>
                  Machine learning models help interpret patterns, forecast risk and
                  support decision-making. The way we combine models, features and
                  domain knowledge is part of our internal know-how and is not fully
                  exposed here, but it underpins how we turn raw data into signals
                  people can act on.
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-shield-lock flex-shrink-0"></i>
              <div>
                <h4>Secure, Privacy-Aware Architecture</h4>
                <p>
                  We design cloud-ready, security-focused data flows so that sensitive
                  information, models and outputs are shared only where needed. Details
                  of our security patterns and controls are discussed privately with
                  partners, not published openly.
                </p>
              </div>
            </div>

            <div
              className="features-item d-flex mt-5 ps-0 ps-lg-3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <i className="bi bi-layers flex-shrink-0"></i>
              <div>
                <h4>Designed for Multiple Domains</h4>
                <p>
                  While some of our work touches infrastructure monitoring (such as
                  reinforced concrete, transport assets and similar systems), the same
                  technology concepts can extend to other areas—energy, logistics,
                  industrial processes and more—depending on the problem and data
                  available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
