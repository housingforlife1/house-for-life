import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function ProgramCardsSection() {
    // Program cards data
    const programCards = [
        {
            id: 1,
            image: "/assets/img/logement.png",
            title: "Un logement stable, un nouveau départ.",
            description:
                "Nous offrons des logements sécurisés et écoénergétiques à des femmes et mères en situation précaire. Grâce aux subventions gouvernementales, nos loyers sont 70% inférieurs aux prix du marché.",
            details: [
                "Localisation : 8, rue Pine, Moncton",
                "Capacité : 15 logements (8 chambres simples, 7 doubles)",
                "Critères d'éligibilité : Femmes vivant sous le seuil de pauvreté",
            ],
            buttonText: "Faire une demande de logement",
        },
        {
            id: 2,
            image: "/assets/img/soutien.png",
            title: "Une communauté qui vous accompagne.",
            description:
                "Nos logements ne sont pas qu'un simple abri. Nous créons un espace de vie solidaire où l'entraide et la reconstruction sont au cœur du parcours des bénéficiaires.",
            details: [
                "Soutien psychologique & mentorat",
                "Ateliers de cuisine & alimentation saine",
                "Activités culturelles & loisirs communautaires",
                "Jardin communautaire & bien-être",
            ],
            buttonText: "Rejoindre un programme d'entraide",
        },
        {
            id: 3,
            image: "/assets/img/environnement.png",
            title: "Développement personnel & Insertion professionnelle",
            description:
                "Nous offrons des formations et un accompagnement personnalisé pour aider nos bénéficiaires à retrouver une stabilité financière et un emploi durable.",
            details: [
                "Formations en gestion financière & recherche d'emploi",
                "Coaching & accompagnement vers l'emploi",
                "Accès à des formations partenaires",
            ],
            buttonText: "En savoir plus",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-width my-32">
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
                        Détails du programme
                    </h4>
                    {program.details.map((detail, index) => (
                        <p
                        key={index}
                        className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]"
                        >
                        {detail}
                        </p>
                    ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button className="w-full h-[50px] bg-green rounded-[54px] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                {program.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
    )
}