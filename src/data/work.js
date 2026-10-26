import mouldwatch from '../assets/img/work/mouldwatch-poster.jpg';
import csure from '../assets/img/work/csure-poster.jpg';
import csurePrinted from '../assets/img/work/csure-printed.jpg';
import eventTalk from '../assets/img/work/event-talk.jpg';

export const projects = [
  {
    id: 'csure',
    name: 'C-SURE',
    sector: 'Transport infrastructure',
    title: 'Quantum-enabled corrosion monitoring for transport infrastructure',
    summary:
      'Detecting early-stage corrosion in reinforced concrete with NV-diamond quantum magnetometry, before structural damage becomes visible.',
    funding: ['Innovate UK'],
    partner: 'Bellacet Ltd — use case provider',
    poster: csure,
    challenge:
      'Classical inspection methods such as ground-penetrating radar or visual surveys detect damage only after structural deterioration has already occurred.',
    innovation:
      'NV-diamond magnetometry detects the ultra-weak magnetic fields produced by early-stage corrosion, at room temperature. Second-generation quantum sensing with coherent spin control, optical readout and micron-scale resolution.',
    steps: [
      ['Mobile data acquisition', 'NV-diamond magnetometer arrays mounted on drones or vehicles for wide-area scanning.'],
      ['AI-driven signal interpretation', 'AI models interpret the raw magnetometer signals to flag likely corrosion.'],
      ['Actionable asset intelligence', 'Risk mapping and probability scoring integrated into digital-twin and maintenance platforms.'],
    ],
    metrics: [
      ['90%', 'Detection-confidence target from the Phase 1 feasibility study'],
      ['Room temp.', 'Quantum sensing that operates at room temperature'],
      ['Drone & vehicle', 'Mounted sensor arrays for wide-area scanning'],
    ],
    outcomes: [
      'Predictive maintenance-as-a-service',
      'Enhanced infrastructure resilience',
      'Alignment with the UK National Quantum Strategy',
    ],
  },
  {
    id: 'mouldwatch',
    name: 'MouldWatch',
    sector: 'Advanced manufacturing',
    title: 'AI-driven predictive process monitoring for plastic injection moulding',
    summary:
      'An AI virtual viscometer that detects process drift before it becomes scrap, using the signals machines already produce.',
    funding: ['Innovate UK Project 10186264'],
    partner: null,
    poster: mouldwatch,
    challenge:
      'Material batch, moisture and temperature variations shift melt viscosity from cycle to cycle. Defects are found at end-of-line inspection, after material, energy and machine time are lost, and inline viscometers are too costly for most SMEs.',
    innovation:
      'An AI virtual viscometer replaces costly physical instruments. It uses existing machine-controller signals with no new sensors, and is retrofit-ready for SME machine fleets.',
    steps: [
      ['Signal acquisition', 'Injection pressure, melt and barrel temperatures, screw position and cycle time streamed via API.'],
      ['AI virtual viscometer', 'Support Vector Regression predicts melt viscosity every cycle.'],
      ['Drift & anomaly detection', 'EWMA, CUSUM / Page-Hinkley and Isolation Forest flag deviations early.'],
      ['Actionable alerts', 'Real-time warnings with plain-language explanations on a multi-tenant dashboard.'],
    ],
    metrics: [
      ['0.89', 'R² viscosity prediction accuracy'],
      ['6.4 bar', 'Mean absolute error'],
      ['~9 cycles', 'Early drift-warning lead time'],
    ],
    outcomes: [
      'Reduced scrap and material waste',
      'Lower energy per good part',
      'Affordable retrofit for SMEs',
      'Supports UK Net Zero',
    ],
    roadmap: [
      ['Phase 1', 'Model development & validation', true],
      ['Phase 2', 'Validation across 5+ machines', false],
      ['Phase 3', 'SME pilot deployment', false],
    ],
  },
];

export const images = [
  { src: csure, alt: 'C-SURE project poster', caption: 'C-SURE — project poster' },
  { src: mouldwatch, alt: 'MouldWatch project poster', caption: 'MouldWatch — project poster' },
  {
    src: eventTalk,
    alt: 'Discussing the C-SURE poster with attendees at Underwood Lofts, London',
    caption: 'Discussing C-SURE with attendees — Underwood Lofts, London, 27 February 2026',
  },
  {
    src: csurePrinted,
    alt: 'The C-SURE poster on display',
    caption: 'The C-SURE poster on display — 27 February 2026',
  },
];

export { csure, csurePrinted, eventTalk, mouldwatch };
