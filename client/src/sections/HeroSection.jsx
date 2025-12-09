import React from 'react';

/* StoreButton: reusable visual button for store links */
export const StoreButton = ({ iconClass, smallText, largeText, isCta = false, href = "#" }) => (
  <a href={href} className={`store-btn ${isCta ? 'cta-btn' : ''}`}>
    <i className={`fab ${iconClass}`}></i>
    <div className="store-text">
      <span className="small-text" style={isCta ? { color: '#7f8c8d' } : {}}>{smallText}</span>
      <span className="large-text" style={isCta ? { color: '#2c3e50' } : {}}>{largeText}</span>
    </div>
  </a>
);

/* DynamicStoreButtons: accepts links to app stores */
export function DynamicStoreButtons({ googlePlay = "#", appStore = "#" }) {
  return (
    <div className="store-buttons">
      <StoreButton iconClass="fa-google-play" smallText="Downloaded on" largeText="Google Play" href={googlePlay} />
      <StoreButton iconClass="fa-apple" smallText="Downloaded on the" largeText="App Store" href={appStore} />
    </div>
  );
}

/* HeroSection: main hero area */
const HeroSection = () => {
  const googlePlayLink = "https://play.google.com/store/filmconnect";
  const appStoreLink = "https://apps.apple.com/app/filmconnect";

  return (
    <div className="hero-wrapper">
      <section className="hero-section container">
        <div className="hero-text-content">
          <h1 className="hero-title">
            Connect With the Entire Film Industry — <span>In One App</span>
          </h1>
          <p className="hero-subtitle">
            Find roles, hire talent, join communities, and grow your career across all major Indian film industries.
          </p>

          <DynamicStoreButtons googlePlay={googlePlayLink} appStore={appStoreLink} />
        </div>

        <div className="hero-image-mockup">
          <div className="phone-mockup">
            <div className="mockup-inner-content">{/* Replace with real mockup or image */}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
