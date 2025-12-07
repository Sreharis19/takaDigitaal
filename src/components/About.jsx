/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p><b>TakaDigital – Building Technology for Complex, Real-World Systems</b></p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Left column – story & mission */}
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              <b>takaDigital</b> is a technology company focused on problems where
              data, physics and decision-making collide. We work at the intersection
              of <b>quantum computing</b>, <b>advanced sensing</b> and <b>AI</b> to
              build systems that help organisations see more clearly and act with
              more confidence.
            </p>

            <p>
              Our background spans software engineering, data science, security and
              applied research. We&apos;re interested in domains where the stakes are
              high, the signals are subtle, and standard tools are starting to reach
              their limits – from infrastructure and industrial systems to other
              complex, networked environments.
            </p>

            <p>
              <b>Mission:</b> turn emerging computing and sensing capabilities into
              practical tools that fit real-world constraints, respect security and
              privacy, and deliver value without requiring everyone to understand
              every detail of the underlying technology.
            </p>

            <p>
              We don&apos;t position ourselves as a generic consulting shop or a
              rigid product vendor. Instead, we develop a set of reusable technology
              patterns, then adapt them with partners to specific problem spaces.
            </p>
          </div>

          {/* Right column – what defines us / how we work */}
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p><b>What defines how we work</b></p>
            <ul>
              <li>
                <i className="bi bi-check2-circle"></i>{' '}
                <span>
                  <b>Deep-tech mindset, practical output.</b> We stay close to the
                  latest in quantum and AI, but always work backwards from practical
                  deployment: what can actually run, integrate and be trusted in the
                  field.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{' '}
                <span>
                  <b>Hybrid approach by default.</b> We mix classical algorithms,
                  quantum/quantum-inspired ideas, simulation and domain models instead
                  of betting on a single “magic” technique.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{' '}
                <span>
                  <b>Security and governance built in.</b> We take data sensitivity,
                  access controls and auditability seriously from the first diagram,
                  not as an afterthought.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{' '}
                <span>
                  <b>Incremental, collaborative delivery.</b> We like to start small –
                  with focused pilots and narrow slices of a problem – then expand
                  once value is demonstrated.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-circle"></i>{' '}
                <span>
                  <b>Selective transparency.</b> We share enough detail so partners
                  know what they&apos;re relying on, while keeping the most sensitive
                  parts of our methods and optimisation strategies out of public view.
                </span>
              </li>
            </ul>

            <p className="mt-3">
              Today, that thinking is being applied to areas like infrastructure
              monitoring, complex optimisation and sensor-rich environments. Tomorrow,
              the same principles can extend to new domains where organisations need
              to understand what is happening, what might happen next, and what they
              should do about it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
