
import React from 'react';
import { Globe, Shield, Lightbulb, Leaf } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Globe,
      title: 'One-Stop Solution',
      description: 'Comprehensive services from formulation development to customs clearance and logistics'
    },
    {
      icon: Shield,
      title: 'Certified Partners',
      description: 'Network of GMP & ISO certified manufacturing facilities meeting international standards'
    },
    {
      icon: Lightbulb,
      title: 'Regulatory Expertise',
      description: 'In-depth knowledge of Asia/EU regulations to ensure compliance'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients Cornerstone',
      description: 'Relying on ten years of upstream experience and twelve years of botanical extraction technology'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-inter">
                About Origreen
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Origreen stands as a comprehensive dietary supplement service provider deeply rooted in natural ingredients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                With 10 years of upstream industry experience and 12 years specialized in plant extraction, we've built a foundation of expertise that few can match. Origreen provides you with a full-framework supply chain service for nature-based dietary supplements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-inter">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-3"></div>
            <img
              src="/lovable-uploads/5defa4d8-b0f3-4f38-b4b1-507b63f3fb57.png"
              alt="Origreen team of supplement manufacturing professionals in laboratory setting"
              className="relative z-10 w-full h-auto object-cover rounded-lg shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
