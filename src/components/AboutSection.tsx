
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-meat-lightcream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-meat-red tracking-normal font-medium font-fredoka">Why Choose Feinschmecker?</h2>
            <p className="text-lg text-meat-brown leading-relaxed font-inter">
              With over two decades of experience in the meat industry, Feinschmecker has established itself as South Africa's premier meat supplier to the commercial trade. We pride ourselves on delivering exceptional quality and service that exceeds expectations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-meat-red rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-meat-red tracking-normal font-medium font-fredoka">Premium Quality Guarantee</h3>
                  <p className="text-meat-brown font-inter">Every cut is carefully selected and quality tested before distribution.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-meat-red rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-meat-red tracking-normal font-medium font-fredoka">Nationwide Delivery</h3>
                  <p className="text-meat-brown font-inter">Free delivery to commercial clients across South Africa.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-meat-red rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-meat-red tracking-normal font-medium font-fredoka">Expert Support</h3>
                  <p className="text-meat-brown font-inter">Our team provides professional guidance for all your meat requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://www.feinschmecker.co.za/wp-content/uploads/2020/03/Salami-Supplier.jpg" 
              alt="Meat preparation" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="https://www.feinschmecker.co.za/wp-content/uploads/2020/03/Deli-Meats.jpg" 
              alt="Quality inspection" 
              className="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
