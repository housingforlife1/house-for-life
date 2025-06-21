import React from 'react'
import { Button } from '@/components/ui/button'

export default function HomeHeaderSection() {
  return (
    <header className="relative h-[calc(85vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-home.png')] bg-cover bg-center flex flex-col justify-between">
        <div className='absolute z-[4] inset-0 bg-green opacity-10' />
        
        <div className="flex flex-col w-[550px] items-start gap-11 pt-48 pl-[90px] z-10">
            <div className="flex flex-col items-start gap-10 w-full">
                <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white flex flex-col gap-4 leading-8">
                    <p className='w-min px-4 py-1 rounded-full text-[#FCFCF8] border border-[#FCFCF8] whitespace-nowrap'>Changer des vies, un logement à la fois</p>
                    <span className="font-extrabold text-[#FCFCF8] text-4xl">Un logement pour les femmes et mères monoparentales du Nouveau-Brunswick</span>
                </div>

                <p className="w-[550px] font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                Habitation pour la vie construit des logements sécuritaires et abordables pour créer un avenir meilleur pour les femmes et les familles monoparentales en situation de précarité.
                </p>
            </div>
            <div className='flex flex-row gap-4'>
                <Button className="h-[50px] px-5 py-3.5 bg-green rounded-[54px] hover:bg-green/90">
                    <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                    Voir nos programmes
                    </span>
                </Button>
                <Button className="h-[50px] px-5 py-3.5 bg-transparent border-2 border-white rounded-[54px] hover:bg-green/90">
                    <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                        Faire un don
                    </span>
                </Button>
            </div>
        </div>

        <div className='flex justify-between items-center max-width my-10'>
            <p className='text-[#FCFCF8]'>Fondé en 2023 par un groupe de 7 bénévoles</p>
            <Button className="h-[50px] px-5 py-3.5 bg-white rounded-[54px] hover:bg-green/90">
                <p className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                    <span className='font-normal'>Addresse</span>  <span className='font-bold'>305, avenue Dominion, Moncton</span>
                </p>
            </Button>
        </div>
    </header>
  )
}
