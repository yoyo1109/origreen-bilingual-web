
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh-CN' | 'en-US';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'zh-CN': {
    // Navigation
    'nav.products': '产品',
    'nav.services': '服务',
    'nav.about': '关于我们',
    'nav.cases': '成功案例',
    'nav.minerals': '矿物质',
    'nav.plant-extracts': '植物提取物',
    'nav.vitamins': '维生素',
    'nav.amino-acid': '氨基酸',
    'nav.oem': 'OEM',
    'nav.rd': '研发',
    'nav.packaging': '包装',
    'nav.logistics': '物流',
    'nav.company': '公司',
    'nav.team': '团队',
    'nav.certificates': '证书',
    'nav.beauty': '美容',
    'nav.probiotics': '益生菌',
    'nav.cardio': '心血管',
    'nav.joint': '关节',

    // Hero Section
    'hero.slide1.title': '专注营养健康 · 一站式原料与配方解决方案',
    'hero.slide1.cta': '探索产品',
    'hero.slide2.title': '严选有机原料，安全可追溯',
    'hero.slide2.cta': '了解我们',
    'hero.slide3.title': '多剂型 · 多功能 · 差异化竞争',
    'hero.slide3.cta': '联系我们',

    // Products Section
    'products.title': '核心产品',
    'products.subtitle': '为您提供高品质的营养原料解决方案',
    'products.minerals.title': '矿物质营养素',
    'products.minerals.desc': '高生物利用度的螯合矿物质，包括钙、镁、锌、铁等多种微量元素，满足不同营养需求。',
    'products.plant.title': '植物提取物',
    'products.plant.desc': '天然植物活性成分提取，从传统草本到现代植物化学，为功能性食品提供核心价值。',
    'products.vitamins.title': '维生素系列',
    'products.vitamins.desc': '全谱维生素原料供应，包括脂溶性和水溶性维生素，支持各类营养补充产品开发。',
    'products.amino.title': '氨基酸',
    'products.amino.desc': '必需氨基酸和支链氨基酸，为运动营养、医疗营养等专业领域提供优质原料支持。',

    // About Section
    'about.title': '关于绿奇',
    'about.subtitle': '专业营养原料供应商，致力于健康产业发展',
    'about.description': 'Origreen 专注于营养健康领域，为全球客户提供高品质的营养原料和一站式OEM解决方案。我们秉承科学严谨的态度，从原料采购到产品交付，每个环节都严格把控，确保产品安全有效。',
    'about.strength1.title': '全球供应链',
    'about.strength1.desc': '覆盖五大洲的原料采购网络，确保稳定供应',
    'about.strength2.title': '质量认证',
    'about.strength2.desc': 'ISO22000、GMP、HACCP等国际认证体系',
    'about.strength3.title': '研发创新',
    'about.strength3.desc': '专业研发团队，持续产品创新和技术升级',

    // Contact Section
    'contact.title': '联系我们',
    'contact.subtitle': '获取专业的营养解决方案咨询',
    'contact.form.name': '姓名',
    'contact.form.email': '邮箱',
    'contact.form.message': '留言',
    'contact.form.submit': '发送消息',
    'contact.info.address': '地址',
    'contact.info.phone': '电话',
    'contact.info.email': '邮箱',

    // Footer
    'footer.copyright': '© 2025 Origreen. 保留所有权利。',
    'footer.icp': 'ICP备案号：粤ICP备2024000000号'
  },
  'en-US': {
    // Navigation
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.cases': 'Cases',
    'nav.minerals': 'Minerals',
    'nav.plant-extracts': 'Plant Extracts',
    'nav.vitamins': 'Vitamins',
    'nav.amino-acid': 'Amino Acid',
    'nav.oem': 'OEM',
    'nav.rd': 'R&D',
    'nav.packaging': 'Packaging',
    'nav.logistics': 'Logistics',
    'nav.company': 'Company',
    'nav.team': 'Team',
    'nav.certificates': 'Certificates',
    'nav.beauty': 'Beauty',
    'nav.probiotics': 'Probiotics',
    'nav.cardio': 'Cardio',
    'nav.joint': 'Joint',

    // Hero Section
    'hero.slide1.title': 'One-stop Nutritional Ingredients Supplier',
    'hero.slide1.cta': 'Explore Products',
    'hero.slide2.title': 'Premium & Traceable Organic Sources',
    'hero.slide2.cta': 'About Us',
    'hero.slide3.title': 'Diverse Dosage Forms & Competitive Formulas',
    'hero.slide3.cta': 'Contact Us',

    // Products Section
    'products.title': 'Core Products',
    'products.subtitle': 'High-quality nutritional ingredient solutions',
    'products.minerals.title': 'Mineral Nutrients',
    'products.minerals.desc': 'High bioavailability chelated minerals including calcium, magnesium, zinc, iron and other trace elements.',
    'products.plant.title': 'Plant Extracts',
    'products.plant.desc': 'Natural plant active ingredients from traditional herbs to modern phytochemicals for functional foods.',
    'products.vitamins.title': 'Vitamin Series',
    'products.vitamins.desc': 'Full spectrum vitamin ingredients including fat-soluble and water-soluble vitamins.',
    'products.amino.title': 'Amino Acids',
    'products.amino.desc': 'Essential and branched-chain amino acids for sports nutrition and medical nutrition applications.',

    // About Section
    'about.title': 'About Origreen',
    'about.subtitle': 'Professional nutritional ingredient supplier dedicated to health industry development',
    'about.description': 'Origreen focuses on nutritional health, providing high-quality nutritional ingredients and one-stop OEM solutions for global clients. We maintain scientific rigor from ingredient sourcing to product delivery.',
    'about.strength1.title': 'Global Supply Chain',
    'about.strength1.desc': 'Five-continent sourcing network ensuring stable supply',
    'about.strength2.title': 'Quality Certification',
    'about.strength2.desc': 'ISO22000, GMP, HACCP international certification systems',
    'about.strength3.title': 'R&D Innovation',
    'about.strength3.desc': 'Professional R&D team for continuous innovation',

    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get professional nutritional solution consultation',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',

    // Footer
    'footer.copyright': '© 2025 Origreen. All rights reserved.',
    'footer.icp': 'ICP License: 粤ICP备2024000000号'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh-CN');

  useEffect(() => {
    const savedLang = localStorage.getItem('origreen-language') as Language;
    if (savedLang && (savedLang === 'zh-CN' || savedLang === 'en-US')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('origreen-language', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
