import Image from 'next/image'
import React from 'react'

export default function NewsSection() {
    // Data for news articles
    const newsArticlesData = [
        {
            image: "/assets/img/news-3.png",
            title:
                "Groupe de construction de logements abordables pour les mères célibataires et le...",
            source: "TELEGRAPH JOURNAL",
            link: "https://tj.news/moncton-miramichi/group-building-affordable-housing-for-single-moms-senior-women",
        },
        {
            image: "/assets/img/news-2.png",
            title:
                "Don de 25 000$ a Habitation pour la vie par Major Drilling Group International Inc.",
            source: "Major Drilling international",
            link: "https://web.facebook.com/photo/?fbid=122220855830205549&set=g.717736397114724",
        },
        {
            image: "/assets/img/news-1.png",
            title:
                "Logements abordables pour les mères célibataires et les femmes âgées",
            source: "Global news",
            link: "https://globalnews.ca/video/10970883/global-news-at-6-new-brunswick-jan-21-5/",
        },
    ]

    return (
        <div className="flex flex-col w-full max-width items-start gap-6 my-14 md:mb-32">
            <div className="flex items-center justify-between w-full">
                <div className="flex flex-col items-start gap-2 md:w-[390px]">
                    <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        Dernières actualités
                    </h2>
                </div>
                <span className="hidden md:block font-bold text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)] cursor-pointer">
                    Voir toute l&apos;actualité
                </span>
            </div>
            <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden xl:grid-cols-3 gap-4 md:gap-8 w-full h-scroll [&::-webkit-scrollbar]:h-0 pb-6">
                {
                    newsArticlesData.map((article, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] md:min-w-[320px] xl:w-full flex flex-col items-start gap-6">
                            <div className='relative h-80 w-full overflow-hidden rounded-2xl'>
                                <Image
                                    className="object-cover"
                                    alt={article.title}
                                    src={article.image}
                                    fill
                                    priority
                                />
                            </div>
                            <div className="flex flex-col items-start gap-4 w-full">
                                <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                    {article.title}
                                </p>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex-1 font-normal text-sm leading-[14px]">
                                        <span className="text-[#282724] leading-[22.4px]">
                                            Par{" "}
                                        </span>
                                        <span className="font-[number:var(--paragraph-2-font-weight)] text-[#282724] leading-[var(--paragraph-2-line-height)] underline font-paragraph-2 [font-style:var(--paragraph-2-font-style)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                                            {article.source}
                                        </span>
                                    </div>
                                    <div className="flex-1 font-normal text-sm text-right leading-[14px]">
                                        <a
                                            href={article.link}
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            <span className="font-bold leading-[var(--paragraph-2-line-height)] underline font-paragraph-2 [font-style:var(--paragraph-2-font-style)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                                                Consulter
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}