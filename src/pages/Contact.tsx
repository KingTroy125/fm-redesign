
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Contact Us"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-xl text-white">We'd love to hear from you. Reach out with any questions about our premium meat products.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
