import React, { useState } from 'react';
import { LuCheck, LuExpand } from 'react-icons/lu';
import { projects } from '../data/work';

const Projects = ({ onOpen }) => {
  const [active, setActive] = useState(projects[0].id);
  const p = projects.find((x) => x.id === active);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <header className="section-head" data-reveal>
          <p className="kicker">Funded research &amp; development</p>
          <h2>Our projects</h2>
          <p>
            Two applied R&amp;D programmes, each taking an emerging technique from the lab to a real operating
            environment.
          </p>
        </header>

        <div className="project-tabs" role="tablist" aria-label="Projects" data-reveal>
          {projects.map((x) => (
            <button
              key={x.id}
              type="button"
              role="tab"
              id={`tab-${x.id}`}
              aria-selected={active === x.id}
              aria-controls={`panel-${x.id}`}
              className={`project-tab ${active === x.id ? 'on' : ''}`}
              onClick={() => setActive(x.id)}
            >
              <span className="tab-sector">{x.sector}</span>
              <span className="tab-name">{x.name}</span>
              <span className="tab-summary">{x.summary}</span>
              <span className="tab-metric">
                <b>{x.metrics[0][0]}</b> {x.metrics[0][1]}
              </span>
            </button>
          ))}
        </div>

        <article
          key={p.id}
          id={`panel-${p.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${p.id}`}
          className="case"
        >
          <div className="case-main">
            <div className="case-head">
              <ul className="badges">
                {p.funding.map((f) => (
                  <li key={f}>{f}</li>
                ))}
                {p.partner && <li className="badge-muted">{p.partner}</li>}
              </ul>
              <h3>{p.title}</h3>
            </div>

            <div className="case-pair">
              <div className="panel">
                <h4>The challenge</h4>
                <p>{p.challenge}</p>
              </div>
              <div className="panel panel-accent">
                <h4>Our approach</h4>
                <p>{p.innovation}</p>
              </div>
            </div>

            <h4 className="case-sub">How it works</h4>
            <ol className="steps">
              {p.steps.map(([t, d], i) => (
                <li key={t}>
                  <span className="step-no">{String(i + 1).padStart(2, '0')}</span>
                  <b>{t}</b>
                  <p>{d}</p>
                </li>
              ))}
            </ol>

            <h4 className="case-sub">{p.roadmap ? 'Phase 1 results' : 'Key targets'}</h4>
            <dl className="metrics">
              {p.metrics.map(([v, l]) => (
                <div key={l}>
                  <dd>{v}</dd>
                  <dt>{l}</dt>
                </div>
              ))}
            </dl>

            <div className={`case-foot ${p.roadmap ? 'has-roadmap' : ''}`}>
              <div>
                <h4 className="case-sub">Impact</h4>
                <ul className="ticks">
                  {p.outcomes.map((o) => (
                    <li key={o}>
                      <LuCheck /> {o}
                    </li>
                  ))}
                </ul>
              </div>
              {p.roadmap && (
                <div>
                  <h4 className="case-sub">Roadmap</h4>
                  <ol className="roadmap">
                    {p.roadmap.map(([ph, d, done]) => (
                      <li key={ph} className={done ? 'done' : ''}>
                        <b>{ph}</b>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>

          <aside className="case-poster">
            <button type="button" className="poster-btn" onClick={() => onOpen(p.poster)}>
              <img src={p.poster} alt={`${p.name} project poster`} />
              <span className="poster-cta">
                <LuExpand /> View full poster
              </span>
            </button>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default Projects;
