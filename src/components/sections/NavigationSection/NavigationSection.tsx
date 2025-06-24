import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { ChevronDownIcon, HeartIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const NavigationSection = () => {

  const t = useTranslations('navigation')
  
  // Navigation menu items data
  const navItems = [
    { label: `${t('accueil')}`, link: "/", active: false },
    { label: `${t('nos_programmes')}`, link: `/programs`, active: false },
    { label: `${t('actualites')}`,link: `/news`, active: false },
    { label: `${t('contact')}`, link: "/contact", active: false },
    { label: `${t('a_propos')}`,link: `/about`, active: true },
  ];

  return (
    <header className="flex justify-center w-full fixed top-[40px] left-0 z-30">
      <div className="flex items-center justify-between w-full max-width px-5 py-[15px] bg-white rounded-[54px] border border-solid border-neutral-200">
        {/* Logo */}
        <Link href='/' className="relative w-[77px] h-14 overflow-hidden">
          <Image className="object-cover" alt="logo house for life" src="/assets/img/logo-hfl.png" fill priority />
        </Link>

        {/* Navigation Menu */}
        <div className="flex items-center gap-6">
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

          {/* Donation button */}
          <Link href={`/donation`}>
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
        </div>
      </div>
    </header>
  );
};
