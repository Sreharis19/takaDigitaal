import React from 'react';
import { LuArrowRight, LuCalendar } from 'react-icons/lu';
import { eventTalk } from '../data/work';

const Hero = ({ onOpen }) => (
  <section id="top" className="hero">
    <div className="wrap hero-grid">
      <div className="hero-copy" data-reveal>
        <p className="kicker">Quantum sensing · AI · Data engineering</p>
        <h1>
          Seeing the earliest signs of failure in the systems the UK runs on.
        </h1>
        <p className="lead">
          Taka Digital builds quantum-enabled sensing and AI that detect early-stage corrosion in bridges and
          tunnels, and process drift on the factory floor. Our work is funded by Innovate UK and EPSRC.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Explore our projects <LuArrowRight />
          </a>
          <a href="#contact" className="btn btn-outline">
            Partner with us
          </a>
        </div>
      </div>

      <figure className="hero-media" data-reveal>
        <button type="button" className="media-btn" onClick={() => onOpen(eventTalk)} aria-label="Enlarge event photo">
          <img src={eventTalk} alt="Discussing the C-SURE poster with attendees in London" />
        </button>
        <figcaption className="media-card">
          <span className="media-date">
            <LuCalendar /> 27 Feb 2026 · London
          </span>
          <strong>C-SURE presented at Exploring the Future of Transport with Quantum Sensing Technologies</strong>
        </figcaption>
      </figure>
    </div>

    <div className="wrap">
      <dl className="hero-facts" data-reveal>
        <div>
          <dt>Innovate UK-funded projects</dt>
          <dd>2</dd>
        </div>
        <div>
          <dt>Corrosion detection-confidence target</dt>
          <dd>90%</dd>
        </div>
        <div>
          <dt>Viscosity prediction accuracy (R²)</dt>
          <dd>0.89</dd>
        </div>
        <div>
          <dt>Early drift-warning lead time</dt>
          <dd>~9 cycles</dd>
        </div>
      </dl>
    </div>
  </section>
);

export default Hero;
