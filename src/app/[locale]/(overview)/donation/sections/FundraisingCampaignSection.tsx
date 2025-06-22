
export default function FundraisingCampaignSection() {
    return (
        <div className="flex flex-col max-width gap-[41px] my-32">
            <div className="flex flex-col gap-2 w-full">
                <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] max-w-[390px]">
                    Nous y mettons du serieux
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)] max-w-[390px]">
                        Un cabinet de sollicitation de fonds a été créé afin d&apos;appui
                        financièrement le projet Habitation pour la Vie. Ce cabinet vise
                        deux objectifs :
                    </p>

                    <div className="flex-1">
                        <p className="font-paragraph-1 text-base leading-4">
                            <span className="text-[#282724] font-bold">Le premier objectif</span>
                            <span className="text-[#504f48] leading-[25.6px]">
                            {" "}
                            consiste à collecter des fonds d&#39;un montant de 700 000 $
                            pour construire ce projet d&#39;habitation ainsi que
                            d&apos;accéder à des matériaux avec des prix compétitives.
                            </span>
                        </p>
                    </div>

                    <div className="flex-1">
                        <p className="font-paragraph-1 text-base leading-4">
                            <span className="text-[#282724] font-bold">Le deuxième objectif</span>
                            <span className="text-[#504f48] leading-[25.6px]">
                            {" "}
                            est de créer et consolider des relations à long terme avec
                            tous les donateurs afin qu&#39;ils continuent à
                            contribuer/participer aux projets futurs.
                            <br />
                            <br />
                            Chronologie : Printemps 2024 – Printemps 2025
                            </span>
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
}