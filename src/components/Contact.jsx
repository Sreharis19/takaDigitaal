import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { LuMapPin, LuMail } from 'react-icons/lu';

const Contact = () => {
  const [state, handleSubmit] = useForm('xovglgqg');

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <div data-reveal>
          <p className="kicker">Contact</p>
          <h2 className="contact-title">Work with us</h2>
          <p className="contact-lead">
            Interested in what we’re building at <b>Taka Digital</b> — quantum computing, advanced sensing or AI
            for real-world systems? Let’s talk.
          </p>
          <ul className="contact-info">
            <li>
              <LuMapPin /> 16 Peverel Close, Cambridge, England, CB5 8RW
            </li>
            <li>
              <LuMail /> <a href="mailto:hello@takadigital.co.uk">hello@takadigital.co.uk</a>
            </li>
          </ul>
          <p className="topics">
            Typical topics: quantum &amp; AI for infrastructure, applied R&amp;D and pilots, collaborations and
            partnerships.
          </p>
        </div>

        <div className="form-card" data-reveal>
          {state.succeeded ? (
            <div className="thanks" role="status">
              <h3>Thank you for reaching out.</h3>
              <p>We’ve received your message and will get back to you as soon as we can.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3>Start a conversation</h3>
              <div className="fields">
                <label>
                  Name
                  <input id="name" type="text" name="name" placeholder="Your name" />
                </label>
                <label>
                  Email <span className="req">*</span>
                  <input id="email" type="email" name="email" placeholder="you@example.com" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="err" />
                </label>
                <label>
                  Organisation
                  <input id="organisation" type="text" name="organisation" placeholder="Company, research group, etc." />
                </label>
                <label>
                  Area of interest
                  <select id="topic" name="topic" defaultValue="">
                    <option value="" disabled>
                      Select one
                    </option>
                    <option value="infrastructure">Infrastructure / asset monitoring</option>
                    <option value="quantum-ai">Quantum + AI applications</option>
                    <option value="rd">Applied R&amp;D / pilots</option>
                    <option value="other">Something else</option>
                  </select>
                </label>
                <label className="full">
                  Message <span className="req">*</span>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us briefly what you’re working on or exploring."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="err" />
                </label>
              </div>
              <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
