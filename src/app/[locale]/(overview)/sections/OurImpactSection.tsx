import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export default function OurImpactSection() {
    const t = useTranslations("home")
    // Data for impact cards
    const impactCardsData = [
        {
            icon: "/assets/icons/building-03.svg",
            title: t("impact_data_titre_1"),
            description: t("impact_data_description_1"),
            bgColor: "bg-[#f8f8e9]",
        },
        {
            icon: "/assets/icons/user-group.png",
            title: t("impact_data_titre_2"),
            description: t("impact_data_description_2"),
            bgColor: "bg-[#f8f8e9]",
        },
        {
            icon: "/assets/icons/vertical-drag-&-drop.png",
            title: t("impact_data_titre_3"),
            description: t("impact_data_description_3"),
            bgColor: "bg-[#eef8e9]",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-8 max-width gap-10 my-16 md:my-32">
            <div className='col-span-full lg:col-span-3 relative h-[380px] lg:h-full rounded-3xl overflow-hidden'>
                <Image
                    className="object-cover"
                    alt="Image"
                    src="/assets/img/our-impact.png"
                    fill priority
                />
            </div>

            <div className="col-span-full lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex flex-col items-start gap-6 lg:gap-8">
                    <div className="flex flex-col items-start gap-2 w-full">
                        <h2 className="font-heading-2 font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                            {t("impact_titre")}
                        </h2>
                        <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                            {t("impact_description")}
                        </p>
                    </div>

                    <Link href={`/programs`} className='w-full'>
                        <Button className="h-[50px] w-full md:w-min mb-4 md:mb-0 px-5 py-3.5 bg-green rounded-[54px] text-white font-paragraph-bold text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                            {t("impact_btn")}
                        </Button>
                    </Link>
                </div>

                {
                    impactCardsData.map((card, index) => (
                        <Card
                            key={index}
                            className={`${card.bgColor} rounded-3xl border-none shadow-none ${index === 0 ? "min-h-[224px]" : "min-h-[240px]"}`}>
                            <CardContent className="flex flex-col gap-6 p-5">
                                <div className='relative w-[34px] h-[34px]'>
                                    <Image
                                        className="object-contain"
                                        alt={card.title}
                                        src={card.icon}
                                        fill
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-2 w-full">
                                    <h4 className="font-heading-4 text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                        {card.title}
                                    </h4>
                                    <p className="font-paragraph-1 text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                        {card.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}
