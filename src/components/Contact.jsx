import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact section light-background">
    <div className="container section-title">
      <h2>Contact</h2>
      <p>Ready to take control of your finances and property portfolio?</p>
    </div>
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4">
          <div className="info-item"><h3>Address</h3><p>12 Kingsway, London, UK</p></div>
          <div className="info-item"><h3>Call Us</h3><p>0800 123 4567</p></div>
          <div className="info-item"><h3>Email Us</h3><p><a href="mailto:hello@takadigital.co.uk">hello@takadigital.co.uk</a></p></div>
        </div>
        <div className="col-lg-8">
          <h3>We’d Love to Hear From You!</h3>
          <p>If you have any questions, suggestions, or inquiries, feel free to reach out to us.</p>
        </div>
      </div>
    </div>
  </section>
);
};

export default Contact;
