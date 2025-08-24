import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import HeroSection from './HeroSection';
import AboutUsSection from './AboutUsSection';
import ServicesSection from './ServicesSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Services Section */}
        <ServicesSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
