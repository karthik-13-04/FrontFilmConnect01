import React from 'react';

const FeatureCard = ({ iconClass, title, description }) => (
  <div className="feature-card">
    <i className={`fas ${iconClass} fa-2x`} style={{ marginBottom: '15px' }}></i>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    { icon: 'fa-comments', title: 'Instant Messaging', description: 'Chat with industry professionals for pitches, roles and quick coordination.' },
    { icon: 'fa-users', title: 'Join Communities', description: 'Engage in forums, share scripts, and network with peers.' },
    { icon: 'fa-chart-line', title: 'Explore Trends', description: 'Stay current with casting calls, trending talent, and industry news.' }
  ];

  return (
    <section className="features-section section">
      <h2 className="section-title">What You Can Do Inside The App</h2>
      <div className="container feature-cards-grid">
        {features.map((f, i) => <FeatureCard key={i} iconClass={f.icon} title={f.title} description={f.description} />)}
      </div>
    </section>
  );
};

export default FeaturesSection;
