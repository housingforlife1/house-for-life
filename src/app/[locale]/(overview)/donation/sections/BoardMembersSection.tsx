import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function BoardMembersSection(){

    const t = useTranslations("donation")
    const ta = useTranslations("about")

    // Data for board members
    const boardMembers = [
        {
            image: "/assets/img/paulette.png",
            name: "Paulette Dionne",
            role: ta("member_vice_presidente"),
        },
        {
            image: "/assets/img/isabelle.jpeg",
            name: "Isabelle Lavoie",
            role: ta("member_vice_presidente"),
        },
        {
            image: "/assets/img/aurea.png",
            name: "Auréa Cormier",
            role: ta("member_secretaire"),
        },
        {
            image: "/assets/img/alphonse.png",
            name: "Alphonse Dionne",
            role: ta("member_president"),
            //role: ta("member_coordination_administratif"),
        },
        {
            image: "/assets/img/marie.png",
            name: "Marie-Éva Gaudet",
            role: ta("member_ca"),
        },
        {
            image: "/assets/img/lujan.png",
            name: "Lujan Saintil",
            role: ta("member_ca"),
        },
        {
            image: "/assets/img/nicolas.png",
            name: "Nicolas Kalgora",
            role: ta("member_ca"),
        },
    ];
    return (
        <div className="flex flex-col max-width gap-6 my-14 md:mb-32">
            <div className="w-full md:w-1/2 lg:max-w-[450px]">
                <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        {t("member_titre")}
                    </h2>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                        {t("member_description")}
                    </p>
                </div>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
            {/**
                <div className="flex flex-row flex-nowrap justify-between overflow-x-scroll v-scroll items-start gap-4 w-full">
             */}
                { 
                    boardMembers.map((member, index) => (
                        <Card
                            key={index}
                            className="border-none shadow-none shrink-0"
                            //className="border-none shadow-none w-[295px] shrink-0"
                            >
                            <CardContent className="p-0 flex flex-col items-start gap-4">
                                <div className='relative w-full h-[200px] rounded-xl overflow-hidden'>
                                    <Image
                                        className="w-full h-[200px] object-cover "
                                        alt={member.name}
                                        src={member.image}
                                        fill
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col items-start w-full">
                                    <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                        {member.name}
                                    </h4>
                                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                        {member.role}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
      </div>
    )
}