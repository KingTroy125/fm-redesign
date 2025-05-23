import React from 'react';
import MeatCategory from './MeatCategory';

const Categories: React.FC = () => {
  const categories = [
    {
      title: 'Beef',
      description: 'Our premium beef selection includes grass-fed, grain-finished, and dry-aged options from heritage breeds.',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/beef'
    },
    {
      title: 'Pork',
      description: 'Ethically raised heritage pork with exceptional marbling and flavor, perfect for roasting, grilling, or slow cooking.',
      image: 'https://images.unsplash.com/photo-1609252643502-b9c78c65ab64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/pork'
    },
    {
      title: 'Poultry',
      description: 'Free-range, organic poultry including chicken, duck, and turkey raised without antibiotics for superior taste.',
      image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/poultry'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4">Our Categories</h2>
        <p className="text-base md:text-xl text-gray-600 text-center mb-10 md:mb-16 max-w-3xl mx-auto px-4">
          Explore our carefully selected range of premium meats, each category offering the finest cuts for your culinary creations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <MeatCategory
              key={index}
              title={category.title}
              description={category.description}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
