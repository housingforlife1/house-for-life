import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <div className="w-full max-width my-14 md:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 w-full">
            <div className="lg:col-span-4 flex flex-col w-full items-start gap-20">
                <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        Notre engagement commence ici.
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        Fondé en 2023 par un groupe de sept bénévoles engagés, Housing
                        for Life est né d&apos;une volonté d&apos;agir concrètement
                        contre la précarité. <br />
                        <br />
                        Face aux défis du logement pour les femmes en situation de
                        vulnérabilité, notre organisme a décidé de s&apos;incorporer
                        auprès de la province du Nouveau-Brunswick pour créer des
                        solutions durables et accessibles.
                    </p>
                </div>

                <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        Notre raison d&apos;être
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        Soulager durablement la pauvreté des femmes seules et de leurs
                        familles dans le Canada Atlantique en leur fournissant des
                        logements abordables, écoénergétiques et adaptés à leurs
                        besoins.
                    </p>
                </div>
            </div>
            <div className='lg:col-span-8 relative h-[580px] lg:h-[680px] overflow-hidden rounded-3xl lg:rounded-[40px]'>
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
