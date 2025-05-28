
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-meat-brown text-meat-brown hover:bg-meat-lightcream">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-meat-cream">
        <div className="mt-8">
          <Logo />
        </div>
        <NavMenu orientation="vertical" className="mt-12" />
        
        {/* Mobile Contact Info */}
        <div className="mt-8 space-y-4">
          <a 
            href="tel:+27118277644" 
            className="flex items-center gap-3 text-meat-brown hover:text-meat-red transition-colors duration-300 p-3 rounded-lg hover:bg-meat-lightcream"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">+27 (11) 827 7644</span>
          </a>
          <a 
            href="mailto:sales@feinschmecker.co.za" 
            className="flex items-center gap-3 text-meat-brown hover:text-meat-red transition-colors duration-300 p-3 rounded-lg hover:bg-meat-lightcream"
          >
            <Mail className="h-5 w-5" />
            <span className="font-medium">sales@feinschmecker.co.za</span>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};
