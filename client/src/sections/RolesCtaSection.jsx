import React from 'react';
import { StoreButton } from './HeroSection';

const RoleItem = ({ iconClass, name }) => (
  <div className="role-item">
    <div className="role-icon"><i className={`fas ${iconClass}`}></i></div>
    <div className="role-name">{name}</div>
  </div>
);

const StepItem = ({ iconClass, title, description }) => (
  <div className="step-item">
    <i className={`fas ${iconClass} step-icon`}></i>
    <div>
      <div className="step-title">{title}</div>
      <div className="step-description">{description}</div>
    </div>
  </div>
);

const RolesCtaSection = () => {
  const roles = [
    { icon: 'fa-pen-fancy', name: 'Writer' },
    { icon: 'fa-video', name: 'Director' },
    { icon: 'fa-magic', name: 'VFX Artist' },
    { icon: 'fa-camera-retro', name: 'Cinematographer' },
    { icon: 'fa-cut', name: 'Editor' },
    { icon: 'fa-theater-masks', name: 'Choreographer' }
  ];

  return (
    <section className="roles-cta-section section">
      <div className="container roles-container">
        <h2 className="roles-title">Roles You Can Explore</h2>

        <div className="roles-grid">
          <StepItem
            iconClass="fa-user-circle"
            title="Step 1: Create Your Profile"
            description="Build your professional portfolio, showcase your work, and highlight your skills."
          />

          {roles.slice(0, 3).map((role, idx) => <RoleItem key={idx} iconClass={role.icon} name={role.name} />)}

          <StepItem
            iconClass="fa-globe"
            title="Step 2: Connect & Explore"
            description="Find projects, collaborate with professionals, and grow your network in the film industry."
          />

          {roles.slice(3).map((role, idx) => <RoleItem key={idx + 3} iconClass={role.icon} name={role.name} />)}
        </div>
      </div>

      <div className="container cta-container">
        <h2 className="cta-title">Ready to Grow Your Film Career?</h2>
        <p className="cta-subtitle">Download the app and join thousands of creators.</p>

        <div className="cta-mockup">{/* Add an image or mockup here */}</div>

        <div className="store-buttons" style={{ justifyContent: 'center' }}>
          <StoreButton iconClass="fa-google-play" smallText="GET IT ON" largeText="Google Play" isCta={true} href="#" />
          <StoreButton iconClass="fa-apple" smallText="Download on the" largeText="App Store" isCta={true} href="#" />
        </div>
      </div>
    </section>
  );
};

export default RolesCtaSection;
