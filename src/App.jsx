import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import IndustriesSection from './sections/IndustriesSection';
import RolesCtaSection from './sections/RolesCtaSection';

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <IndustriesSection />
        <RolesCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
