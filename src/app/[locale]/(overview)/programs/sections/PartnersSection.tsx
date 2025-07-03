import { useTranslations } from 'next-intl';
import PartnerSliders from '../../../../../components/sections/PartnerSliders';

export default function PartnersSection() {
    const t = useTranslations("programs")
   
    return (
        <div className="flex flex-col md:flex-row md:justify-between max-width overflow-hidden md:items-center gap-8 my-14 md:my-32">
            <div className="flex flex-col items-start gap-2.5 ">
                <h2 className="font-heading-2 font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] whitespace-nowrap [font-style:var(--heading-2-font-style)]">
                    {t("partner_titre")}
                </h2>
                <p className="md:w-[390px] font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    {t("partner_description")}
                </p>
            </div>
            <div className='min-w-[280px]'>
                <PartnerSliders />
            </div>
        </div>
    )
}
