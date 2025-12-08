import React from 'react';

const IndustryPill = ({ name, details }) => (
  <div className="industry-pill">
    <div className="industry-name">{name}</div>
    <div className="industry-details">{details}</div>
  </div>
);

const IndustriesSection = () => {
  const industries = [
    { name: 'Bollywood', details: 'Hindi – Mumbai' },
    { name: 'Tollywood', details: 'Telugu – Hyderabad' },
    { name: 'Kollywood', details: 'Tamil – Chennai' },
    { name: 'Mollywood', details: 'Malayalam – Kerala' },
    { name: 'Sandalwood', details: 'Kannada – Karnataka' },
    { name: 'Pollywood', details: 'Punjabi – Punjab' },
    { name: 'Bengali Film Industry', details: 'Bengali – Kolkata' },
    { name: 'Bhojpuri', details: 'Bhojpuri – Bihar/UP' },
    { name: 'Marathi', details: 'Marathi – Maharashtra' }
  ];

  return (
    <section className="industries-section section">
      <h2 className="section-title">Work Across All Major Film Industries</h2>
      <div className="container industries-container">
        <div className="industries-scroll">
          {industries.map((ind, i) => <IndustryPill key={i} name={ind.name} details={ind.details} />)}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
