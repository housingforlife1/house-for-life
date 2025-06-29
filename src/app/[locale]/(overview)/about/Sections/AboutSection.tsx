import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
    const t = useTranslations("about")
  return (
    <div className="w-full max-width my-14 md:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 w-full">
            <div className="lg:col-span-4 flex flex-col w-full items-start gap-10 md:gap-20">
                <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        {t("about_titre_1")}
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("about_description_1")} <br />
                        <br />
                        {t("about_description_2")}
                    </p>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        {t("about_titre_2")}
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("about_description_3")}
                    </p>
                </div>
            </div>
            <div className='lg:col-span-8 relative min-h-[380px] lg:h-[680px] overflow-hidden rounded-3xl lg:rounded-[40px]'>
                <Image
                    src="/assets/img/rectangle-651.png"
                    alt="Abut image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    </div>
  )
}
