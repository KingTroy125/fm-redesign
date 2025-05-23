
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedCuts from '@/components/FeaturedCuts';
import QualitySection from '@/components/QualitySection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Categories />
      <FeaturedCuts />
      <QualitySection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
