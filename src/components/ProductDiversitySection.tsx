
import React from 'react';
import { Pill, Tablet, Beaker, Droplets, Candy } from 'lucide-react';

const ProductDiversitySection = () => {
  const dosageForms = [
    { name: 'Capsules', icon: Pill },
    { name: 'Tablets', icon: Tablet },
    { name: 'Powder', icon: Beaker },
    { name: 'Liquid', icon: Droplets },
    { name: 'Gummy', icon: Candy }
  ];

  const efficacyCategories = [
    { name: 'Brain Health', color: 'bg-orange-500', icon: '🧠' },
    { name: 'Anti-aging', color: 'bg-teal-400', icon: '⏰' },
    { name: 'Gastrointestinal Health', color: 'bg-amber-600', icon: '🫃' },
    { name: 'Nourish Liver', color: 'bg-lime-500', icon: '🫀' },
    { name: 'Skin & Hair & Nail', color: 'bg-yellow-400', icon: '💇‍♀️' },
    { name: 'Energy Boost', color: 'bg-sky-400', icon: '⚡' },
    { name: 'Weight Management', color: 'bg-red-500', icon: '⚖️' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-inter">
            Rich Product Lines to Meet Diversified Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Classification by Dosage Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 font-inter">
                Classification by Dosage Form
              </h3>
              <div className="space-y-4">
                {dosageForms.map((form, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-soft">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <form.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-gray-900">{form.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 font-inter">
                Categorized by Efficacy
              </h3>
              <div className="space-y-3">
                <div className="text-gray-700">• Gastrointestinal Health</div>
                <div className="text-gray-700">• Weight Loss</div>
                <div className="text-gray-700">• Immune System</div>
                <div className="text-gray-700">• Mental Relaxation</div>
                <div className="text-gray-700">• Women's Health</div>
              </div>
            </div>
          </div>

          {/* Visual Product Categories */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="/lovable-uploads/3b003c34-5934-4bcf-b746-ed816787c2a1.png"
                alt="Various supplement dosage forms including capsules, tablets, and bottles"
                className="w-full h-64 object-contain bg-white rounded-lg shadow-soft p-4"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {efficacyCategories.map((category, index) => (
                <div
                  key={index}
                  className={`${category.color} text-white p-4 rounded-lg text-center transition-transform hover:scale-105`}
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium">{category.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDiversitySection;
