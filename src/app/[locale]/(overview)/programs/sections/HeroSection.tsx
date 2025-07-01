import React from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export default function HeroSection() {
    const t = useTranslations("programs")
  return (
    <header className="relative md:min-h-[calc(90vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-img-programs.png')] bg-cover bg-center pb-10">
        <div className='absolute z-[4] inset-0 bg-green opacity-10' />
        <div className='max-width z-[5] absolute inset-0'>
            <div className="flex flex-col md:w-2/3 lg:w-[550px] items-start gap-11 pt-48 z-10 -ml-2">
                <div className="flex flex-col items-start gap-6 md:gap-10 w-full">
                    <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-4 leading-8">
                        <h1 className="font-extrabold text-[#FCFCF8] text-4xl">
                            {t("hero_titre")}
                        </h1>
                    </div>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("hero_description")}
                    </p>
                </div>
                <Link href={'/contact'} className='w-full md:w-min'>
                    <Button className="h-[50px] z-10 px-5 py-3.5 bg-green rounded-[54px] hover:bg-green/90 cursor-pointer">
                        <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                            {t("hero_btn")}
                        </span>
                    </Button>
                </Link>
            </div>
        </div>
    </header>
  )
}
