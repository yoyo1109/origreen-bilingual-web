
import React from 'react';
import { Beaker, Package, Truck, ShoppingCart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Beaker,
      title: 'Formulation Development',
      features: [
        'Natural + Functional formulation design',
        'EU-compliant health claim development',
        'Comprehensive label review & nutritional declaration'
      ]
    },
    {
      icon: Package,
      title: 'Flexible Production',
      features: [
        'Multiple forms: Capsule, Tablet, Powder, Liquid',
        'Diverse packaging: Bottle, Pouch, Sachet, Stick, Jar',
        'Low MOQ starting at just 1000 bottles or jars',
        'Efficient production: 30-40 days for new orders, 20-30 for reorders'
      ]
    },
    {
      icon: Truck,
      title: 'DDP Customs Clearance Transportation',
      features: [
        'Comprehensive door-to-door customs clearance and delivery',
        'Full EU & UK DDP service available',
        'Specialized support for eCommerce platforms (Amazon, Shopify)'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Amazon Consulting',
      description: 'Provide labeling, compliance, logistics consulting, and Amazon publishing strategy guidance for first-time sellers.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            A True One-Stop Solution
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive coverage, professional and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-inter">
                  {service.title}
                </h3>
              </div>
              
              {service.features ? (
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
