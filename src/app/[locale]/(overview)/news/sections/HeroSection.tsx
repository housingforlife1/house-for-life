import { useTranslations } from "next-intl"

export default function HeroSection() {
    const t = useTranslations("news")
    return (
        <header className="relative md:min-h-[calc(85vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-img-news.png')] bg-cover bg-center pb-7 mb:pb-0">
            <div className='absolute z-[4] inset-0 bg-green opacity-10' />
            <div className='max-width z-10 absolute inset-0'>
                <div className="flex flex-col md:w-2/3 lg:w-1/3 items-start gap-11 pt-56 z-10">
                    <div className="flex flex-col items-start gap-10 w-full">
                        <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-4 leading-8">
                            <h1 className="font-extrabold text-[#FCFCF8] text-4xl">
                                {t("hero_titre")}
                            </h1>
                        </div>
                        <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                            {t("hero_description")}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
