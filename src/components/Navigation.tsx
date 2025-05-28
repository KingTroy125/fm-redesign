
import { Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { NavigationSheet } from './NavigationSheet';

const Navigation = () => {
  return (
    <div className="min-h-0">
      <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50 shadow-lg">
        <div className="h-full flex items-center justify-between mx-auto px-6">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-4">
            {/* Contact Information */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:+27118277644" 
                className="flex items-center gap-2 text-meat-brown hover:text-meat-red transition-colors duration-300 rounded-full px-3 py-2 hover:bg-meat-lightcream"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">+27 (11) 827 7644</span>
              </a>
              <a 
                href="mailto:sales@feinschmecker.co.za" 
                className="flex items-center gap-2 text-meat-brown hover:text-meat-red transition-colors duration-300 rounded-full px-3 py-2 hover:bg-meat-lightcream"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">sales@feinschmecker.co.za</span>
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
