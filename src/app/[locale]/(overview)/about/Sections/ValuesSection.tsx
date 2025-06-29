import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

export default function ValuesSection() {
  const t = useTranslations("about")

// Organization values data
  const values = [
    {
      icon: "/assets/icons/user-group.png",
      title: t("data_titre_1"),
      description: t("data_description_1"),
    },
    {
      icon: "/assets/icons/agreement-01.png",
      title: t("data_titre_2"),
      description: t("data_description_2"),
    },
    {
      icon: "/assets/icons/crown.png",
      title: t("data_titre_3"),
      description: t("data_description_3"),
    },
    {
      icon: "/assets/icons/star.png",
      title: t("data_titre_4"),
      description: t("data_description_4"),
    },
  ]

  return (
    <div className="flex flex-col w-full max-width items-start gap-9 my-14 md:my-32">
        <div className="w-full max-w-[390.67px]">
          <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            {t("valeur_titre")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {
            values.map((value, index) => (
              <div key={index} className="w-full flex flex-col items-start gap-4 border-b border-blue-100 md:border-none pb-8 md:pb-0">
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
            ))
          }
        </div>
    </div>
    )
}
