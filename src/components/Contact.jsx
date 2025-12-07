import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xovglgqg");

  return (
    <section id="contact" className="contact section light-background">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>
          Interested in what we&apos;re building at <b>TakaDigital</b> – quantum computing,
          advanced sensing or AI for real-world systems? Let&apos;s talk.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Contact info */}
          <div className="col-lg-4">
            <div className="info-item mb-4">
              <h3>Address</h3>
              <p>31 Keynes Rd, Cambridge, Cambridgeshire, UK, CB5 8PP</p>
            </div>

            <div className="info-item mb-4">
              <h3>Call</h3>
              <p>+44 7867 211695</p>
            </div>

            <div className="info-item mb-4">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@takadigital.co.uk">
                  hello@takadigital.co.uk
                </a>
              </p>
            </div>

            <div className="info-item">
              <h3>Typical topics</h3>
              <p className="mb-1">• Quantum & AI for infrastructure</p>
              <p className="mb-1">• Applied R&amp;D and pilots</p>
              <p className="mb-0">• Collaborations & partnerships</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              {state.succeeded ? (
                <div className="alert alert-success" role="alert">
                  <h4 className="alert-heading mb-2">Thank you for reaching out.</h4>
                  <p className="mb-0">
                    We&apos;ve received your message and will get back to you as soon as we can.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-3">Start a conversation</h3>
                  <p className="mb-4">
                    Share a bit about your context – a project idea, problem space or
                    area of interest – and we&apos;ll follow up with next steps.
                  </p>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="you@example.com"
                          required
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="organisation" className="form-label">
                          Organisation
                        </label>
                        <input
                          id="organisation"
                          type="text"
                          name="organisation"
                          className="form-control"
                          placeholder="Company, research group, etc."
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="topic" className="form-label">
                          Area of interest
                        </label>
                        <select
                          id="topic"
                          name="topic"
                          className="form-select"
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select one
                          </option>
                          <option value="infrastructure">
                            Infrastructure / asset monitoring
                          </option>
                          <option value="quantum-ai">
                            Quantum + AI applications
                          </option>
                          <option value="rd">
                            Applied R&amp;D / pilots
                          </option>
                          <option value="other">
                            Something else
                          </option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="message" className="form-label">
                          Message <span className="text-danger">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          rows="4"
                          placeholder="Tell us briefly what you’re working on or exploring."
                          required
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                      </div>

                      <div className="col-12 d-flex justify-content-end">
                        <button
                          type="submit"
                          className="btn btn-primary px-4"
                          disabled={state.submitting}
                        >
                          {state.submitting ? 'Sending…' : 'Send message'}
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
