import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-meat-lightcream to-meat-cream min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 font-inter">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
            className="animate-fade-in text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold text-meat-red mb-6 leading-tight font-fredoka tracking-normal font-medium"
            >
              Welcome to the home of
              <span className="block text-meat-brown">Feinschmecker Deli Meats</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-meat-brown mb-8 leading-relaxed font-inter"
            >
              Delivering exceptional quality meats to the commercial trade nationwide. 
              From prime cuts of beef to specialty game meats, we provide only the finest selections.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 w-full sm:flex-row sm:items-start sm:w-auto"
            >
              <Button 
                className="bg-meat-red hover:bg-meat-darkred text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Products
              </Button>
              <Button 
                variant="outline" 
                className="border-meat-red text-meat-red hover:bg-meat-red hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-x-2 mt-6 justify-center sm:justify-start"
            >
              {/* 5 yellow stars */}
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="ml-2 text-meat-brown text-sm font-medium"><b>5.0</b> (126 Ratings)</span>
            </motion.div>
          </motion.div>
          <div className="relative">
            <div className="bg-meat-red rounded-2xl p-0 overflow-hidden shadow-2xl">
              <img 
                src="./images/image.png" 
                alt="Premium meat cuts" 
                className="rounded-lg w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
