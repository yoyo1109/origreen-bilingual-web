
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: t('nav.products'),
      children: [
        { name: t('nav.minerals'), href: '#products' },
        { name: t('nav.plant-extracts'), href: '#products' },
        { name: t('nav.vitamins'), href: '#products' },
        { name: t('nav.amino-acid'), href: '#products' }
      ]
    },
    {
      name: t('nav.services'),
      children: [
        { name: t('nav.oem'), href: '#contact' },
        { name: t('nav.rd'), href: '#about' },
        { name: t('nav.packaging'), href: '#contact' },
        { name: t('nav.logistics'), href: '#contact' }
      ]
    },
    {
      name: t('nav.about'),
      children: [
        { name: t('nav.company'), href: '#about' },
        { name: t('nav.team'), href: '#about' },
        { name: t('nav.certificates'), href: '#about' }
      ]
    },
    {
      name: t('nav.cases'),
      children: [
        { name: t('nav.beauty'), href: '#products' },
        { name: t('nav.probiotics'), href: '#products' },
        { name: t('nav.cardio'), href: '#products' },
        { name: t('nav.joint'), href: '#products' }
      ]
    }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN');
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-soft backdrop-blur-sm' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/7027a632-6240-4c57-b815-674f53f9f33e.png" 
                alt="Origreen Logo" 
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-primary transition-colors font-inter">
                  <span>{item.name}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-hover border border-gray-100 py-2 animate-slide-down">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(child.href);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary transition-colors font-inter"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language === 'zh-CN' ? '中文' : 'EN'}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="font-medium text-gray-900 py-2">{item.name}</div>
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <a
                      key={child.name}
                      href={child.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(child.href);
                      }}
                      className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                    >
                      {child.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
