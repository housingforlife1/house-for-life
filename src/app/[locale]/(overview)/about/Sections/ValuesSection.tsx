import Image from 'next/image'
import React from 'react'

export default function ValuesSection() {
// Organization values data
  const values = [
    {
      icon: "/assets/icons/user-group.png",
      title: "Solidarité",
      description:
        "Parce que personne ne devrait être seul face à la précarité.",
    },
    {
      icon: "/assets/icons/agreement-01.png",
      title: "Inclusion",
      description: "Créer une communauté où chacune trouve sa place.",
    },
    {
      icon: "/assets/icons/crown.png",
      title: "Respect & dignité",
      description:
        "Offrir plus qu'un logement : un environnement bienveillant.",
    },
    {
      icon: "/assets/icons/star.png",
      title: "Transparence",
      description: "Gérer nos ressources avec intégrité et engagement.",
    },
  ]

  return (
    <div className="flex flex-col w-full max-width items-start gap-9 my-32">
        <div className="w-full max-w-[390.67px]">
          <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            Nos valeurs
          </h2>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-start gap-8 w-full">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start gap-4 flex-1">
                <div className='relative w-[34px] h-[34px]'>
                    <Image
                      className="object-contain"
                      alt={value.title}
                      src={value.icon}
                      fill
                    />
                </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                  {value.title}
                </h4>
                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
    )
}
