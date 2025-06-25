import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export default function SupportOptionSection() {
    // Support options data
    const supportOptions = [
        {
            icon: "/assets/icons/favourite.png",
            background: "#f8f8e9",
            title: "Faire un don",
            description:
                "Votre contribution financière nous aide à construire et entretenir des logements abordables. Chaque dollar compte.",
            action: "Donner maintenant",
        },
        {
            icon: "/assets/icons/agreement-01.png",
            background: "#eff8e9",
            title: "Partenariats",
            description:
                "Les entreprises et organisations peuvent s'associer à notre mission par des dons, du mécénat de compétences ou des partenariats stratégiques.",
            action: "Devenir partenaire",
        },
        {
            icon: "/assets/icons/star.png",
            background: "#f8f8e9",
            title: "Devenir bénévole",
            description:
                "Mettez vos compétences et votre temps au service de notre mission. Rejoignez notre équipe de bénévoles dévoués.",
            action: "Rejoindre l'équipe",
        },
    ];
    
    return (
        <div className="flex flex-col w-full max-width items-start gap-4 md:gap-10 my-32">
            <div className="flex flex-col items-start gap-[34px]">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="w-full max-w-[430px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        Agissez avec nous pour offrir un toit à celles qui en ont besoin.
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        Habitation pour la vie est géré par un conseil
                        d&apos;administration impliqué qui se réunit chaque mois pour
                        planifier les actions et suivre les projets.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-between gap-4 w-full">
            {supportOptions.map((option, index) => (
                <Card
                    key={index}
                    // className="w-full md:w-[390.67px] border-none shadow-none"
                    className="border-none shadow-none"
                    style={{ backgroundColor: option.background }}>
                    <CardContent className="flex flex-col items-start justify-between h-[340px] p-5">
                        <div className="flex flex-col items-start gap-6 w-full">
                            <div
                                className="relative w-[35px] h-[35px] flex items-center justify-center"
                                style={{ backgroundColor: option.background }}>
                                <Image
                                    className="object-contain"
                                    alt={option.title}
                                    src={option.icon}
                                    fill
                                />
                            </div>
                            <div className="flex flex-col items-start gap-2 w-full">
                                <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                    {option.title}
                                </h4>
                                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {option.description}
                                </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <Separator className="mb-4" />
                            <div className="flex items-center justify-between w-full">
                                <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                    {option.action}
                                </span>
                                <ChevronRight className='w-6 h-6 text-gray' />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>
    )
}
