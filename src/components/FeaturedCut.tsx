
import React from 'react';
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FeaturedCutProps {
  name: string;
  description: string;
  image: string;
  rating: number;
  badge?: string;
}

const FeaturedCut: React.FC<FeaturedCutProps> = ({ name, description, image, rating, badge }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-white px-3 py-1 rounded-full">{badge}</Badge>
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mt-auto">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-yellow-400" size={16} />
            <span className="ml-1 text-gray-700">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCut;
