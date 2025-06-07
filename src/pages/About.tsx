import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { LanguageProvider } from '../components/LanguageContext';

const AboutPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-inter">
        <Navigation />
        <main className="pt-16">
          <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
              <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">About Origreen</h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Your Partner for Efficiency, Quality, and Market Leadership.
                </p>
              </div>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">Our Philosophy</p>
                      <p className="mt-3 text-base text-gray-500">
                        Since our establishment in 2010, Origreen is a technology-driven enterprise with a customer-centric philosophy. We are mainly engaged in the supply of health product ingredients, including amino acids, vitamins, minerals, and plant extracts, along with providing product solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-xl font-semibold text-gray-900">Our Mission</p>
                      <p className="mt-3 text-base text-gray-500">
                        We aspire to be more than just a raw material supplier; we aim to be your "Product Innovation Partner." Whether you're creating a new product or enhancing an existing one, partnering with us will streamline your supply chain, accelerate product launches, and guarantee top-notch quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Our Services</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  A Better Way to Source Ingredients
                </p>
                <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                  We streamline your supply chain and empower your business through "integrated solutions" that eliminate complexities and maximize competitiveness.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">SIMPLIFY YOUR SUPPLY CHAIN</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Access 1000+ ingredients from a single source. Custom blends, global logistics, and reduced complexity.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">ACCELERATE TIME-TO-MARKET</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Pre-qualified ingredients meeting global standards. Rapid sample delivery and agile response.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">ENSURE UNCOMPROMISING QUALITY CONTROL</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      From farm to formula with traceability and stringent testing for identity, purity, and stability.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <p className="text-lg leading-6 font-medium text-gray-900">DRIVE INNOVATION & SUSTAINABILITY</p>
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Co-development with our scientists to create cutting-edge formulations and sustainable sourcing.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default AboutPage; 