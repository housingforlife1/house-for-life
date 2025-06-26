"use client"

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/routing";
import { ChevronDownIcon, HeartIcon, Text, XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export const NavigationSection = () => {

  const pathname = usePathname()
  const localActive = useLocale()

  const [openModal, setOpenModal] = useState(false)
  

  const t = useTranslations('navigation')
  
  // Navigation menu items data
  const navItems = [
    { label: `${t('accueil')}`, link: "/", active: pathname === '/' },
    { label: `${t('nos_programmes')}`, link: `/programs`, active: pathname.includes('/programs') },
    { label: `${t('actualites')}`,link: `/news`, active: pathname.includes('/news') },
    { label: `${t('contact')}`, link: "/contact", active: pathname.includes('/contact') },
    { label: `${t('a_propos')}`,link: `/about`, active: pathname.includes('/about') },
  ];

  const changeLanguage = (lang: string) => {
    if (localActive === lang) return
    // set language to cookies
    document.cookie = `NEXT_LOCALE=${lang}`
    window.location.href = window.location.href.replace(`/${localActive}`, `/${lang}`)
  };

  return (
    <>
      <header className="flex justify-center w-full fixed top-5 md:top-10 left-0 z-30">
        <div className="flex items-center justify-between w-full max-width px-3 md:px-5 py-2 md:py-4 bg-white rounded-[54px] border border-solid border-neutral-200">
          {/* Logo */}
          <Link href='/' className="relative w-12 md:w-[77px] h-8 md:h-14 shrink-0 overflow-hidden">
            <Image className="object-cover" alt="logo house for life" src="/assets/img/logo-hfl.png" fill priority />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6">
            { 
              navItems.map((item, index) => (
                <Link key={index} href={item.link} className={`font-['Manrope',Helvetica] text-sm text-black whitespace-nowrap ${item.active ? "font-bold" : "font-normal"}`}>
                  {item.label}
                </Link>
              ))
            }
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Language selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-[50px] h-[50px] bg-white rounded-lg px-2">
                <span className="[font-family:'Manrope',Helvetica] font-normal text-black text-sm">
                  {localActive === 'fr' ? 'FR': 'EN'}
                </span>
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-min">
                <DropdownMenuItem 
                  onClick={() => changeLanguage("fr")}
                  className="flex items-center gap-2 cursor-pointer"
                  >FR</DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => changeLanguage("en")}
                  className="flex items-center gap-2 cursor-pointer"
                  >EN</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Donation Desktop button */}
            <Link href={`/donation`} className="hidden md:inline-block">
                <Button className="h-[50px] px-5 py-[15px] bg-green rounded-[54px] relative">
                  <span className="font-['Instrument_Sans',Helvetica] font-bold text-[#fffef5] text-sm leading-[22.4px]">
                    Faire un don
                  </span>
                  <HeartIcon className="w-6 h-6 ml-1.5" />

                  {/* Yellow indicator dot */}
                  <div className="absolute w-[23px] h-[23px] -top-1.5 left-px bg-white rounded-[50px] flex items-center justify-center">
                    <div className="w-[11px] h-[11px] bg-yello rounded-[50px]" />
                  </div>
                </Button>
            </Link>

            {/* Donation Mobile button */}
            <Button className="flex md:hidden h-[50px] px-5 py-[15px] bg-[#f8f8e9] rounded-[54px] font-['Instrument_Sans',Helvetica] text-black hover:text-white font-bold text-sm leading-[22.4px]"
              onClick={() => setOpenModal(true)}>
              Menu
              <Text className="w-6 h-6 ml-1.5 rotate-180 text-inherit " />
            </Button>
          </div>
        </div>
      </header>

      {/* Sheet */}
      <Sheet open={openModal} onOpenChange={setOpenModal}>
        <SheetContent side={'bottom'} aria-describedby={undefined} className="w-screen h-[calc(85%)] bg-transparent p-0">
            <SheetHeader className="">
                <SheetTitle hidden>Menu principal</SheetTitle>
            </SheetHeader>
            <div className="h-10 w-10 absolute top-2 right-2 z-10 backdrop-blur-sm rounded-full"></div>

            
            {/* Scrollable content area */}
            <div className="h-full flex flex-col justify-end overflow-hidden flex-1">
              <div className="flex justify-center items-center my-3">
                <Button
                  variant="outline"
                  onClick={() => setOpenModal(false)}
                  className="h-[50px] px-5 py-3.5 rounded-[54px] bg-white font-paragraph-bold cursor-pointer">
                  Fermer le menu
                  <XIcon className="h-5 w-5 ml-2 rotate-90"/>
                </Button>
              </div>
              <div className="h-full flex-1 v-scroll overflow-y-scroll rounded-t-3xl p-7 bg-white">
                <h1 className="text-2xl font-bold text-black text-center mt-4 mb-10">Menu</h1>
                {/* Navigation Menu */}
                <div className="flex flex-col justify-center items-center gap-8">
                  { 
                    navItems.map((item, index) => (
                      <Link onClick={() => setOpenModal(false)} key={index} href={item.link} className={`font-['Manrope',Helvetica] text-black whitespace-nowrap ${item.active ? "font-bold" : "font-normal"}`}>
                        {item.label}
                      </Link>
                    ))
                  }
                  <Link href={`/programs`} className='w-full cursor-pointer'>
                    <Button className="h-[50px] w-full px-5 py-3.5 bg-green rounded-[54px] font-paragraph-bold text-white">
                      Faire un don maintenant
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full bg-white px-2">
                <p className="text-center text-sm">Pour faire un don : <span className="font-bold text-black">donation@hforlife-hpourlavie.ca</span></p>
              </div>
            </div> 
        </SheetContent>
      </Sheet>
    </>
  );
};
