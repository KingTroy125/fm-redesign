
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCut from '@/components/FeaturedCut';

const Beef: React.FC = () => {
  const beefCuts = [
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
      name: 'NY Strip Steak',
      description: 'A firmer texture with excellent flavor. The strip steak has a fine-grained texture and a robust beefy flavor.',
      image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8,
      badge: 'Dry-Aged'
    },
    {
      name: 'T-Bone Steak',
      description: 'Two steaks in one - tenderloin and strip steak divided by a T-shaped bone. Offers varied textures and flavors.',
      image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.7
    },
    {
      name: 'Beef Brisket',
      description: 'From the breast section, requires slow cooking to break down the collagen. Perfect for smoking or braising.',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9,
      badge: 'Slow-Cook'
    },
    {
      name: 'Short Ribs',
      description: 'Well-marbled with fat and connective tissue, best for slow cooking methods like braising to tenderize.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Premium Beef Selection"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-4">Premium Beef</h1>
              <p className="text-xl text-white">Our beef is sourced from ethically raised cattle, resulting in exceptional flavor and tenderness.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Beef Cuts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beefCuts.map((cut, index) => (
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

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About Our Beef</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our beef is sourced exclusively from family farms that prioritize sustainable and ethical farming practices. The cattle are raised on open pastures with plenty of room to graze and exhibit their natural behaviors.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We offer several types of beef including grass-fed, grain-finished, and dry-aged options. Each has its own distinct flavor profile and characteristics:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
              <li><strong>Grass-Fed Beef:</strong> Leaner with a more mineral, earthier flavor profile. Higher in omega-3 fatty acids and vitamins.</li>
              <li><strong>Grain-Finished Beef:</strong> More marbling resulting in richer flavor and tenderness. Cattle are pasture-raised but finished on grain.</li>
              <li><strong>Dry-Aged Beef:</strong> Aged in controlled environments to enhance tenderness and develop complex, nutty flavors. A premium option for beef connoisseurs.</li>
            </ul>
            <p className="text-lg text-gray-700">
              All our beef is hand-selected, expertly butchered, and flash-frozen to preserve peak freshness and flavor. We're proud to offer beef that's not only delicious but raised with respect for the animals and environment.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Beef;
