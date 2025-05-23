
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCut from '@/components/FeaturedCut';

const SpecialCuts: React.FC = () => {
  const specialCuts = [
    {
      name: 'Tomahawk Steak',
      description: 'A ribeye steak with the entire rib bone left intact. Impressive presentation and exceptional flavor.',
      image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 5.0,
      badge: 'Premium'
    },
    {
      name: 'Wagyu Beef',
      description: 'Known for its intense marbling, buttery flavor, and melt-in-your-mouth texture. The pinnacle of beef luxury.',
      image: 'https://images.unsplash.com/photo-1594041680839-76a695472cad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 5.0,
      badge: 'Luxury'
    },
    {
      name: 'Rack of Lamb',
      description: 'A premium cut consisting of ribs with the loin meat attached. Elegant presentation for special occasions.',
      image: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9,
      badge: 'Grass-Fed'
    },
    {
      name: 'Venison Loin',
      description: 'Lean, tender cut with a rich, distinctive flavor. Perfect for those seeking something beyond conventional meats.',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8,
      badge: 'Game'
    },
    {
      name: 'Dry-Aged Porterhouse',
      description: 'Combines filet mignon and strip steak in one cut, dry-aged for enhanced tenderness and flavor complexity.',
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9,
      badge: '45-Day Aged'
    },
    {
      name: 'Bison Ribeye',
      description: 'Leaner than beef with a slightly sweeter flavor. Rich in nutrients with less fat and fewer calories.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.7,
      badge: 'Wild-Raised'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Special Meat Cuts"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-4">Special Cuts</h1>
              <p className="text-xl text-white">Exceptional and unique cuts for special occasions and discerning meat connoisseurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Premium Selections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialCuts.map((cut, index) => (
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
            <h2 className="text-3xl font-bold mb-6">About Our Special Cuts</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our special cuts collection represents the pinnacle of our offerings — unique, exceptional cuts that are perfect for celebrations, special occasions, or when you simply want to experience the extraordinary.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              What makes these cuts special:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
              <li><strong>Rare Selections:</strong> Many of these cuts are not widely available in conventional markets.</li>
              <li><strong>Premium Quality:</strong> These represent the highest grade within each category.</li>
              <li><strong>Unique Processing:</strong> Many undergo special treatments like extended dry-aging or specialty butchery techniques.</li>
              <li><strong>Exceptional Sourcing:</strong> Sourced from specialty farms or unique heritage breeds known for superior quality.</li>
            </ul>
            <p className="text-lg text-gray-700">
              Due to the exclusive nature of these products, availability may be limited. We recommend contacting us directly to inquire about current availability or to place special orders for these premium cuts.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SpecialCuts;
