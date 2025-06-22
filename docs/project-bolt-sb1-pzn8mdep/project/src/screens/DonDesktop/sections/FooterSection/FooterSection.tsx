import { FacebookIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    "Accueil",
    "Nos programmes",
    "Actualités",
    "Contact",
    "À propos",
  ];

  // Contact information data
  const contactInfo = [
    { label: "No d'enregistrement", value: "75272 2818 RR0001" },
    { label: "Pour faire un don :", value: "donation@hforlife-hpourlavie.ca" },
    { label: "Téléphone :", value: "5068540675", suffix: "(Canada)" },
    { label: "Ce site a été conçu par", value: "Hadrien GAYAP & Cie" },
  ];

  return (
    <footer className="flex flex-col items-center w-full bg-transparent">
      <div className="flex flex-col w-full max-w-[1440px] items-center">
        <div className="w-full max-w-[1420px] h-[340px] flex gap-[10px]">
          {/* Left Card - Donation */}
          <Card className="w-1/2 h-full bg-[#f8f8e9] rounded-3xl border-none">
            <CardContent className="flex flex-col w-full max-w-[600px] items-start gap-11 pt-[66px] pl-[90px]">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                  Ensemble, construisons un avenir meilleur
                </h3>
                <p className="w-full max-w-[600px] font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                  Votre don, quel qu&apos;en soit le montant, contribue
                  directement à offrir un toit et un espoir à des femmes et des
                  enfants qui en ont besoin. Chaque contribution nous rapproche
                  de notre objectif.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button className="h-[50px] px-5 py-3.5 bg-green rounded-[54px] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                  Faire un don maintenant
                </Button>
                <Button
                  variant="outline"
                  className="h-[50px] px-5 py-3.5 bg-[#f8f8e9] rounded-[54px] border-[#282724] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]"
                >
                  Devenir partenaire
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right Card - Volunteer */}
          <Card className="w-1/2 h-full bg-[#eff8e9] rounded-3xl border-none">
            <CardContent className="flex flex-col w-full max-w-[424px] h-[209px] items-start justify-between pt-[61px] pl-11">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                  Participez autrement
                </h3>
                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-black text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                  Vous préférez donner de votre temps ? Découvrez comment
                  devenir bénévole.
                </p>
              </div>

              <Button
                variant="outline"
                className="h-[50px] px-5 py-3.5 bg-[#eff8e9] rounded-[54px] border-[#282724] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]"
              >
                Devenir bénévole
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer Main */}
      <Card className="w-full max-w-[1420px] h-[100px] mt-4 bg-[#fcfcf8] rounded-xl border-none">
        <CardContent className="flex items-center justify-between w-full max-w-[1200px] mx-auto pt-8">
          <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
            Habitation pour la vie 2025 | Tous droits reservés
          </p>

          <div className="flex items-center justify-center gap-10">
            {navLinks.map((link, index) => (
              <div key={index} className="flex items-start">
                <div className="flex items-center gap-1.5">
                  <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] text-center tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                    {link}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-4">
            <div className="relative w-9 h-9 flex items-center justify-center">
              <FacebookIcon className="w-2.5 h-[18px]" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Bottom */}
      <Card className="w-full max-w-[1420px] h-[50px] bg-[#fcfcf8] rounded-xl border-t border-neutral-200">
        <CardContent className="flex items-center justify-between w-full max-w-[1200px] mx-auto pt-5">
          {contactInfo.map((info, index) => (
            <p
              key={index}
              className="font-normal text-black text-xs leading-[19.2px] whitespace-nowrap"
            >
              <span className="font-normal text-[#282724] text-xs leading-[19.2px]">
                {info.label}{" "}
              </span>
              <span className="font-bold">{info.value}</span>
              {info.suffix && (
                <span className="font-normal text-[#282724] text-xs leading-[19.2px]">
                  {" "}
                  {info.suffix}
                </span>
              )}
            </p>
          ))}
        </CardContent>
      </Card>
    </footer>
  );
};
