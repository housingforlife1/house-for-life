import React from 'react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <header className="relative md:h-[calc(75vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-img-programs.png')] bg-cover bg-center pb-7 md:pb-0">
        <div className='absolute z-[4] inset-0 bg-green opacity-10' />
        <div className='max-width'>
            <div className="flex flex-col md:w-2/3 lg:w-1/3 items-start gap-11 pt-48 z-10">
                <div className="flex flex-col items-start gap-6 md:gap-10 w-full">
                    <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-4 leading-8">
                        <h1 className="font-extrabold text-[#FCFCF8] text-4xl">
                            Des logements, un avenir : Découvrez nos programmes de soutien.
                        </h1>
                    </div>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        Nous offrons bien plus qu&apos;un toit. Nos programmes sont conçus pour aider les femmes et les mères monoparentales à retrouver stabilité et autonomie.
                    </p>
                </div>

                <Button className="h-[50px] w-full md:w-min px-5 py-3.5 bg-green rounded-[54px] hover:bg-green/90">
                    <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                        Faire une demande de logement
                    </span>
                </Button>
            </div>
        </div>
    </header>
  )
}
