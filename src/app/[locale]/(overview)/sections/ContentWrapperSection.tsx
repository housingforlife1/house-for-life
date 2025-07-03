import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const ContentWrapperSection = () => {
  const t = useTranslations("home")
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
        "Nos programmes s'adressent principalement aux femmes et mères monoparentales en situation de précarité ou sans-abri mères en difficulté. Chaque candidature est évaluée selon des critères spécifiques pour assurer une aide adaptée.",
      defaultOpen: false,
    },
    {
      question: "Comment s'effectue l'attribution des logements ?",
      answer: "Les logements ne sont pas attribués sur demande directe ; ils sont affectés par un comité désigné de l'organisation Habitation pour la Vie.",
      defaultOpen: false,
    },
    {
      question: "Quels sont les critères d'éligibilité pour un logement ?",
      answer: "Les critères d'éligibilité incluent le fait d'être une femme monoparentale en situation de précarité.",
      defaultOpen: false,
    },
    {
      question:
        "Quels documents sont nécessaires pour constituer une demande ?",
      answer: "Le comité d'attribution fournira des informations détaillées sur les documents requis.",
      defaultOpen: false,
    },
    {
      question: "Quel est le délai d'attente pour obtenir un logement ?",
      answer: "Les informations concernant les délais d'attente ne sont pas encore disponibles.",
      defaultOpen: false,
    },
    {
      question: "Comment puis-je soutenir Habitation pour la vie ?",
      answer: "Vous pouvez soutenir l'organisation en devenant un donateur ponctuel ou régulier. Plus d'informations sont disponibles sur notre page de donation : https://house-for-life.vercel.app/fr/donation",
      defaultOpen: false,
    },
    {
      question: "Les dons sont-ils déductibles des impôts ?",
      answer: "Oui, un reçu fiscal est fourni après chaque don pour permettre la déduction fiscale.",
      defaultOpen: false,
    },
    {
      question: "Comment puis-je devenir bénévole ?",
      answer: "Pour devenir bénévole, veuillez laisser un message sur notre page Facebook : https://www.facebook.com/profile.php?id=61556166477512",
      defaultOpen: false,
    },
    {
      question: "Où sont situés vos logements ?",
      answer: "Le premier logement est situé au centre-ville de Moncton.",
      defaultOpen: false,
    },
    {
      question:
        "Proposez-vous des services d'accompagnement pour les bénéficiaires ?",
      answer: "Un programme d'accompagnement sera mis en place pour les habitants de nos logements.",
      defaultOpen: false,
    },
    {
      question: "Comment puis-je contacter Habitation pour la vie ?",
      answer: "Vous pouvez nous contacter via notre page de contact : https://house-for-life.vercel.app/fr/contact",
      defaultOpen: false,
    },
  ];

  return (
    <section className="flex flex-col w-full max-width items-start gap-6 mt-32 mb-10">
      <div className="flex flex-col max-w-[390px] items-start gap-2">
        <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          {t("faq_titre")}
        </h2>

        <p className="font-paragraph-1 text-gray">
          <span className="text-[#504f48] leading-[var(--paragraph-1-line-height)] font-paragraph-1 [font-style:var(--paragraph-1-font-style)] font-[number:var(--paragraph-1-font-weight)] tracking-[var(--paragraph-1-letter-spacing)] text-[length:var(--paragraph-1-font-size)]">
            {t("faq_p_1")}{" "}
          </span>

          <Link href={'/contact'} className="font-bold text-[#282724] leading-[0.1px] underline">
            {t("faq_p_2")}
          </Link>

          <span className="text-[#504f48] leading-[25.6px]">&nbsp;</span>

          <span className="text-[#504f48] leading-[var(--paragraph-1-line-height)] font-paragraph-1 [font-style:var(--paragraph-1-font-style)] font-[number:var(--paragraph-1-font-weight)] tracking-[var(--paragraph-1-letter-spacing)] text-[length:var(--paragraph-1-font-size)]">
            {t("faq_p_3")}
          </span>
        </p>
      </div>

      <Separator className="w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            defaultValue={item.defaultOpen ? `item-${index}` : undefined}
            className="w-full">
            <AccordionItem
              value={`item-${index}`}
              className="border-b border-neutral-200 bg-[#fcfcf8] py-3"
            >
              <AccordionTrigger className="flex justify-between items-center w-full">
                <span className="text-left font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                  {item.question}
                </span>
                {/* Custom chevron icons to match design */}
                {/* 
                  {item.defaultOpen ? (
                    <ChevronUpIcon className="h-5 w-5 shrink-0 transition-transform" />
                  ) : (
                    <ChevronDownIcon className="h-10 w-10 shrink-0 transition-transform" />
                  )}
                */}
              </AccordionTrigger>
              <AccordionContent>
                { 
                  item.answer && (
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
