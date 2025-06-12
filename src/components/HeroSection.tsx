
import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const handleCTAClick = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/lovable-uploads/9bcbe4c1-6dce-4952-9e4e-81b41e59f119.png')` }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-inter">
              Origreen: Your Trusted Partner for Natural Supplements
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Your bridge to the Chinese supplement supply chain with low MOQs from 1000 units, fast delivery, EU-compliance, DDP clearance, and GMP network support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleCTAClick('#contact')}
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-hover"
              >
                Request a Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => handleCTAClick('#services')}
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Logo/Brand Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <img 
                src="/lovable-uploads/7027a632-6240-4c57-b815-674f53f9f33e.png" 
                alt="Origreen supplement manufacturing with natural ingredients"
                className="w-64 h-auto filter brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
