import React from 'react';
import { LuCalendar, LuMapPin, LuExpand } from 'react-icons/lu';
import { csurePrinted, eventTalk } from '../data/work';

const News = ({ onOpen }) => (
  <section id="news" className="section section-alt">
    <div className="wrap">
      <header className="section-head" data-reveal>
        <p className="kicker">News &amp; events</p>
        <h2>Latest from Taka Digital</h2>
      </header>

      <article className="news-feature" data-reveal>
        <div className="news-gallery">
          <button type="button" className="news-main" onClick={() => onOpen(eventTalk)}>
            <img src={eventTalk} alt="Discussing the C-SURE poster with attendees" loading="lazy" />
          </button>
          <button type="button" className="news-thumb" onClick={() => onOpen(csurePrinted)}>
            <img src={csurePrinted} alt="The C-SURE poster on display" loading="lazy" />
            <span>
              <LuExpand /> Poster
            </span>
          </button>
        </div>
        <div className="news-body">
          <p className="news-meta">
            <span>
              <LuCalendar /> 27 February 2026
            </span>
            <span>
              <LuMapPin /> Underwood Lofts, London
            </span>
          </p>
          <h3>C-SURE showcased at “Exploring the Future of Transport with Quantum Sensing Technologies”</h3>
          <p>
            We presented C-SURE, our quantum-enabled corrosion monitoring project, at the event in London. The
            poster set out the limits of classical inspection, our NV-diamond sensing
            and AI pipeline, and the Phase 1 feasibility target of 90% detection confidence.
          </p>
          <p>
            Delivered with support from Innovate UK, with Bellacet Ltd as use case provider.
          </p>
        </div>
      </article>
    </div>
  </section>
);

export default News;
