import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MeatCategoryProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const MeatCategory: React.FC<MeatCategoryProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl transform hover:scale-[1.02] flex flex-col">
      <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={`Premium ${title} Cuts`}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-600 mb-4 flex-1">{description}</p>
        <Link 
          to={link} 
          className="text-primary font-medium flex items-center text-sm md:text-base hover:text-primary/80 transition-colors"
        >
          View Collection
          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
        </Link>
      </div>
    </div>
  );
};

export default MeatCategory;
