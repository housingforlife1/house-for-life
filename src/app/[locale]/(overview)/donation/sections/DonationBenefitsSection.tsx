import Image from "next/image"


export default function DonationBenefitsSection() {

    // Data for donation benefits
    const donationBenefits = [
        {
            image: "/assets/img/environnement.png",
            description: "Construire un immeuble de 15 logements abordables à Moncton.",
        },
        {
            image: "/assets/img/our-impact.png",
            description:
            "Accompagner les bénéficiaires vers une autonomie durable avec un soutien social.",
        },
        {
            image: "/assets/img/offrir-un-loyer.png",
            description:
            "Offrir un loyer 70 % inférieur au marché grâce à des subventions.",
        },
    ]

    return (
        <div className="flex flex-col max-width gap-6 my-32">
            <div className="flex flex-col gap-1 max-w-[450px]">
            <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                Chaque don construit un avenir.
            </h2>
            <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] [font-style:var(--paragraph-1-font-style)]">
                Grace à votre générosité et votre don, vous permettez de :
            </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {donationBenefits.map((benefit, index) => (
                <div key={index} className="flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-6">
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                        <Image
                            className="object-cover"
                            alt="Benefit illustration"
                            src={benefit.image}
                            fill priority
                        />
                    </div>
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    {benefit.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
    )
}