
import React from 'react';
import { Check } from 'lucide-react';

const QualitySection: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-lg text-gray-600 mb-6">
              At PrimeCuts, we're committed to bringing you the finest quality meats sourced from trusted farms that prioritize animal welfare and sustainable practices.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="text-primary mt-1 mr-3" size={20} />
                <span className="text-gray-700">Ethically raised animals with no added hormones</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mt-1 mr-3" size={20} />
                <span className="text-gray-700">Hand-selected and expertly butchered for premium quality</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mt-1 mr-3" size={20} />
                <span className="text-gray-700">Flash-frozen to preserve peak freshness and flavor</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mt-1 mr-3" size={20} />
                <span className="text-gray-700">Delivered in eco-friendly packaging to maintain quality</span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Quality Meat Processing"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
