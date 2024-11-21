import { useState } from "react";
import { ArrowRightIcon, ChevronDown, ChevronUp, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import { aboutAlemHospital } from "@/lib/data";

const menuItems = [
  { title: "Home", href: "/" },
  { title: "About Alem Hospital", items: aboutAlemHospital },
  { title: "Services", href: "/services" },
  { title: "Our Staff", href: "/staff" },
  { title: "Gallery", href: "/gallery" },
  { title: "News", href: "/news" },
];

export const MobileSidebarMenu = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (title: string) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="md:hidden pr-4 hover:opacity-75 transition"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-4 bg-white w-64">
        <nav className="flex flex-col space-y-4 pt-6">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <>
                  <button
                    onClick={() => handleMenuClick(item.title)}
                    className="w-full text-gray-800 hover:bg-slate-100 p-2 rounded-md transition text-left flex items-center justify-between"
                  >
                    {item.title}
                    <span>
                      {activeMenu === item.title ? (
                        <ChevronUp className="size-4" />
                      ) : (
                        <ChevronDown className="size-4" />
                      )}
                    </span>
                  </button>
                  {activeMenu === item.title && (
                    <ul className="ml-4 space-y-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            className="block text-gray-800 hover:bg-slate-100 p-2 rounded-md transition"
                            onClick={handleLinkClick}
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.href!}
                  className="block w-full text-gray-800 hover:bg-slate-100 p-2 rounded-md transition"
                  onClick={handleLinkClick}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col w-full items-center my-2 gap-2">
          <Link to="/contact-us">
            <Button
              variant="expandIcon"
              Icon={ArrowRightIcon}
              iconPlacement="right"
              className="bg-sky-500 hover:bg-sky-500"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
