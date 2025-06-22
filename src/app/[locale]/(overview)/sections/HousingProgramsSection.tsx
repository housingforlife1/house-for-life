import Image from 'next/image';
import React from 'react'

export default function HousingProgramsSection() {

    // Data for housing programs
    const housingProgramsData = [
        {
        image: "/assets/img/logement.png",
        title: "Logements abordables",
        description:
            "Des appartements à loyer modéré adaptés aux besoins des femmes et familles monoparentales.",
        },
        {
        image: "/assets/img/soutien.png",
        title: "Soutien communautaire",
        description:
            "Un accompagnement personnalisé pour favoriser l'autonomie et le bien-être à long terme.",
        },
        {
        image: "/assets/img/environnement.png",
        title: "Environnement sécuritaire",
        description:
            "Des logements conçus pour offrir sécurité et tranquillité d'esprit.",
        },
    ];
    return (
        <div className="flex flex-col w-full max-width items-start gap-6">
            <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start gap-2 w-[390px]">
                <h2 className="font-heading-2 font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                Nos programmes de logement
                </h2>
                <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                L'attribution des logements est réservée aux personnes en
                situation de grande précarité.
                </p>
            </div>
            <span className="font-bold text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)] cursor-pointer">
                Explorer tous nos programmes
            </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            { housingProgramsData.map((program, index) => (
                <div
                    key={index}
                    className="flex flex-col  items-start gap-4">
                    <div className="flex flex-col items-start gap-6 w-full">
                        <div className='relative h-80 w-full rounded-2xl overflow-hidden'>
                            <Image
                                className="object-cover"
                                alt={program.title}
                                src={program.image}
                                fill
                                priority
                            />
                        </div>
                        <div className="flex flex-col items-start gap-2 w-full">
                            <h4 className="font-heading-4 text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                {program.title}
                            </h4>
                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                {program.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
