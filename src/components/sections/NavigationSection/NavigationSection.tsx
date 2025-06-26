"use client"

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/routing";
import { ChevronDownIcon, HeartIcon, MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

export const NavigationSection = () => {

  const pathname = usePathname()

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

  return (
    <>
      <header className="flex justify-center w-full fixed top-[40px] left-0 z-30">
        <div className="flex items-center justify-between w-full max-width px-3 md:px-5 py-2 md:py-4 bg-white rounded-[54px] border border-solid border-neutral-200">
          {/* Logo */}
          <Link href='/' className="relative w-12 md:w-[77px] h-8 md:h-14 shrink-0 overflow-hidden">
            <Image className="object-cover" alt="logo house for life" src="/assets/img/logo-hfl.png" fill priority />
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-6 border-2 border-red-600 ">
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
            <div className="relative w-[50px] h-[50px] bg-white rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-1">
                <span className="font-['Manrope',Helvetica] font-normal text-black text-sm">
                  FR
                </span>
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </div>
            </div>

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
              <MenuIcon className="w-6 h-6 ml-1.5 text-inherit " />
            </Button>
          </div>
        </div>
      </header>
        {/* Sheet */}
        <Sheet open={openModal} onOpenChange={setOpenModal} >
          <div className="relative !overflow-hidden">
              <SheetContent side={'bottom'} aria-describedby={undefined} className="w-20  h-[calc(100%)]">
                  <SheetHeader className="">
                      <SheetTitle hidden>Menu principal</SheetTitle>
                  </SheetHeader>
                  {/* <div className='absolute top-0 left-0 right-0 z-[1] bg-white'>
                      Header with action buttons 
                      <header className="w-full h-20 border-b border-[#d9d9d9] flex items-center justify-between px-12">
                          <Button variant="outline" className="h-10"
                            onClick={() => setOpenModal(false)}>
                              Fermer
                          </Button>
                      </header>
                  </div>*/}

                  {/* Scrollable content area */}
                  <div className="h-[calc(100%-80px)] mt-24 px-7 v-scroll overflow-y-scroll">
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores veritatis neque numquam est, officia praesentium doloribus labore quos dignissimos voluptates magnam vero eveniet tempore sequi porro a quis cumque reprehenderit alias reiciendis similique facere pariatur nemo excepturi! Eligendi maiores ullam numquam laudantium culpa ab necessitatibus. Aut consectetur, quaerat sapiente quod accusamus non cumque ducimus magni sequi. Labore, ducimus. Quam maiores eos et? Cum eaque officia harum autem culpa doloribus odit adipisci vero? Incidunt, labore eum. Dicta possimus consequatur dignissimos vel aliquid, reprehenderit vitae iusto sunt fugit, illo asperiores ab perferendis iste numquam error obcaecati adipisci cumque eius reiciendis sit ratione!
                      </p>
                  </div>
              </SheetContent>
          </div>
        </Sheet>


    </>
  );
};
