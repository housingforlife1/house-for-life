import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", active: false },
    { label: "Nos programmes", active: true },
    { label: "Actualités", active: false },
    { label: "Contact", active: false },
    { label: "À propos", active: false },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-2.5 px-5 py-[15px] sticky top-[82px] bg-white rounded-[54px] border border-solid border-neutral-200 z-10">
      <div className="flex items-center justify-between relative self-stretch w-full">
        <img
          className="relative w-[77px] h-14 object-cover"
          alt="Z"
          src="/z-1.png"
        />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className={`relative w-fit [font-family:'Manrope',Helvetica] ${
                    item.active ? "font-bold" : "font-normal"
                  } text-black text-sm tracking-[0] leading-[normal]`}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <div className="relative w-[50px] h-[50px] bg-white rounded-lg">
            <div className="flex w-[34px] items-center justify-between relative top-[15px] left-2">
              <div className="relative w-fit [font-family:'Manrope',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
                FR
              </div>
              <ChevronDownIcon className="relative w-3.5 h-3.5" />
            </div>
          </div>

          <Button className="h-[50px] px-5 py-[15px] bg-green rounded-[54px] relative">
            <span className="relative w-fit [font-family:'Instrument_Sans',Helvetica] font-bold text-[#fffef5] text-sm tracking-[0] leading-[22.4px] whitespace-nowrap">
              Faire un don
            </span>
            <ArrowRightIcon className="relative w-6 h-6 ml-1.5" />
            <div className="absolute w-[23px] h-[23px] -top-1.5 left-px bg-white rounded-[50px]">
              <div className="relative w-[11px] h-[11px] top-1.5 left-1.5 bg-yello rounded-[50px]" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
