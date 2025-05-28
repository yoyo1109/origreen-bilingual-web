
import React from 'react';
import { Shield, Globe, Lightbulb } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const strengths = [
    {
      icon: Globe,
      titleKey: 'about.strength1.title',
      descKey: 'about.strength1.desc'
    },
    {
      icon: Shield,
      titleKey: 'about.strength2.title',
      descKey: 'about.strength2.desc'
    },
    {
      icon: Lightbulb,
      titleKey: 'about.strength3.title',
      descKey: 'about.strength3.desc'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-noto-sc">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <strength.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-noto-sc">
                      {t(strength.titleKey)}
                    </h3>
                    <p className="text-gray-600">
                      {t(strength.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="About Origreen"
              className="relative z-10 w-full h-96 object-cover rounded-lg shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
