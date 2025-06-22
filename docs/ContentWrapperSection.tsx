import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Separator } from "../../../../components/ui/separator";

export const ContentWrapperSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "Qu'est-ce que Habitation pour la vie ?",
      answer:
        "Habitation pour la vie est une organisation dédiée à la construction de logements abordables et au soutien des femmes et mères en difficulté, leur offrant un environnement stable pour reconstruire leur vie.",
      defaultOpen: true,
    },
    {
      question: "Qui peut bénéficier de nos programmes de logement ?",
      answer:
        "Nos programmes s'adressent principalement aux femmes et mères monoparentales en situation de précarité ou sans-abri. Chaque candidature est évaluée selon des critères spécifiques pour assurer une aide adaptée.",
      defaultOpen: true,
    },
    {
      question: "Comment faire une demande de logement ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Quels sont les critères d'éligibilité pour un logement ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question:
        "Quels documents sont nécessaires pour constituer une demande ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Quel est le délai d'attente pour obtenir un logement ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Comment puis-je soutenir Habitation pour la vie ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Les dons sont-ils déductibles des impôts ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Comment puis-je devenir bénévole ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Où sont situés vos logements ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question:
        "Proposez-vous des services d'accompagnement pour les bénéficiaires ?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Comment puis-je contacter Habitation pour la vie ?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-[1240px] items-start gap-6">
      <div className="flex flex-col max-w-[390px] items-start gap-2">
        <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          Nous avons les réponses
        </h2>

        <p className="font-paragraph-1 text-gray">
          <span className="text-[#504f48] leading-[var(--paragraph-1-line-height)] font-paragraph-1 [font-style:var(--paragraph-1-font-style)] font-[number:var(--paragraph-1-font-weight)] tracking-[var(--paragraph-1-letter-spacing)] text-[length:var(--paragraph-1-font-size)]">
            Vous trouverez ici les reponses aux questions courantes.{" "}
          </span>

          <span className="font-bold text-[#282724] leading-[0.1px] underline">
            Contactez-nous
          </span>

          <span className="text-[#504f48] leading-[25.6px]">&nbsp;</span>

          <span className="text-[#504f48] leading-[var(--paragraph-1-line-height)] font-paragraph-1 [font-style:var(--paragraph-1-font-style)] font-[number:var(--paragraph-1-font-weight)] tracking-[var(--paragraph-1-letter-spacing)] text-[length:var(--paragraph-1-font-size)]">
            si vous avez une autre intérrogation.
          </span>
        </p>
      </div>

      <Separator className="w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            defaultValue={item.defaultOpen ? `item-${index}` : undefined}
            className="w-full"
          >
            <AccordionItem
              value={`item-${index}`}
              className="border-b border-neutral-200 bg-[#fcfcf8] py-3"
            >
              <AccordionTrigger className="flex justify-between items-center w-full">
                <span className="text-left font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                  {item.question}
                </span>
                {/* Custom chevron icons to match design */}
                {item.defaultOpen ? (
                  <ChevronUpIcon className="h-5 w-5 shrink-0 transition-transform" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 shrink-0 transition-transform" />
                )}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer && (
                  <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    {item.answer}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};
