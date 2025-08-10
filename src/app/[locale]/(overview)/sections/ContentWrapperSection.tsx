import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";

export const ContentWrapperSection = () => {
  const t = useTranslations("home")
  const localActive = useLocale()
  // FAQ data for mapping
  const faqItems = [
    {
      question: t("faq_question_1"),
      answer: t("faq_answer_1"),
      defaultOpen: true,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_2"),
      answer: t("faq_answer_2"),
      defaultOpen: true,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_3"),
      answer: t("faq_answer_3"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_4"),
      answer: t("faq_answer_4"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_5"),
      answer: t("faq_answer_5"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_6"),
      answer: t("faq_answer_6"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_7"),
      answer: t("faq_answer_7"),
      defaultOpen: false,
      link: `https://house-for-life.vercel.app/${localActive}/donation`,
      linkLabel: localActive === 'fr' ? "Faire un don" : "Make a donation"
    },
    {
      question: t("faq_question_8"),
      answer: t("faq_answer_8"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_9"),
      answer: t("faq_answer_9"),
      defaultOpen: false,
      link: "https://www.facebook.com/profile.php?id=61556166477512",
      linkLabel: "Housing For Life - Habilitation pour la vie"
    },
    {
      question: t("faq_question_10"),
      answer: t("faq_answer_10"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_11"),
      answer: t("faq_answer_11"),
      defaultOpen: false,
      link: "",
      linkLabel: ""
    },
    {
      question: t("faq_question_12"),
      answer: t("faq_answer_12"),
      defaultOpen: false,
      link: `https://house-for-life.vercel.app/${localActive}/contact`,
      linkLabel: localActive === 'fr' ? 'Nous contacter': "Contact us"
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
                    {
                      (item.link) && <a href={item.link} className="underline text-blue-500" >{item.linkLabel}</a>
                    }
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
