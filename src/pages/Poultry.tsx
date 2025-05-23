
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturedCut from '@/components/FeaturedCut';

const Poultry: React.FC = () => {
  const poultryCuts = [
    {
      name: 'Whole Chicken',
      description: 'Free-range, organic whole chicken. Perfect for roasting, with juicy meat and crispy skin when cooked properly.',
      image: 'https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8,
      badge: 'Free-Range'
    },
    {
      name: 'Chicken Breasts',
      description: 'Boneless, skinless chicken breasts. Lean, versatile, and perfect for a wide variety of recipes.',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.6,
      badge: 'Organic'
    },
    {
      name: 'Chicken Thighs',
      description: 'Juicier and more flavorful than breasts. Available bone-in or boneless, skin-on or skinless.',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.9
    },
    {
      name: 'Chicken Wings',
      description: 'Perfect for appetizers, game day snacks, or as part of a meal. Great for frying, baking, or grilling.',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.7
    },
    {
      name: 'Whole Duck',
      description: 'Rich, flavorful meat with a higher fat content than chicken. Excellent for special occasions.',
      image: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.8,
      badge: 'Premium'
    },
    {
      name: 'Turkey Breast',
      description: 'Lean white meat, perfect for roasting, smoking, or slicing for sandwiches and salads.',
      image: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      rating: 4.5,
      badge: 'Free-Range'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Premium Poultry Selection"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-4">Premium Poultry</h1>
              <p className="text-xl text-white">Free-range, organic poultry raised without antibiotics for superior taste and quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Poultry Selections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {poultryCuts.map((cut, index) => (
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
            <h2 className="text-3xl font-bold mb-6">About Our Poultry</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our poultry is sourced from farms that prioritize animal welfare and sustainable farming practices. All our chickens, ducks, and turkeys are raised in free-range environments where they can express natural behaviors.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We offer several types of poultry:
            </p>
            <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700">
              <li><strong>Free-Range Chicken:</strong> Raised with outdoor access, resulting in more flavorful meat.</li>
              <li><strong>Organic Chicken:</strong> Fed certified organic feed with no antibiotics or hormones ever.</li>
              <li><strong>Heritage Breed Turkey:</strong> Traditional breeds raised at a natural pace for superior flavor.</li>
              <li><strong>Pekin Duck:</strong> Known for its mild flavor and succulent meat, perfect for special occasions.</li>
            </ul>
            <p className="text-lg text-gray-700">
              All our poultry is processed in small batches to ensure quality and freshness. We're committed to offering products that are not only delicious but also raised with respect for the animals and the environment.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Poultry;
