"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link, usePathname } from '@/i18n/routing';
import { FacebookIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'

export default function FooterSection() {

    const pathname = usePathname()

    const t = useTranslations('navigation')
    const tf = useTranslations('footer')
    
    // Navigation menu items data
    const navItems = [
        { label: `${t('accueil')}`, link: "/", active: pathname === '/' },
        { label: `${t('nos_programmes')}`, link: `/programs`, active: pathname.includes('/programs') },
        { label: `${t('actualites')}`,link: `/news`, active: pathname.includes('/news') },
        { label: `${t('contact')}`, link: "/contact", active: pathname.includes('/contact') },
        { label: `${t('a_propos')}`,link: `/about`, active: pathname.includes('/about') },
    ];

    return (
        <footer className="flex flex-col pt-10 md:pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left footer card */}
                <Card
                    className="w-full lg:h-[340px] border-none shadow-none lg:rounded-3xl"
                    style={{ backgroundColor: "#f8f8e9" }}>
                    <CardContent className="p-0 h-full">
                        <div className="flex flex-col items-start justify-between gap-11 p-10 md:p-20 padding-left h-full">
                            <div className="flex flex-col items-start gap-2 w-full">
                                <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                                    {tf('faire_don_maintenant')}
                                </h3>
                                <p className="w-full font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {tf('card_1_description')}
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2 w-full lg:w-min">
                                <Link href={`/donation`} className='w-full md:w-min'>
                                    <Button className="h-[50px] w-full px-5 py-3.5 bg-green rounded-[54px] text-white">
                                        <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-inherit text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                            {tf('faire_don_maintenant')}
                                        </span>
                                    </Button>
                                </Link>
                                <Link href={`/contact`} className='w-full md:w-min'>
                                    <Button
                                        variant="outline"
                                        className="h-[50px] w-full px-5 py-3.5 bg-[#f8f8e9] rounded-[54px] border-[#282724]">
                                        <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                            {tf('devenir_partenaire')}
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Right footer card */}
                <Card
                    className="w-full lg:h-[340px] border-none shadow-none lg:rounded-3xl"
                    style={{ backgroundColor: "#eff8e9" }}>
                    <CardContent className="p-0 h-full">
                        <div className="flex flex-col items-start justify-between gap-11 p-10 md:p-20 h-full">
                            <div className="flex flex-col items-start gap-2 w-full ">
                                <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                                    {tf('card_2_titre')}
                                </h3>
                                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {tf('card_2_description')}
                                </p>
                            </div>
                            <Link href={`/contact`} className='w-full md:w-min'>
                                <Button
                                    variant="outline"
                                    className="h-[50px] w-full px-5 py-3.5 bg-[#eff8e9] rounded-[54px] border-[#282724]">
                                    <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                        {tf('devenir_benevole')}
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer navigation */}
            <div className="mt-4 max-width">
                <div className="flex flex-col md:flex-row items-center justify-between py-8">
                    <div className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                        <p className='text-center'>{tf('habilitation_vie')} {(new Date()).getFullYear()} | {tf('copy_right')}</p>
                    </div>
                    {/* Navigation Menu */}
                    <div className="flex flex-wrap items-center justify-center gap-10 my-4 md:my-0">
                        { 
                            navItems.map((item, index) => (
                                <Link key={index} href={item.link} className={`font-['Manrope',Helvetica] text-sm whitespace-nowrap text-black ${item.active ? "font-bold" : "font-normal"}`}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex items-center justify-end">
                        <a href="https://www.facebook.com/profile.php?id=61556166477512" target='_blank' className="w-9 h-9 flex items-center justify-center cursor-pointer">
                            <FacebookIcon className='w-6 h-6'/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer info bar */}
            <div className="h-[50px] border-t border-neutral-200">
                <div className="max-width flex flex-wrap md:flex-row items-center justify-between py-5 bg-[#fcfcf8] gap-4 lg:gap-0">
                    <div className="text-xs">
                        <span className="text-[#282724]">{tf('no_enregistrement')} : </span>
                        <span className="font-bold">75272 2818 RR0001</span>
                    </div>

                    <div className="text-xs">
                        <span className="text-[#282724]">{tf('pour_un_don')} : </span>
                        <span className="font-bold">donation@hforlife-hpourlavie.ca</span>
                    </div>

                    <div className="text-xs">
                        <span className="text-[#282724]">{tf('telephone')} : </span>
                        <span className="font-bold">5068540675 </span>
                        <span className="text-[#282724]">(Canada)</span>
                    </div>

                    <div className="text-xs">
                        <span className="text-[#282724]">{tf('concu_par')} : </span>
                        <a href="https://www.acadieintelligent.ca" target="_blank" rel="noopener noreferrer" className='leading-8 sm:leading-normal '>
                            <span className="font-bold">Acadie Intelligent Inc.</span>
                            <span className="font-bold px-4 py-1 rounded-full border border-gray ml-3 whitespace-nowrap">Nous joindre</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
