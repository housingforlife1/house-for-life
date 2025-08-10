import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function MissionSection() {

    const t = useTranslations("home")
    const ta = useTranslations("about")

    // Data for support options
    const supportOptionsData = [
        {
            icon: "/assets/icons/favourite.png",
            background: "#f8f8e9",
            title: ta("support_data_titre_1"),
            description: ta("support_data_description_1"),
            action: ta("support_data_action_1"),
        },
        {
            icon: "/assets/icons/agreement-01.png",
            background: "#eff8e9",
            title: ta("support_data_titre_2"),
            description: ta("support_data_description_2"),
            action: ta("support_data_action_2"),
        },
        {
            icon: "/assets/icons/star.png",
            background: "#f8f8e9",
            title: ta("support_data_titre_3"),
            description: ta("support_data_description_3"),
            action: ta("support_data_action_3"),
        },
    ];

    // Data for testimonials
    const testimonialsData = [
        {
            quote: t("quote_1"),
            author: t("author_1"),
        },
        {
            quote: t("quote_2"),
            author: t("author_2"),
        },
        {
            quote: t("quote_3"),
            author: t("author_3"),
        },
    ];

    return (
        <div className="py-24 md:py-32 bg-[#f8f8e9] w-full my-16 md:my-32">
            <div className='flex flex-col items-start gap-20 md:gap-32 max-width'>

                {/* Mission Statement */}
                <div className="grid grid-cols-12 w-full sm:gap-8">
                    <div className="order-2 md:order-1 col-span-full md:col-span-5 lg:col-span-4 flex flex-col items-start gap-11">
                        <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex flex-col items-start gap-2 w-full">
                                <span className="font-paragraph-2 text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                    {t("mission_titre_1")}
                                </span>
                                <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                                    {t("mission_titre_2")}
                                </h2>
                            </div>
                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                {t("mission_p_1")}
                            </p>
                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                {t("mission_p_2")}
                            </p>
                        </div>
                        <Link href={`/donation`} className='w-full cursor-pointer'>
                            <Button className="h-[50px] w-full md:w-min px-5 py-3.5 bg-green rounded-[54px] text-white font-paragraph-bold text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                {t("soutenir_mission")}
                            </Button>
                        </Link>
                    </div>
                    <div className='hidden lg:block lg:order-2 col-span-3 relative min-h-[448px] rounded-2xl overflow-hidden'>
                        <Image
                            className="object-cover"
                            alt="Image"
                            src="/assets/img/mission-img-1.png"
                            fill priority
                        />
                    </div>
                    <div className='order-1 md:order-3 col-span-full md:col-span-7 lg:col-span-5 relative min-h-[448px] rounded-2xl overflow-hidden mb-8 sm:mb-0'>
                        <Image
                            className="object-cover"
                            alt="Image"
                            src="/assets/img/mission-img-2.png"
                            fill priority
                        />
                    </div>
                </div>

                {/* Support Section */}
                <div className="flex flex-col w-full items-start gap-8">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                            {t("support_titre")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full">
                            <div className="flex flex-col items-start gap-4">
                                <p className="font-paragraph-1 text-gray text-base leading-[25.6px]">
                                    {t("support_p_1")}
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {t("support_p_2")}
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {t("support_p_3")}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
                        {
                            supportOptionsData.map((option, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-col items-start justify-between shadow-none p-5 bg-white rounded-3xl h-full border-none">
                                    <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
                                        <div className="w-[60px] h-[60px] bg-white rounded-[40px] flex items-center justify-center">
                                            <div className='relative w-[34px] h-[34px]'>
                                                <Image
                                                    className="object-contain"
                                                    alt={option.title}
                                                    src={option.icon}
                                                    fill
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-2 w-full">
                                            <h4 className="font-extrabold text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                                {option.title}
                                            </h4>
                                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                            {option.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <div className="w-full h-[37px] mt-3 md:mt-5 bg-[#fcfcf8] border-t border-neutral-200">
                                        <Link href={'/contact'} className="w-full h-9">
                                            <div className="flex items-center justify-between w-full mt-[17px]">
                                            <span className="font-paragraph-bold text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)] cursor-pointer">
                                                {option.action}
                                            </span>
                                            <ChevronRight className="w-[18px] h-[18px]" />
                                            </div>
                                        </Link>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>

                {/* Testimonials Section 
                <div className="flex flex-col items-start gap-4 w-full">
                    <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        {t("testimonial_titre")}
                    </h2>
                    <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden xl:grid-cols-3 gap-4 md:gap-8 w-full h-scroll [&::-webkit-scrollbar]:h-0 pb-6">
                        {
                            testimonialsData.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="min-w-[250px] md:min-w-[320px] xl:w-full flex flex-col items-start gap-4">
                                    <p className="font-paragraph-1 text-gray text-base leading-4">
                                        <span className="leading-[var(--paragraph-1-line-height)] font-paragraph-1 [font-style:var(--paragraph-1-font-style)] font-[number:var(--paragraph-1-font-weight)] tracking-[var(--paragraph-1-letter-spacing)] text-[length:var(--paragraph-1-font-size)]">
                                            {testimonial.quote}
                                            <br />
                                        </span>
                                        <span className="font-bold [font-style:var(--paragraph-bold-font-style)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] text-[length:var(--paragraph-bold-font-size)]">
                                            <br />
                                            {testimonial.author}
                                        </span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                */}
            </div>
        </div>
    )
}
