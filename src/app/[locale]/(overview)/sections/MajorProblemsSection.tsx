import Image from 'next/image';

export default function MajorProblemsSection() {

    // Data for major problems section
    const majorProblemsData = [
        {
            title: "Femmes seules et pauvreté : une inégalité criante",
            description:
            "En 2021, 2 675 femmes seules à Moncton vivaient sous le seuil de la pauvreté, révélant des défis économiques importants.",
        },
        {
            title: "Pauvreté des mères célibataires : un défi urgent",
            description:
                "En 2021, 1 263 mères célibataires à Moncton vivaient dans la pauvreté, soulignant leur vulnérabilité économique.",
        },
        {
            title: "Crise du logement : pénurie de logements subventionnés",
            description:
                "Avec seulement 981 logements subventionnés et une liste d'attente de 2 732 en 2022, la crise du logement dans le Sud-Est est alarmante.",
        },
    ];
    return (
        <div className="flex flex-col w-full max-width items-start gap-6 my-14 md:my-32">
            <h2 className="font-heading-2 text-2xl md:text-4xl font-bold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] md:w-1/2 lg:w-1/4">
                Problèmes majeurs à Moncton et dans le Sud-Est
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {majorProblemsData.map((problem, index) => (
                    <div key={index} className="flex flex-col items-start gap-4">
                        <div className="w-[50px] h-[50px] bg-[#f8f8e9] relative rounded-[25px] flex items-center justify-center">
                            <Image 
                                className="w-5 h-5"
                                width={20}
                                height={20}
                                src={`/assets/icons/cancel-02.png`}
                                alt='Croix'
                            />
                        </div>

                        <div className="flex flex-col items-start gap-2.5">
                            <h4 className="w-full font-heading-4 text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                {problem.title}
                            </h4>
                            <p className="w-full font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                {problem.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
