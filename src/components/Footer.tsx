
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">PrimeCuts</h3>
            <p className="text-gray-400 mb-6">Bringing premium quality meats directly to your table since 2015.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/beef" className="text-gray-400 hover:text-white">Beef</Link></li>
              <li><Link to="/pork" className="text-gray-400 hover:text-white">Pork</Link></li>
              <li><Link to="/poultry" className="text-gray-400 hover:text-white">Poultry</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-3 text-primary" size={16} />
                <span className="text-gray-400">47 Machine Street, Elsburg, Germiston, Johannesburg, South Africa</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1 mr-3 text-primary" size={16} />
                <span className="text-gray-400">+27 (11) 827 7644</span>
              </li>
              <li className="flex items-start">
                <Mail className="mt-1 mr-3 text-primary" size={16} />
                <span className="text-gray-400">sales@primecuts.co.za</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Our Hours</h4>
            <p className="text-gray-400 mb-4">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-400 mb-4">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="text-gray-400">Sunday: Closed</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 PrimeCuts. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
