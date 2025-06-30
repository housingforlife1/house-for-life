import { useTranslations } from "next-intl"
import Image from "next/image"


export default function DonationBenefitsSection() {
    const t= useTranslations("donation")

    // Data for donation benefits
    const donationBenefits = [
        {
            image: "/assets/img/environnement.png",
            description: t('data_description_1')
        },
        {
            image: "/assets/img/our-impact.png",
            description: t('data_description_2')
        },
        {
            image: "/assets/img/offrir-un-loyer.png",
            description: t('data_description_3')
        },
    ]

    return (
        <div className="flex flex-col max-width gap-6 my-14 md:my-32">
            <div className="flex flex-col gap-1 md:max-w-[450px]">
                <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                    {t("benefits_titre")}
                </h2>
                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] [font-style:var(--paragraph-1-font-style)]">
                    {t("benefits_description")}
                </p>
            </div>

            <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden xl:grid-cols-3 gap-4 md:gap-8 w-full v-scroll pb-6">
                {
                    donationBenefits.map((benefit, index) => (
                        <div key={index} className="min-w-[250px] md:min-w-[320px] xl:w-full flex flex-col gap-4 flex-1">
                            <div className="flex flex-col gap-6">
                                <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                                    <Image
                                        className="object-cover"
                                        alt="Benefit illustration"
                                        src={benefit.image}
                                        fill priority
                                    />
                                </div>
                                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}