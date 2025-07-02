import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'

export default function SupportOptionSection() {
    const t = useTranslations("about")
    // Support options data
    const supportOptions = [
        {
            icon: "/assets/icons/favourite.png",
            background: "#f8f8e9",
            title: t("support_data_titre_1"),
            description: t("support_data_description_1"),
            action: t("support_data_action_1"),
        },
        {
            icon: "/assets/icons/agreement-01.png",
            background: "#eff8e9",
            title: t("support_data_titre_2"),
            description: t("support_data_description_2"),
            action: t("support_data_action_2"),
        },
        {
            icon: "/assets/icons/star.png",
            background: "#f8f8e9",
            title: t("support_data_titre_3"),
            description: t("support_data_description_3"),
            action: t("support_data_action_3"),
        },
    ];
    
    return (
        <div className="flex flex-col w-full max-width items-start gap-4 md:gap-10 my-32">
            <div className="flex flex-col items-start gap-[34px]">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="w-full max-w-[430px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        {t("support_titre")}
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("support_description")}
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
                            <Link href={'/contact'} className="flex items-center justify-between w-full">
                                <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                    {option.action}
                                </span>
                                <ChevronRight className='w-6 h-6 text-gray' />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            ))}
            </div>
        </div>
    )
}
