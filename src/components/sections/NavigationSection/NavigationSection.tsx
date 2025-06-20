import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

export const NavigationSection = () => {
  
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", active: false },
    { label: "Nos programmes", active: false },
    { label: "Actualités", active: false },
    { label: "Contact", active: false },
    { label: "À propos", active: true },
  ];

  return (
    <header className="flex justify-center w-full fixed top-[82px] left-0 z-30">
      <div className="flex items-center justify-between w-full max-w-[1240px] px-5 py-[15px] bg-white rounded-[54px] border border-solid border-neutral-200">
        {/* Logo */}
        <img className="w-[77px] h-14 object-cover" alt="Z" src="/assets/img/logo-hfl.png" />

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`font-['Manrope',Helvetica] text-sm text-black ${item.active ? "font-bold" : "font-normal"}`}
                  href="#">
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side controls */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="relative w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center">
            <div className="flex items-center gap-1">
              <span className="font-['Manrope',Helvetica] font-normal text-black text-sm">
                FR
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Donation button */}
          <Button className="h-[50px] px-5 py-[15px] bg-green rounded-[54px] relative">
            <span className="font-['Instrument_Sans',Helvetica] font-bold text-[#fffef5] text-sm leading-[22.4px]">
              Faire un don
            </span>
            <ArrowRightIcon className="w-6 h-6 ml-1.5" />

            {/* Yellow indicator dot */}
            <div className="absolute w-[23px] h-[23px] -top-1.5 left-px bg-white rounded-[50px] flex items-center justify-center">
              <div className="w-[11px] h-[11px] bg-yello rounded-[50px]" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
};
