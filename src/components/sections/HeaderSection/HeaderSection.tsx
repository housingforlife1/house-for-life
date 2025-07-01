import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function HeaderSection() {
    const t = useTranslations("about")
    return (
        <header className="relative md:min-h-[calc(90vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-about.png')] bg-cover bg-center pb-7 md:pb-0">
            {/*<div className='absolute z-[4] inset-0 bg-green opacity-10' />*/}
            <div className='max-width pb-10'>
                <div className="flex flex-col md:w-[550px] items-start gap-11 pt-48 -ml-2">
                    <div className="flex flex-col items-start gap-10 w-full">
                        <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-4 leading-8">
                            <span className="[font-family:'Instrument_Sans',Helvetica] text-[#fbfbf8] text-3xl">
                                {t("hero_sous_titre")} : <br />
                            </span>
                            <span className="font-extrabold text-[#FCFCF8] text-4xl">
                                {t("hero_titre")}
                            </span>
                        </div>

                        <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                            {t("hero_description")}
                        </p>
                    </div>

                    <Link href={`/donation`} className='w-full cursor-pointer z-10'>
                        <Button className="h-[50px] w-full md:w-min px-5 py-3.5 bg-green rounded-[54px] hover:bg-green/90">
                            <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                {t("hero_soutenir_mission")}
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
