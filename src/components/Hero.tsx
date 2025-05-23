import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[500px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1588168333785-2065b7b25cf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="Premium Meat Selection"
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 z-20">
        <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">Welcome to the home of Feinschmecker Deli Meats</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mt-4 md:mt-6">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-base md:text-lg text-white/90">To be the preferred supplier of ready-to-eat meat products to every supermarket, deli & hospitality venue in Southern Africa.</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-base md:text-lg text-white/90">Endeavour to build brand loyalty through the production & sale of a world class product aided by unrivalled service.</p>
              </div>
            </div>
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-6 rounded-full font-medium text-base md:text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-6 md:mt-8"
            >
              Explore Our Selection
            </Button>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
            <div className="bg-black rounded-xl overflow-hidden w-80 h-80 sm:w-96 sm:h-96">
              <div className="w-full h-full flex flex-col items-center justify-center p-8">
                <div className="w-24 sm:w-32 h-24 sm:h-32 flex items-center justify-center text-primary mb-8">
                  <img 
                    src="/images/image.png" 
                    alt="Feinschmecker Deli Meats" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 right-0 md:right-16 lg:right-24 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-0.5" />
                ))}
              </div>
              <div className="text-xl sm:text-2xl font-bold">5.0</div>
              <div className="text-xs sm:text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
