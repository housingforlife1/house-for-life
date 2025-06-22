import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { FacebookIcon } from 'lucide-react';
import React from 'react'

export default function FooterSection() {

   
  // Navigation menu items data
  const navItems = [
    { label: "Accueil", link: "/", active: false },
    { label: "Nos programmes", link: `/programs`, active: false },
    { label: "Actualités",link: `/news`, active: false },
    { label: "Contact", link: "/contact", active: false },
    { label: "À propos",link: `/about`, active: true },
  ];

  return (
    <div>
        <footer className="max-width flex flex-col pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left footer card */}
                <Card
                    className="w-full h-[340px] border-none shadow-none rounded-3xl"
                    style={{ backgroundColor: "#f8f8e9" }}>
                    <CardContent className="p-0 h-full">
                    <div className="flex flex-col items-start gap-11 p-16 h-full">
                        <div className="flex flex-col items-start gap-2 w-full">
                        <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                            Ensemble, construisons un avenir meilleur
                        </h3>
                        <p className="w-full max-w-[600px] font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                            Votre don, quel qu&apos;en soit le montant, contribue
                            directement à offrir un toit et un espoir à des femmes et
                            des enfants qui en ont besoin. Chaque contribution nous
                            rapproche de notre objectif.
                        </p>
                        </div>
                        <div className="flex items-center gap-2">
                        <Link href={`/donation`}>
                            <Button className="h-[50px] px-5 py-3.5 bg-green rounded-[54px] text-white">
                                <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-inherit text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                    Faire un don maintenant
                                </span>
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="h-[50px] px-5 py-3.5 bg-[#f8f8e9] rounded-[54px] border-[#282724]"
                        >
                            <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                            Devenir partenaire
                            </span>
                        </Button>
                        </div>
                    </div>
                    </CardContent>
                </Card>

                {/* Right footer card */}
                <Card
                    className="w-full h-[340px] border-none shadow-none rounded-3xl"
                    style={{ backgroundColor: "#eff8e9" }}>
                    <CardContent className="p-0 h-full">
                    <div className="flex flex-col items-start justify-between p-11 h-full">
                        <div className="flex flex-col items-start gap-2 w-full max-w-[424px]">
                        <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                            Participez autrement
                        </h3>
                        <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                            Vous préférez donner de votre temps ? Découvrez comment
                            devenir bénévole.
                        </p>
                        </div>
                        <Button
                        variant="outline"
                        className="h-[50px] px-5 py-3.5 bg-[#eff8e9] rounded-[54px] border-[#282724]"
                        >
                        <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                            Devenir bénévole
                        </span>
                        </Button>
                    </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer navigation */}
            <div className="mt-4 bg-[#fcfcf8] rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#fcfcf8]">
                    <div className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                        <p>
                            Habitation pour la vie {(new Date()).getFullYear()} | Tous droits reservés
                        </p>
                    </div>
                    {/* Navigation Menu */}
                    <div className="flex items-center justify-center gap-10 my-4 md:my-0">
                        { 
                        navItems.map((item, index) => (
                            <Link key={index} href={item.link} className={`font-['Manrope',Helvetica] text-sm text-black ${item.active ? "font-bold" : "font-normal"}`}>
                            {item.label}
                            </Link>
                        ))
                        }
                    </div>
                    <div className="flex items-center justify-end">
                        <a href='#' target='_blank' className="w-9 h-9 flex items-center justify-center cursor-pointer">
                            <FacebookIcon className='w-6 h-6'/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer info bar */}
            <div className="h-[50px] bg-[#fcfcf8] rounded-xl border-t border-neutral-200">
                <div className="flex flex-wrap md:flex-row items-center justify-between p-5 bg-[#fcfcf8]">
                    <div className="text-xs">
                    <span className="text-[#282724]">No d&apos;enregistrement </span>
                    <span className="font-bold">75272 2818 RR0001</span>
                    </div>

                    <div className="text-xs">
                    <span className="text-[#282724]">Pour faire un don : </span>
                    <span className="font-bold">donation@hforlife-hpourlavie.ca</span>
                    </div>

                    <div className="text-xs">
                    <span className="text-[#282724]">Téléphone : </span>
                    <span className="font-bold">5068540675 </span>
                    <span className="text-[#282724]">(Canada)</span>
                    </div>

                    <div className="text-xs">
                    <span className="text-[#282724]">Ce site a été conçu par </span>
                    <span className="font-bold">Acadie Intelligent Inc.</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
