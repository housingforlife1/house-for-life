import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export default function HomeHeaderSection() {
    const t = useTranslations("home")
  return (
    <header className="relative md:min-h-[calc(90vh)] m-2 rounded-2xl bg-[url('/assets/img/hero-home.png')] bg-cover bg-center flex flex-col justify-between pb-10">
        {/*<div className='absolute z-[4] inset-0 bg-green opacity-10' /> */}
        <div className='max-width'>
            <div className="flex flex-col md:w-[550px] items-start gap-11 pt-48 -ml-2">
                <div className="flex flex-col items-start gap-10 w-full">
                    <div className="w-full [font-family:'Instrument_Sans',Helvetica] font-normal text-white flex flex-col gap-4 leading-8">
                        <Badge className="inline-flex w-min items-center justify-center gap-2.5 py-3 px-4 rounded-full border border-solid border-[#ffffff33] bg-transparent">
                            <span className="font-paragraph-2 text-white whitespace-nowrap">
                                {t("hero_btn_1")}
                            </span>
                        </Badge>
                        <span className="font-extrabold text-[#FCFCF8] text-4xl">{t("hero_titre")}</span>
                    </div>

                    <p className="w-full font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("hero_description")}
                    </p>
                </div>
                <div className="flex flex-col w-full md:w-min md:flex-row items-center gap-5 md:gap-2">
                    <Link href={`/programs`} className='order-1 w-full cursor-pointer'>
                        <Button className="h-[50px] w-full px-5 py-3.5 bg-green rounded-[54px] font-paragraph-bold text-white">
                            {t("hero_btn_2")}
                        </Button>
                    </Link>
                    <Link href={`/donation`} className='md:order-1 w-full cursor-pointer'>
                        <Button
                            variant="outline"
                            className="h-[50px] w-full px-5 py-3.5 rounded-[54px] border border-solid border-[#fbfbf8] bg-transparent font-paragraph-bold text-white cursor-pointer">
                            {t("hero_btn_3")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>

        <div className='hidden md:flex justify-between items-center max-width my-10'>
            <p className='text-[#FCFCF8]'>{t("hero_description_2")}</p>
            <Button className="h-[50px] px-5 py-3.5 bg-white rounded-[54px] hover:bg-green/90">
                <p className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)]  text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                    <span className='font-normal'>{t("adresse")}</span>  <span className='font-bold'>{t("adresse_val")}</span>
                </p>
            </Button>
        </div>
    </header>
  )
}
