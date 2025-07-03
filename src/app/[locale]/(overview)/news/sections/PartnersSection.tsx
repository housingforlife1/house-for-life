import { useTranslations } from 'next-intl';
import PartnerSliders from '../../../../../components/sections/PartnerSliders';

export default function PartnersSection() {
    const t = useTranslations("news")
    
    return (
        <div className="flex flex-col md:flex-row md:justify-between max-width items-center gap-8 my-14 md:my-32">
            <h2 className="w-full md:w-[390.67px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                {t('partener_titre')}
            </h2>
            <div className='w-full md:w-2/3 '>
                <PartnerSliders />
            </div>
        </div>
    )
}
