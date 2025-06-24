import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactFormSection = ()=> {
  // Contact information data for the right side
  const contactSections = [
    {
      title: "Demander un logement (bénéficiaires)",
      email: "logement@hforlife-hpourlavie.ca",
      tel: "506-854-0675",
      links: [],
    },
    {
      title: "Faire un don ou devenir partenaire (donateurs & entreprises)",
      email: "donation@hforlife-hpourlavie.ca",
      tel: "506-854-0675",
      links: ["En savoir plus sur les dons"],
    },
    {
      title: "Devenir bénévole",
      email: "benevolat@hforlife-hpourlavie.ca",
      tel: "506-854-0675",
      links: ["Voir les opportunités de bénévolat"],
    },
  ];

  return (
    <section className="flex flex-row gap-6 mt-12 max-width">
      {/* Left side - Contact Form */}
      <Card className="w-full md:w-1/2 rounded-2xl bg-white border border-solid border-neutral-200">
        <CardContent className="p-7">
          <div className="flex flex-col items-start gap-3 mb-6">
            <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
              Besoin d&apos;informations ?
            </h3>
            <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-gray text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
              Que vous soyez bénéficiaire, donateur, bénévole ou partenaire,
              notre équipe est à votre écoute.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]"
              >
                Votre adresse email
              </label>
              <Input
                id="email"
                placeholder="Votre adresse email"
                className="h-[50px] bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]"
              >
                Votre nom
              </label>
              <Input
                id="name"
                placeholder="Entrez votre nom"
                className="h-[50px] bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Entrez votre message"
                className="h-[100px] bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
              />
            </div>

            <Button className="h-[50px] mt-4 bg-green rounded-xl font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] text-center tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
              Envoyer le message
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Right side - Contact Information */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-white p-7">
        <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-white text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
          Coordonnées de contact
        </h3>

        <div className="flex flex-col gap-6 w-full">
          {contactSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                {section.title}
              </h4>
              <p className="font-paragraph-2 text-[#FCFCF8] text-[length:var(--paragraph-2-font-size)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)] font-[number:var(--paragraph-2-font-weight)] tracking-[var(--paragraph-2-letter-spacing)]">
                Email : {section.email}
                <br />
                Tél : {section.tel}
                {section.links.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    <br />
                    {link}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}

          <div className="flex flex-col gap-1 mt-2">
            <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
              Adresse
            </h4>
            <p className="font-paragraph-2 text-[#FCFCF8] text-[length:var(--paragraph-2-font-size)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)] font-[number:var(--paragraph-2-font-weight)] tracking-[var(--paragraph-2-letter-spacing)]">
              305, avenue Dominion, Moncton, NB (bureau administratif)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
