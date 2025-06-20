import React from 'react'
import { Button } from '@/components/ui/button'

export default function HeaderSection() {
  return (
    <header className="relative h-[calc(75vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-about.png')] bg-cover bg-center">
        <div className='absolute z-[4] inset-0 bg-green opacity-10' />
        <div className="flex flex-col w-[550px] items-start gap-11 pt-48 pl-[90px] z-10">
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-6 leading-8">
                    <span className="[font-family:'Instrument_Sans',Helvetica] font-normal text-[#fbfbf8] text-[32px]">
                        Un logement, une opportunité : <br />
                    </span>
                    <span className="font-bold text-[#FCFCF8] text-4xl">
                        Ensemble, construisons un avenir meilleu
                    </span>
                </div>

                <p className="w-[550px] font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    Habitation pour la vie est un organisme à but non lucratif qui offre
                    des logements abordables et un cadre de vie stable aux femmes en
                    situation de précarité.
                </p>
            </div>

            <Button className="h-[50px] px-5 py-3.5 bg-green rounded-[54px] hover:bg-green/90">
                <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                    Soutenir la mission
                </span>
            </Button>
        </div>
    </header>
  )
}
