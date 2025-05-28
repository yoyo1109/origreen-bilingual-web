
import React from 'react';
import { useLanguage } from './LanguageContext';

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    {
      titleKey: 'products.minerals.title',
      descKey: 'products.minerals.desc',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      titleKey: 'products.plant.title',
      descKey: 'products.plant.desc',
      image: 'https://images.unsplash.com/photo-1574328670249-8823dedb31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      titleKey: 'products.vitamins.title',
      descKey: 'products.vitamins.desc',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      titleKey: 'products.amino.title',
      descKey: 'products.amino.desc',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-noto-sc">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-103 group"
            >
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={t(product.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-noto-sc">
                  {t(product.titleKey)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(product.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
