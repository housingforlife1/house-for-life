import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function PartnersSection() {
    // Partner logos data
    const partnerLogos = [
        {
            src: "/assets/img/partner-2.png",
            alt: "Partner logo",
            width: 109,
            height: 50,
        },
        { 
            src: "/assets/img/partner-1.png", 
            alt: "Partner logo", 
            width: 64, 
            height: 50 
        },
        {
            src: "/assets/img/partner-3.png",
            alt: "Partner logo",
            width: 126,
            height: 50,
        },
        {
            src: "/assets/img/partner-7.png",
            alt: "Partner logo",
            width: 26,
            height: 50,
        },
        { 
            src: "/assets/img/partner-4.png", 
            alt: "Partner logo", 
            width: 65, 
            height: 50 
        },
        {
            src: "/assets/img/partner-5.png",
            alt: "Partner logo",
            width: 139,
            height: 50,
        },
        { 
            src: "/assets/img/partner-6.png", 
            alt: "Partner logo", 
            width: 50, 
            height: 50 
        },
        {
            src: "/assets/img/partner-2.png",
            alt: "Partner logo",
            width: 109,
            height: 50,
        },
        { 
            src: "/assets/img/partner-1.png", 
            alt: "Partner logo", 
            width: 64, 
            height: 50 
        },
        {
            src: "/assets/img/partner-3.png",
            alt: "Partner logo",
            width: 126,
            height: 50,
        },
        {
            src: "/assets/img/partner-2.png",
            alt: "Partner logo",
            width: 109,
            height: 50,
        },
        { 
            src: "/assets/img/partner-1.png", 
            alt: "Partner logo", 
            width: 64, 
            height: 50 
        },
        {
            src: "/assets/img/partner-3.png",
            alt: "Partner logo",
            width: 126,
            height: 50,
        },
    ];
    return (
        <div className="flex flex-col md:flex-row md:justify-between w-full max-width items-start gap-8 my-20 md:my-32">
            <h2 className="w-full md:w-[390.67px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                ils nous soutiennent déjà,  rejoignez-les !
            </h2>
            <div className='w-full md:w-2/3 flex flex-col gap-5'>
                <div className="flex items-center justify-between h-[50px] gap-x-3">
                    <ChevronLeft className='hidden md:block w-6 h-6 text-gray cursor-pointer' />
                    <div className='w-full flex flex-row v-scroll overflow-x-auto'>
                        {
                            partnerLogos.map((logo, index) => (
                                <div key={index} className={`relative shrink-0 h-[${logo.width}px] w-[100px] md:w-[150px]`}>
                                    <Image
                                        className="object-contain"
                                        fill
                                        alt={logo.alt}
                                        src={logo.src}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <ChevronRight className='hidden md:block w-6 h-6 text-gray cursor-pointer' />
                </div>

                <Separator className="bg-gray/20" />

                <div className="flex flex-col gap-2.5">
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    Les particuliers
                    </p>

                    <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        {[...Array(6)].map((_, index) => (
                            <div  key={index} className={`relative w-[35px] h-[35px] md:w-[50px] md:h-[50px] overflow-hidden rounded-full border-2 border-white ${index > 0 ? "ml-[-18px]" : ""}`}>
                                <Image
                                    fill priority 
                                    className={`object-cover `}
                                    alt="Contributor"
                                    src="/assets/img/paulette.png"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <p className="font-paragraph-2 text-[#282724] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                            +24 contributeurs
                        </p>
                        <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                            Actifs
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
