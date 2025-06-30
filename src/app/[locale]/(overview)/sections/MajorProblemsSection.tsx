import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function MajorProblemsSection() {
    const t = useTranslations("home")

    // Data for major problems section
    const majorProblemsData = [
        {
            title: t("problem_data_titre_1"),
            description: t("problem_data_description_1"),
        },
        {
            title: t("problem_data_titre_2"),
            description: t("problem_data_description_2"),
        },
        {
            title: t("problem_data_titre_3"),
            description: t("problem_data_description_3"),
        },
    ];
    return (
        <div className="flex flex-col w-full max-width items-start gap-6 my-14 md:my-32">
            <h2 className="font-heading-2 text-2xl md:text-4xl font-bold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] md:w-2/3 lg:w-2/4">
                {t("problem_titre")}
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
