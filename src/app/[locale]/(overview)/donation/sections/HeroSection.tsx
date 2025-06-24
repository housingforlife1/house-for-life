
export default function HeroSection() {
  return (
    <header className="relative h-[calc(75vh)] m-2 rounded-2xl bg-transparent bg-[url('/assets/img/hero-img-news.png')] bg-cover bg-center">
        <div className='absolute z-[4] inset-0 bg-green opacity-10' />
        <div className='max-width'>
            <div className="flex flex-col w-1/3 items-start gap-11 pt-56 pl-[90px] z-10">
                <div className="flex flex-col items-start gap-10 w-full">
                    <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white text-[32px] flex flex-col gap-4 leading-8">
                    <h1>
                            <span className="font-extrabold text-[#FCFCF8] text-4xl">
                                Un toit pour elles : Faites un don, changez une vie.
                            </span>
                    </h1>
                    </div>

                    <p className=" font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        Aidez-nous à financer la construction de logements abordables pour des femmes et mères monoparentales en situation précaire.
                    </p>
                </div>
            </div>
        </div>
    </header>
  )
}
