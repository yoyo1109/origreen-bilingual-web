import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    {
      titleKey: 'hero.slide1.title',
      ctaKey: 'hero.slide1.cta',
      href: '#products',
      image: '/slide1.jpg'
    },
    {
      titleKey: 'hero.slide2.title',
      ctaKey: 'hero.slide2.cta',
      href: '/about',
      image: '/slide2.jpg'
    },
    {
      titleKey: 'hero.slide3.title',
      ctaKey: 'hero.slide3.cta',
      href: '#contact',
      image: '/slide3.jpg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative h-[85vh] md:h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-white space-y-6 animate-fade-in">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-noto-sc">
                    {t(slide.titleKey)}
                  </h1>
                  {slide.href.startsWith('/') ? (
                    <Link
                      to={slide.href}
                      className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-hover"
                    >
                      {t(slide.ctaKey)}
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  ) : (
                    <a
                      href={slide.href}
                      onClick={(e) => handleAnchorClick(e, slide.href)}
                      className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-hover"
                    >
                      {t(slide.ctaKey)}
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroCarousel;
