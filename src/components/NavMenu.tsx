
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a 
            href="#home" 
            className="text-meat-brown hover:text-meat-red transition-colors duration-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-meat-lightcream"
          >
            Home
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a 
            href="#products" 
            className="text-meat-brown hover:text-meat-red transition-colors duration-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-meat-lightcream"
          >
            Products
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a 
            href="#about" 
            className="text-meat-brown hover:text-meat-red transition-colors duration-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-meat-lightcream"
          >
            About
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <a 
            href="#contact" 
            className="text-meat-brown hover:text-meat-red transition-colors duration-300 px-3 py-2 text-sm font-medium rounded-lg hover:bg-meat-lightcream"
          >
            Contact
          </a>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
