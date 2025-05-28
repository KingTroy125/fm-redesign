import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-meat-darkred text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="./images/1.png" alt="Feinschmecker Logo" className="h-10 w-auto" />
              <h3 className="text-2xl tracking-normal font-medium font-fredoka">Feinschmecker Deli Meats</h3>
            </div>
            <p className="text-meat-lightcream mb-4">
              South Africa's premier meat supplier to the commercial trade. Quality, freshness, and service you can trust.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+27 (11) 827 7644</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>sales@feinschmecker.co.za</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Johannesburg, South Africa</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-meat-lightcream">
              <li>Premium Beef</li>
              <li>Pork Selections</li>
              <li>Lamb & Mutton</li>
              <li>Poultry</li>
              <li>Game Meat</li>
              <li>Specialty Items</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-meat-lightcream">
              <li>Nationwide Delivery</li>
              <li>Custom Cuts</li>
              <li>Wholesale Orders</li>
              <li>Quality Guarantee</li>
              <li>Expert Consultation</li>
              <li>Trade Support</li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-meat-red mt-8 pt-8 text-center text-meat-lightcream"
        >
          <p>&copy; 2025 Feinschmecker. All rights reserved. | Professional Meat Suppliers Since 2000</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
