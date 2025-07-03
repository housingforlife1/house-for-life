import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PartnerSliders from '../../../../../components/sections/PartnerSliders';

export default function PartnersSection() {
    const t = useTranslations("donation");
    
    return (
        <div className="flex flex-col md:flex-row md:justify-between w-full max-width items-start gap-8 my-20 md:my-32">
            <h2 className="w-full md:w-[390.67px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                {t("partner_titre")}
            </h2>
            <div className='w-full md:w-2/3 flex flex-col gap-5'>
                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    {t("entreprises")}
                </p>
                <PartnerSliders />

                <Separator className="bg-black opacity-15" />

                <div className="flex flex-col gap-2.5">
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("particuliers")}
                    </p>

                    <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        {[...Array(6)].map((_, index) => (
                            <div  key={index} className={`relative w-[35px] h-[35px] md:w-[50px] md:h-[50px] overflow-hidden rounded-full border-2 border-white ${index > 0 ? "ml-[-18px]" : ""}`}>
                                <Image
                                    fill priority 
                                    className={`object-cover `}
                                    alt="Contributor"
                                    src="/assets/img/paulette.png"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        <p className="font-paragraph-2 text-[#282724] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                            +24 {t("contributeurs")}
                        </p>
                        <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                            {t("actifs")}
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


