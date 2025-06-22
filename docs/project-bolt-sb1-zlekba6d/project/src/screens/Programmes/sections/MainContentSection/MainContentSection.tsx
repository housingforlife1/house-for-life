import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  // Program cards data
  const programCards = [
    {
      id: 1,
      image: "/rectangle-651-2.svg",
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
      image: "/rectangle-651.png",
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
      image: "/rectangle-651-1.svg",
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

  // Support options data
  const supportOptions = [
    {
      id: 1,
      icon: "/favourite.svg",
      title: "Faire un don",
      description:
        "Votre contribution financière nous aide à construire et entretenir des logements abordables. Chaque dollar compte.",
      linkText: "Donner maintenant",
      bgColor: "bg-[#f8f8e9]",
    },
    {
      id: 2,
      icon: "/agreement-01.svg",
      title: "Partenariats",
      description:
        "Les entreprises et organisations peuvent s'associer à notre mission par des dons, du mécénat de compétences ou des partenariats stratégiques.",
      linkText: "Devenir partenaire",
      bgColor: "bg-[#eff8e9]",
    },
    {
      id: 3,
      icon: "/star.svg",
      title: "Devenir bénévole",
      description:
        "Mettez vos compétences et votre temps au service de notre mission. Rejoignez notre équipe de bénévoles dévoués.",
      linkText: "Rejoindre l'équipe",
      bgColor: "bg-[#f8f8e9]",
    },
  ];

  // Partner logos
  const partnerLogos = [
    { id: 1, src: "/image-2.png", alt: "Partner logo", width: "w-[109px]" },
    { id: 2, src: "/image-1.png", alt: "Partner logo", width: "w-16" },
    { id: 3, src: "/image-3.png", alt: "Partner logo", width: "w-[126px]" },
    { id: 4, src: "/unnamed-1.png", alt: "Partner logo", width: "w-[26px]" },
    { id: 5, src: "/image-4.png", alt: "Partner logo", width: "w-[65px]" },
    { id: 6, src: "/image-5.png", alt: "Partner logo", width: "w-[139px]" },
    { id: 7, src: "/image-6.png", alt: "Partner logo", width: "w-[50px]" },
  ];

  // Footer navigation links
  const footerLinks = [
    { id: 1, text: "Accueil", path: "/" },
    { id: 2, text: "Nos programmes", path: "/programmes" },
    { id: 3, text: "Actualités", path: "/" },
    { id: 4, text: "Contact", path: "/" },
    { id: 5, text: "À propos", path: "/" },
  ];

  return (
    <div className="flex flex-col w-full items-center gap-[120px] mt-[718px]">
      {/* Program Cards Section */}
      <div className="flex w-full max-w-[1240px] items-start justify-between">
        {programCards.map((program) => (
          <Card
            key={program.id}
            className="flex flex-col w-full max-w-[392px] border-none shadow-none"
          >
            <CardContent className="p-0 space-y-6">
              <img
                className="w-full h-[392px] object-cover"
                alt="Program illustration"
                src={program.image}
              />

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

      {/* Call to Action Section */}
      <div className="flex flex-col w-full max-w-[1236px] items-start gap-[41px]">
        <div className="flex flex-col w-full max-w-[390.67px] gap-[34px]">
          <div className="space-y-2">
            <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
              Agissez avec nous pour offrir un toit à celles qui en ont besoin.
            </h2>
            <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
              Habitation pour la vie est géré par un conseil d'administration
              impliqué qui se réunit chaque mois pour planifier les actions et
              suivre les projets.
            </p>
          </div>
        </div>

        <div className="flex h-[340px] items-start justify-between w-full">
          {supportOptions.map((option) => (
            <Card
              key={option.id}
              className={`flex flex-col w-full max-w-[390.67px] items-start justify-between p-5 ${option.bgColor} rounded-3xl border-none shadow-none`}
            >
              <CardContent className="p-0 space-y-6 w-full">
                <div
                  className={`relative w-[60px] h-[60px] ${option.bgColor} rounded-[40px]`}
                >
                  <img
                    className="absolute w-[34px] h-[34px] top-[13px] left-0"
                    alt={option.title}
                    src={option.icon}
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                    {option.title}
                  </h4>
                  <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                    {option.description}
                  </p>
                </div>
              </CardContent>

              <div className="w-full mt-auto">
                <div className="w-full h-9 border-t border-neutral-200">
                  <div className="flex items-center justify-between mt-[17px]">
                    <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                      {option.linkText}
                    </span>
                    <img
                      className="w-[18px] h-[18px]"
                      alt="Arrow"
                      src="/frame.svg"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex w-full max-w-[1240px] items-center gap-8">
        <h2 className="w-[390.67px] font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
          Entreprises &amp; particuliers qui nous font confiance
        </h2>

        <div className="flex w-full max-w-[817.33px] h-[50px] items-center justify-between">
          <Button variant="ghost" size="icon" className="p-0">
            <ArrowLeftIcon className="w-8 h-8" />
          </Button>

          {partnerLogos.map((logo) => (
            <img
              key={logo.id}
              className={`${logo.width} h-[50px] object-cover`}
              alt={logo.alt}
              src={logo.src}
            />
          ))}

          <Button variant="ghost" size="icon" className="p-0">
            <ArrowRightIcon className="w-8 h-8" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1440px] flex flex-col items-center">
          {/* Call to Action Boxes */}
          <div className="w-full max-w-[1420px] h-[340px] flex">
            <Card className="w-[724px] h-[340px] bg-[#f8f8e9] rounded-3xl border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col w-[600px] items-start gap-11 pt-[66px] pl-[90px]">
                  <div className="space-y-2">
                    <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
                      Ensemble, construisons un avenir meilleur
                    </h3>
                    <p className="w-[600px] font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                      Votre don, quel qu'en soit le montant, contribue
                      directement à offrir un toit et un espoir à des femmes et
                      des enfants qui en ont besoin. Chaque contribution nous
                      rapproche de notre objectif.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button className="h-[50px] bg-green rounded-[54px] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                      Faire un don maintenant
                    </Button>
                    <Button
                      variant="outline"
                      className="h-[50px] bg-[#f8f8e9] rounded-[54px] border-[#282724] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]"
                    >
                      Devenir partenaire
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-[686px] h-[340px] bg-[#eff8e9] rounded-3xl border-none shadow-none">
              <CardContent className="p-0">
                <div className="flex flex-col w-[424px] h-[209px] items-start justify-between pt-[61px] pl-11">
                  <div className="space-y-2">
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
                    className="h-[50px] bg-[#eff8e9] rounded-[54px] border-[#282724] font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]"
                  >
                    Devenir bénévole
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="w-full max-w-[1420px] h-[100px] bg-[#fcfcf8] rounded-xl mt-6">
          <div className="flex w-full max-w-[1200px] items-center justify-between mx-auto pt-8">
            <div className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
              Habitation pour la vie 2025{" "}
              <span className="leading-[22.4px]"> | Tous droits reservés</span>
            </div>

            <div className="flex items-center justify-center gap-10">
              {footerLinks.map((link) => (
                <Link
                  key={link.id}
                  className="flex items-center gap-1.5"
                  to={link.path}
                >
                  <span className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] text-center tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] whitespace-nowrap [font-style:var(--paragraph-2-font-style)]">
                    {link.text}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-end gap-4">
              <div className="relative w-9 h-9">
                <img
                  className="absolute w-2.5 h-[18px] top-[9px] left-[13px]"
                  alt="Facebook"
                  src="/facebook.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="w-full max-w-[1420px] h-[50px] bg-[#fcfcf8] rounded-xl border-t border-neutral-200">
          <div className="flex w-full max-w-[1200px] items-center justify-between mx-auto pt-5">
            <div className="[font-family:'Manrope',Helvetica] font-normal text-black text-xs tracking-[0] leading-[19.2px] whitespace-nowrap">
              <span className="text-[#282724]">No d'enregistrement </span>
              <span className="font-bold">75272 2818 RR0001</span>
            </div>

            <div className="[font-family:'Manrope',Helvetica] font-normal text-black text-xs tracking-[0] leading-[19.2px] whitespace-nowrap">
              <span className="text-[#282724]">Pour faire un don : </span>
              <span className="font-bold">donation@hforlife-hpourlavie.ca</span>
            </div>

            <div className="[font-family:'Manrope',Helvetica] font-normal text-black text-xs tracking-[0] leading-[19.2px] whitespace-nowrap">
              <span className="text-[#282724]">Téléphone : </span>
              <span className="font-bold">5068540675 </span>
              <span className="text-[#282724]">(Canada)</span>
            </div>

            <div className="[font-family:'Manrope',Helvetica] font-normal text-black text-xs tracking-[0] leading-[19.2px] whitespace-nowrap">
              <span className="text-[#282724]">Ce site a été conçu par </span>
              <span className="font-bold">Hadrien GAYAP &amp; Cie</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
