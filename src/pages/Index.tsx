
import React from 'react';
import Navigation from '../components/Navigation';
import HeroCarousel from '../components/HeroCarousel';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { LanguageProvider } from '../components/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        
        <main>
          <HeroCarousel />
          <ProductsSection />
          <AboutSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
