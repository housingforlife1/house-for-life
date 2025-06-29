import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
    const t = useTranslations("donation")
  return (
    <header className="relative md:min-h-[calc(75vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-img-news.png')] bg-cover bg-center pb-8 md:p-0">
        <div className='absolute z-[4] inset-0 bg-green opacity-10' />
        <div className='max-width '>
            <div className="flex flex-col md:w-1/2 lg:w-1/3 items-start gap-11 pt-36 md:pt-56 z-10">
                <div className="flex flex-col items-start gap-10 w-full">
                    <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-4 leading-8">
                        <h1 className="font-extrabold text-[#FCFCF8] text-4xl">
                            {t("hero_titre")}
                        </h1>
                    </div>
                    <p className=" font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("hero_description")}
                    </p>
                </div>
            </div>
            <div className="md:absolute bottom-0 left-0 right-0 translate-y-16 md:translate-y-12 lg:translate-y-8 md:max-width flex justify-end items-end">
                <div className="h-[320px] sm:h-[380px] md:h-[461px] flex gap-3 md:gap-6 ">
                    <div className="h-full flex flex-col justify-end">
                        <div className="h-[240px] sm:h-[280px] md:h-[300px] lg:h-[351px] w-[135px] sm:w-[180px] md:w-[200px] lg:w-[216px] relative overflow-hidden rounded-3xl">
                            <Image
                                alt="Image d'une mère et sa fille"
                                src={'/assets/img/don-img-1.png'}
                                className="object-cover"
                                fill priority
                            />
                        </div>
                    </div>
                    <div className="h-[240px] sm:h-[280px] md:h-[300px] lg:h-[351px] w-[160px] sm:w-[210px] md:w-[250px] lg:w-[285px] relative overflow-hidden rounded-3xl">
                        <Image
                            alt="Image d'une mère et sa fille"
                            src={'/assets/img/don-img-2.png'}
                            className="object-cover"
                            fill priority
                        />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
