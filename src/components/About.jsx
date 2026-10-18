import React from 'react';
import { LuRadio, LuCpu, LuWorkflow, LuShieldCheck, LuLayers } from 'react-icons/lu';

const problems = [
  ['Infrastructure & physical systems', 'Bridges, tunnels, energy assets and industrial equipment that age in ways you can’t see from the surface.'],
  ['High-dimensional optimisation', 'Routing, scheduling, allocation and planning problems with many constraints and moving parts.'],
  ['Sensor-heavy environments', 'Multiple data sources, sometimes quantum-enhanced, fused and interpreted in real time.'],
  ['Data sharing under constraints', 'Insights shared across teams or organisations without exposing the underlying data.'],
];

const principles = [
  ['Deep-tech mindset, practical output', 'We work backwards from deployment: what can actually run, integrate and be trusted in the field.'],
  ['Hybrid by default', 'Classical algorithms, quantum-inspired ideas, simulation and domain models, not a single “magic” technique.'],
  ['Security and governance built in', 'Data sensitivity, access control and auditability from the first diagram.'],
  ['Incremental, collaborative delivery', 'Focused pilots on a narrow slice of the problem, expanded once value is demonstrated.'],
];

const tech = [
  [LuCpu, 'Quantum & quantum-inspired methods', 'Approaches for optimisation, simulation and signal processing that complement, rather than replace, classical computation.'],
  [LuRadio, 'Advanced sensing & signal processing', 'From NV-diamond magnetometry to classical sensor arrays, extracting stable features from noisy environments.'],
  [LuWorkflow, 'AI & modelling', 'Machine-learning models that interpret patterns, forecast risk and support decisions, combined with domain knowledge.'],
  [LuShieldCheck, 'Secure, privacy-aware architecture', 'Cloud-ready data flows where sensitive information and models are shared only where needed.'],
  [LuLayers, 'Designed for multiple domains', 'The same patterns extend from transport assets to energy, logistics and industrial processes.'],
];

const About = () => (
  <>
    <section id="about" className="section">
      <div className="wrap about-grid">
        <header className="section-head" data-reveal>
          <p className="kicker">About us</p>
          <h2>Technology for complex, real-world systems</h2>
          <p>
            Taka Digital is a Cambridge-based technology company working where data, physics and decision-making
            collide, at the intersection of quantum computing, advanced sensing and AI.
          </p>
          <p>
            Our mission is to turn emerging computing and sensing capabilities into practical tools that fit
            real-world constraints, respect security and privacy, and deliver value without requiring everyone to
            understand every detail of the underlying technology.
          </p>
        </header>

        <div className="about-lists" data-reveal>
          <div>
            <h3>Where we focus</h3>
            <ul className="def-list">
              {problems.map(([t, d]) => (
                <li key={t}>
                  <b>{t}</b>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>How we work</h3>
            <ul className="def-list">
              {principles.map(([t, d]) => (
                <li key={t}>
                  <b>{t}</b>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="technology" className="section section-dark">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <p className="kicker">Capabilities</p>
          <h2>Our technology</h2>
          <p>
            Quantum computing, advanced sensing and AI, combined to extract meaningful signals from complex,
            real-world data.
          </p>
        </header>
        <ul className="tech-grid" data-reveal>
          {tech.map(([Icon, t, d]) => (
            <li key={t}>
              <Icon className="tech-ic" aria-hidden="true" />
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default About;
