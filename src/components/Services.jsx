/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

const Services = () => {


  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>Services</h2>
        <p>Comprehensive financial consultation and property management solutions tailored to your needs.</p>
      </div>
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-activity"></i></div>
              <h3>Financial Consultation</h3>
              <ul>
                <li>Personal finance planning</li>
                <li>Investment strategy and portfolio design</li>
                <li>Tax efficiency and compliance guidance</li>
                <li>Retirement and inheritance planning</li>
                <li>Digital tools for budgeting and forecasting</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="service-item position-relative">
              <div className="icon"><i className="bi bi-broadcast"></i></div>
              <h3>Property Management</h3>
              <ul>
                <li>Tenant sourcing & screening</li>
                <li>Rent collection & financial reporting</li>
                <li>Maintenance and legal compliance</li>
                <li>Asset performance monitoring</li>
                <li>Short-term and long-term rental strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
