/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>Problem Space & How We Think About Solutions</h2>
        <p>
          We focus on hard, real-world problems where data, physics and decision-making
          intersect – and where standard tools are starting to hit their limits.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4 align-items-stretch">
          {/* Problem space */}
          <div className="col-lg-6 col-md-6">
            <div className="service-item position-relative h-100">
              <div className="icon">
                <i className="bi bi-exclamation-triangle" />
              </div>
              <h3>Where the Problems Are</h3>
              <p>
                The settings we care about have a few things in common: they are
                complex, interconnected and sensitive. Small changes can have
                outsized impact, and the data is often noisy or incomplete.
              </p>
              <ul>
                <li>
                  <b>Infrastructure & physical systems</b> – bridges, tunnels, energy
                  assets and industrial equipment that age in ways you can&apos;t see
                  from the surface.
                </li>
                <li>
                  <b>High-dimensional optimisation</b> – routing, scheduling,
                  allocation and planning problems with many constraints and moving parts.
                </li>
                <li>
                  <b>Sensor-heavy environments</b> – where multiple data sources
                  (sometimes including quantum-enhanced sensing) need to be fused and
                  interpreted in real time.
                </li>
                <li>
                  <b>Data sharing under constraints</b> – when insights need to be
                  shared across teams or organisations, but the underlying data cannot
                  simply be exposed to everyone.
                </li>
              </ul>

              <p className="mt-3">
                In these domains, a purely classical, one-size-fits-all platform tends
                to fall short. You need approaches that respect the physics, the data
                and the organisations involved.
              </p>
            </div>
          </div>

          {/* High-level solution approach */}
          <div className="col-lg-6 col-md-6">
            <div className="service-item position-relative h-100">
              <div className="icon">
                <i className="bi bi-lightbulb" />
              </div>
              <h3>How We Think About Solutions</h3>
              <p>
                We don&apos;t publish every detail of our stack, but there are a few
                principles that shape how we design solutions across different domains.
              </p>
              <ul>
                <li>
                  <b>Hybrid computing mindset</b> – combining classical methods with
                  quantum or quantum-inspired techniques where they genuinely add value,
                  not just for the sake of novelty.
                </li>
                <li>
                  <b>Model + data together</b> – using simulation, domain models and AI
                  side by side to pull useful signals out of noisy measurements.
                </li>
                <li>
                  <b>Security and privacy by design</b> – building architectures where
                  sensitive data and models are only exposed where they need to be.
                </li>
                <li>
                  <b>Iterative pilots</b> – starting with targeted proofs of concept in
                  a specific context (e.g. a set of assets, a network, a process) and
                  scaling up once the value is clear.
                </li>
                <li>
                  <b>Selective transparency</b> – some parts of the algorithms,
                  optimisation strategies and integration patterns are intentionally kept
                  abstract at this level, but can be discussed in more detail with the
                  right partners.
                </li>
              </ul>

              <p className="mt-3">
                The result is not a generic off-the-shelf product, but a set of
                technology patterns we adapt to the problem in front of us – whether
                that&apos;s infrastructure monitoring, energy, logistics or other
                complex systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
