"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function PartnerSliders(){

    // Référence pour le conteneur des logos
    const logoContainerRef = useRef<HTMLDivElement>(null);

    // Fonction pour scroller vers la gauche
    const scrollLeft = () => {
        if (logoContainerRef.current) {
            logoContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    // Fonction pour scroller vers la droite
    const scrollRight = () => {
        if (logoContainerRef.current) {
            logoContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };
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
    ]
    return (
        <div className="flex items-center justify-between h-[50px] gap-x-3">
            <ChevronLeft 
                className='hidden md:block w-6 h-6 text-gray cursor-pointer' 
                onClick={scrollLeft} 
            />
            <div 
                ref={logoContainerRef} 
                className='w-full flex flex-row v-scroll overflow-x-auto'>
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
            <ChevronRight 
                className='hidden md:block w-6 h-6 text-gray cursor-pointer' 
                onClick={scrollRight} 
            />
        </div>
    )
}