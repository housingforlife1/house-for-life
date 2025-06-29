import { useTranslations } from "next-intl"

export default function FundraisingCampaignSection() {
    const t = useTranslations("donation")
    return (
        <div className="flex flex-col max-width gap-7 md:gap-10 my-16 md:my-32">
            <div className="flex flex-col gap-2 w-full">
                <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] max-w-[390px]">
                    {t("fundraising_titre")}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)] max-w-[390px]">
                    {t("fundraising_p1")}
                    </p>

                    <div className="flex-1">
                        <p className="font-paragraph-1 text-base leading-4">
                            <span className="text-[#282724] font-bold">{t("fundraising_p2")}</span>
                            <span className="text-[#504f48] leading-[25.6px]">
                            {" "}
                            {t("fundraising_p3")}
                            </span>
                        </p>
                    </div>

                    <div className="flex-1">
                        <p className="font-paragraph-1 text-base leading-4">
                            <span className="text-[#282724] font-bold">{t("fundraising_p4")}</span>
                            <span className="text-[#504f48] leading-[25.6px]">
                            {" "}
                            {t("fundraising_p5")}
                            <br />
                            <br />
                            {t("fundraising_p6")}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
}