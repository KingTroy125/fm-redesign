
import React from 'react';
import FeaturedCut from './FeaturedCut';

const FeaturedCuts: React.FC = () => {
  const featuredCuts = [
    {
      name: 'Ribeye Steak',
      description: 'Known for its rich marbling and buttery flavor. Ideal for grilling or pan-searing to medium-rare perfection.',
      image: 'https://images.unsplash.com/photo-1588168333785-2065b7b25cf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9,
      badge: 'Premium'
    },
    {
      name: 'Filet Mignon',
      description: 'The most tender cut of beef, with mild flavor. Perfect for special occasions when only the best will do.',
      image: 'https://images.unsplash.com/photo-1607116667981-ff0b13e1b474?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 5.0,
      badge: 'Grass-Fed'
    },
    {
      name: 'Pork Chops',
      description: 'Heritage pork chops with excellent fat marbling and rich flavor. Versatile for grilling, roasting or pan-frying.',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.7,
      badge: 'Heritage'
    },
    {
      name: 'Whole Chicken',
      description: 'Free-range, organic whole chicken. Perfect for roasting, with juicy meat and crispy skin when cooked properly.',
      image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8,
      badge: 'Free-Range'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Featured Cuts</h2>
        <p className="text-xl text-gray-600 mb-12">Our most popular premium cuts, selected for exceptional quality and flavor.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCuts.map((cut, index) => (
            <FeaturedCut
              key={index}
              name={cut.name}
              description={cut.description}
              image={cut.image}
              rating={cut.rating}
              badge={cut.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCuts;
