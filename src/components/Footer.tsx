
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN');
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7027a632-6240-4c57-b815-674f53f9f33e.png" 
                alt="Origreen Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              {language === 'zh-CN' 
                ? '专注营养健康领域，为全球客户提供高品质的营养原料和一站式OEM解决方案。'
                : 'Focused on nutritional health, providing high-quality nutritional ingredients and one-stop OEM solutions for global clients.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('nav.products')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#products'); }}
                  className="hover:text-white transition-colors"
                >
                  {t('nav.minerals')}
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#products'); }}
                  className="hover:text-white transition-colors"
                >
                  {t('nav.plant-extracts')}
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => { e.preventDefault(); handleLinkClick('#products'); }}
                  className="hover:text-white transition-colors"
                >
                  {t('nav.vitamins')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@origreen.com</li>
              <li>+86 400-123-4567</li>
              <li>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'zh-CN' ? 'English' : '中文'}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            {t('footer.icp')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
