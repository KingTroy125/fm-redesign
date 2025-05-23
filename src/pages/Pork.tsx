
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCut from '@/components/FeaturedCut';

const Pork: React.FC = () => {
  const porkCuts = [
    {
      name: 'Pork Chops',
      description: 'Heritage pork chops with excellent fat marbling and rich flavor. Versatile for grilling, roasting or pan-frying.',
      image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.7,
      badge: 'Heritage'
    },
    {
      name: 'Pork Tenderloin',
      description: 'The most tender cut of pork, lean and mild in flavor. Excellent for roasting whole or cutting into medallions.',
      image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9,
      badge: 'Premium'
    },
    {
      name: 'Pork Belly',
      description: 'Richly marbled with layers of fat and meat. Perfect for slow roasting, braising, or making homemade bacon.',
      image: 'https://images.unsplash.com/photo-1619221882268-48fee830f14c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8
    },
    {
      name: 'Baby Back Ribs',
      description: 'Shorter, curved ribs from the top of the ribcage. Tender and lean compared to other rib cuts.',
      image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9,
      badge: 'BBQ Favorite'
    },
    {
      name: 'Pork Shoulder',
      description: 'Well-marbled and perfect for slow cooking. Ideal for pulled pork, carnitas, or slow-roasted dishes.',
      image: 'https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.7,
      badge: 'Slow-Cook'
    },
    {
      name: 'Pork Loin Roast',
      description: 'Large, lean cut from the back of the pig. Great for roasting whole with herbs and spices.',
      image: 'https://images.unsplash.com/photo-1595854341625-f33e32c2da1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1609252643502-b9c78c65ab64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Premium Pork Selection"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-4">Premium Pork</h1>
              <p className="text-xl text-white">Heritage breed pork with superior marbling and flavor, raised with care for exceptional quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Pork Cuts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {porkCuts.map((cut, index) => (
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
            <h2 className="text-3xl font-bold mb-6">About Our Pork</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our pork comes from heritage breed pigs that are raised in humane conditions with plenty of outdoor access. These traditional breeds offer superior flavor, texture, and marbling compared to conventional pork.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Heritage breeds we source include:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
              <li><strong>Berkshire:</strong> Known for juicy, tender meat with exceptional marbling.</li>
              <li><strong>Duroc:</strong> Produces well-marbled, flavorful meat with a deep red color.</li>
              <li><strong>Tamworth:</strong> Lean meat with excellent bacon qualities and robust flavor.</li>
              <li><strong>Gloucestershire Old Spot:</strong> Succulent meat with outstanding taste and texture.</li>
            </ul>
            <p className="text-lg text-gray-700">
              All our pork is raised without antibiotics or growth hormones. The pigs are allowed to mature at a natural pace, which develops deeper flavor and better fat quality. We work with farmers who prioritize sustainable practices and the welfare of their animals.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Pork;
