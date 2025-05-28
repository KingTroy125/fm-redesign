
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProductsSection = () => {
  const products = [
    {
      title: "Continental Cooked Ham",
      description: "Continental cooked ham is made from defatted leg of pork, is cured and cooked in a round mold.",
      image: "https://www.feinschmecker.co.za/wp-content/uploads/2017/11/018-300x300.jpg",
      features: ["Full Pre-pack Range", "Pork Cooked", "Ham"]
    },
    {
      title: "Roast Beef",
      description: "Roast beef made with strip loin, spiced with mustard, rosemary, coarse salt and black pepper and is roasted in oven unti it is medium pinkish colour.",
      image: "https://www.feinschmecker.co.za/wp-content/uploads/2017/11/Rare-roast-beef.jpg",
      features: ["Beef Cooked", "Cooked Meats & Roasts", "Full Pre-pack Range"]
    },
    {
      title: "Smoked Cooked Turkey Breast",
      description: "Smoked turkey breast made from 95% lean turkey breast, it is salted and spiced, cooked and smoked in a semi circle shape and coated with paprika.",
      image: "https://www.feinschmecker.co.za/wp-content/uploads/2017/11/067.jpg",
      features: ["Full Pre-pack", "Poultry Cooked", "Loaf", "Smoked"]
    },
    {
      title: "Kaiser Mustard Beef",
      description: "Beef roll containing some pork and mustard seeds, pure meat",
      image: "https://www.feinschmecker.co.za/wp-content/uploads/2017/11/kaiser-mustard-beef.jpg",
      features: ["Kaiser Range", "Beef", "Loaves Cooked", "Mustard"]
    },
    {
      title: "Chourizo, Cooked & Smoked (Individual VP)",
      description: "Chorizo is a Portuguese Specialty. A spicy and heavily smoked sausage, with paprika as the main spice. Usually eaten in Caldo Verde, a traditional Portuguese potato soup. Also grilled hot or cold.",
      image: "https://www.feinschmecker.co.za/wp-content/uploads/2017/11/090.jpg",
      features: ["Continental Specialities", "Full Pre-pack Range", "Sausages Cooked"]
    },
    {
      title: "Pepperoni Salami, Smoked",
      description: "Beef & Pork. Smoked and cured. Fine texture. New recipe. SA’s first proper cured New York style pepperoni.",
      image: "https://www.feinschmecker.co.za/wp-content/uploads/2017/11/smoked-pepperoni-salami.jpg",
      features: ["Full Pre-pack Range", "Salamis", "Cooked"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-meat-red mb-4 tracking-normal font-medium font-fredoka">Our Premium Selection</h2>
          <p className="text-xl text-meat-brown max-w-3xl mx-auto font-inter">
            We source only the finest quality meats from trusted suppliers, ensuring every cut meets our exacting standards for freshness, flavor, and quality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-meat-cream">
              <CardHeader className="p-0">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-meat-red mb-2">{product.title}</CardTitle>
                <CardDescription className="text-meat-brown mb-4">{product.description}</CardDescription>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-meat-brown flex items-center">
                      <span className="w-2 h-2 bg-meat-red rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
