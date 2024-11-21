import React from "react";
import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { aboutAlemHospital } from "@/lib/data";

type Props = {
  isMobile?: boolean;
};

export const NavMenu = ({ isMobile = false }: Props) => {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem className={cn(isMobile && "flex flex-col gap-4")}>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* About Alem Primary Hospital */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Alem Hospital</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {aboutAlemHospital.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Services */}
          <NavigationMenuItem>
            <Link to="/services">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Our Staff */}
          <NavigationMenuItem>
            <Link to="/staff">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Our Staff
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Gallery */}
          <NavigationMenuItem>
            <Link to="/gallery">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* News */}
          <NavigationMenuItem>
            <Link to="/news">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                News
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
