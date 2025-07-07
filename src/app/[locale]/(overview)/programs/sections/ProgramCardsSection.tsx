import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProgramCardsSection() {
    const t = useTranslations("programs")
    // Program cards data
    const programCards = [
        {
            id: 1,
            image: "/assets/img/logement.png",
            title:  t("data_titre_1"),
            description: t("data_description_1"),
            details: [
                t("data_1_details_1"),
                t("data_1_details_2"),
                t("data_1_details_3"),
            ],
            buttonText: t("data_btn_1"),
            link: "/contact",
        },
        {
            id: 2,
            image: "/assets/img/soutien.png",
            title: t("data_titre_2"),
            description: t("data_description_2"),
            details: [
                t("data_1_details_4"),
                t("data_1_details_5"),
                t("data_1_details_6"),
                t("data_1_details_7"),
            ],
            buttonText: t("data_btn_2"),
            link: "/contact",
        },
        {
            id: 3,
            image: "/assets/img/environnement.png",
            title: t("data_titre_3"),
            description: t("data_description_3"),
            details: [
                t("data_1_details_8"),
                t("data_1_details_9"),
                t("data_1_details_10"),
            ],
            buttonText: t("data_btn_3"),
            link: "",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-width my-20 md:my-32">
        {programCards.map((program) => (
          <Card
            key={program.id}
            className="flex flex-col w-full border-none shadow-none">
            <CardContent className="p-0 space-y-6">
                <div className="relative w-full h-[392px] rounded-2xl overflow-hidden">
                    <Image
                        className="object-cover"
                        alt="Program illustration"
                        src={program.image}
                        fill priority
                    />
                </div>
                <div className="flex flex-col items-start gap-[34px]">
                    <div className="space-y-2">
                    <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                        {program.title}
                    </h3>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {program.description}
                    </p>
                    </div>
                </div>

                <Separator className="w-full" />

                <div className="flex flex-col items-start gap-[34px]">
                    <div className="space-y-2">
                    <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                        {t("details_programs")}
                    </h4>
                    {
                        program.details.map((detail, index) => (
                            <p
                                key={index}
                                className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                {detail}
                            </p>
                        ))
                    }
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-0 mt-6">
                <Link className="w-full inline-block" href={program.link}>
                    <Button className="w-full h-[50px] bg-green rounded-[54px] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                        {program.buttonText}
                    </Button>
                </Link>
            </CardFooter>
          </Card>
        ))}
    </div>
    )
}