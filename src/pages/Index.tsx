
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
