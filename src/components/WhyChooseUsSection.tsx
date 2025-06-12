
import React from 'react';
import { Package, Beaker, Truck, TrendingUp } from 'lucide-react';

const WhyChooseUsSection = () => {
  const differentiators = [
    {
      icon: Package,
      title: 'Low Minimum Order Quantity',
      description: 'Start with as few as 1000 units, perfect for new brands testing the market or established brands launching new products without excessive inventory risk.',
      highlight: 'Reliable Quality'
    },
    {
      icon: Beaker,
      title: 'Versatile Product Formats',
      description: 'Choose from capsules, powders, and liquids to match your product vision and consumer preferences, all manufactured to strict quality standards.',
      highlight: 'Responsive Service'
    },
    {
      icon: Beaker,
      title: 'Custom Natural Formulations',
      description: 'Develop proprietary blends with active natural ingredients tailored to your target market, backed by our decade of expertise in plant extraction.',
      highlight: 'Unmatched Flexibility'
    },
    {
      icon: Truck,
      title: 'Seamless Logistics',
      description: 'Navigate complex international regulations with our EU labeling support, VAT-compliant delivery (DDP), and specialized Amazon brand guidance.',
      highlight: 'Market Intelligence'
    }
  ];

  const qualityPoints = [
    {
      title: 'Reliable Quality',
      description: 'We partner exclusively with GMP & ISO certified manufacturers who meet stringent international standards. Every batch undergoes rigorous testing to ensure purity, potency, and consistency. Our transparent ingredient sourcing means you can trace every component back to its origin.'
    },
    {
      title: 'Responsive Service',
      description: 'Our English-speaking project team understands global business needs and provides prompt, clear communication throughout your project. We pride ourselves on quick turnaround times, with most inquiries addressed within 24 hours. Our dedicated account managers ensure your project stays on track.'
    },
    {
      title: 'Unmatched Flexibility',
      description: 'Unlike large manufacturers requiring massive minimum orders, we accommodate growing brands with lower MOQs starting at just 1000 units. We offer customized packaging solutions to match your brand identity, and can adapt formulations to meet specific market requirements.'
    },
    {
      title: 'Market Intelligence',
      description: 'Beyond manufacturing, we provide valuable insights on branding, positioning, and market trends. Our team helps navigate the complexities of the Chinese supplement market, advising on regulatory compliance and consumer preferences to maximize your success.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Why Choose Origreen
          </h2>
        </div>

        {/* Four Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-soft hover:shadow-hover transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What Makes Origreen Different */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-inter">
            What Makes Origreen Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPoints.map((point, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-semibold text-primary mb-4 font-inter">
                  {point.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
