import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Data for donation methods
const donationMethods = [
  {
    title: "Transfert Electronique, Interac",
    description: "Depot direct : donation@hforlife-hpourlavie.ca",
  },
  {
    title: 'Chèque à l\'ordre de "Habitation pour la Vie, Inc."',
    description:
      "Envoyer le chèque à cet adresse : \n305, avenue Dominion, Moncton, NB",
  },
  {
    title: "Virement bancaire",
    description:
      "Nom du compte : Habitation pour la Vie, Inc.\nNuméro IBAN : 75272 2818 RR0001",
  },
  {
    title: "Dons en nature (matériaux, services professionnels)",
    description:
      "Contactez-nous directement via cet adresse pour faire votre don : donation@hforlife-hpourlavie.ca",
  },
];

// Data for donation benefits
const donationBenefits = [
  {
    image: "/rectangle-8.svg",
    description: "Construire un immeuble de 15 logements abordables à Moncton.",
  },
  {
    image: "/image-2.png",
    description:
      "Accompagner les bénéficiaires vers une autonomie durable avec un soutien social.",
  },
  {
    image: "/rectangle-8-1.svg",
    description:
      "Offrir un loyer 70 % inférieur au marché grâce à des subventions.",
  },
];

// Data for board members
const boardMembers = [
  {
    name: "Paulette Dionne",
    role: "Présidente",
    image: "/rectangle-652.png",
  },
  {
    name: "Isabelle Lavoie",
    role: "Vice-présidente",
    image: "/rectangle-653.png",
  },
  {
    name: "Auréa Cormier",
    role: "Secrétaire-trésorière",
    image: "/rectangle-654.png",
  },
  {
    name: "Alphonse Dionne",
    role: "Coordination administrative",
    image: "/rectangle-656.png",
  },
  {
    name: "Marie-Éva Gaudet",
    role: "Membre du CA",
    image: "/rectangle-655.png",
  },
  {
    name: "Lujan Saintil",
    role: "Membre du CA",
    image: "/rectangle-656-1.png",
  },
  {
    name: "Nicolas Kalgora",
    role: "Membre du CA",
    image: "/rectangle-656-2.png",
  },
];

// Company logos
const companyLogos = [
  {
    src: "/image-2-1.png",
    alt: "Company logo",
    width: "109px",
    height: "50px",
  },
  {
    src: "/image-1-1.png",
    alt: "Company logo",
    width: "64px",
    height: "50px",
    objectCover: true,
  },
  {
    src: "/image-3.png",
    alt: "Company logo",
    width: "126px",
    height: "50px",
    objectCover: true,
  },
  {
    src: "/unnamed-1.png",
    alt: "Company logo",
    width: "26px",
    height: "50px",
    objectCover: true,
  },
  {
    src: "/image-4.png",
    alt: "Company logo",
    width: "65px",
    height: "50px",
    objectCover: true,
  },
  {
    src: "/image-5.png",
    alt: "Company logo",
    width: "139px",
    height: "50px",
    objectCover: true,
  },
  {
    src: "/image-6.png",
    alt: "Company logo",
    width: "50px",
    height: "50px",
    objectCover: true,
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-[120px] py-10">
      {/* Donation Section */}
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Donation Form Card */}
        <Card className="w-full md:w-[500px] rounded-2xl border border-neutral-200">
          <CardContent className="p-6">
            <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)] mb-8">
              Effectuez le don
            </h3>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col gap-3">
                <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                  Votre adresse email
                </label>
                <Input
                  className="h-[50px] bg-[#f0f0ee] rounded-xl"
                  placeholder="Votre adresse email"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                  Montant du don
                </label>
                <Input
                  className="h-[50px] bg-[#f0f0ee] rounded-xl"
                  placeholder="Combien donnez-vous ?"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                  Votre numéro de carte bancaire
                </label>
                <Input
                  className="h-[50px] bg-[#f0f0ee] rounded-xl"
                  placeholder="XXXX  XXXX  XXXX  XXXX"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1 flex flex-col gap-3">
                  <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                    Date expiratoire
                  </label>
                  <Input
                    className="h-[50px] bg-[#f0f0ee] rounded-xl"
                    placeholder="MM/YY"
                  />
                </div>

                <div className="w-[154px] flex flex-col gap-3">
                  <label className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                    CVC
                  </label>
                  <Input
                    className="h-[50px] bg-[#f0f0ee] rounded-xl"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Checkbox
                id="transaction-fees"
                className="rounded border-[#d3d2d2]"
              />
              <label
                htmlFor="transaction-fees"
                className="font-paragraph-2 text-sm leading-[22.4px]"
              >
                Payer les frais de transaction{" "}
                <span className="font-[number:var(--paragraph-2-font-weight)] leading-[var(--paragraph-2-line-height)] font-paragraph-2 [font-style:var(--paragraph-2-font-style)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                  (montant des frais ici)
                </span>
              </label>
            </div>

            <Button className="w-full h-[50px] bg-green rounded-xl text-white font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
              Effectuer le don
            </Button>
          </CardContent>
        </Card>

        {/* Alternative Donation Methods */}
        <div className="flex flex-col w-full md:w-[500px] gap-6">
          <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
            Ou donnez à votre manière.
          </h3>

          <div className="flex flex-col gap-3">
            {donationMethods.map((method, index) => (
              <Card key={index} className="bg-[#f6f6ee] rounded-xl">
                <CardContent className="p-5">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                      {method.title}
                    </h4>
                    <p className="font-paragraph-2 text-[#504f48] whitespace-pre-line">
                      {method.description.split(":")[0]}:{" "}
                      <span className="text-[#282724]">
                        {method.description.split(":").slice(1).join(":")}
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="font-paragraph-2 text-[#504f48] leading-[var(--paragraph-2-line-height)]">
            Tous les dons sont déductibles d&apos;impôts. Un reçu officiel vous
            sera envoyé. Numéro d&apos;enregistrement de l&apos;organisme :{" "}
            <span className="text-[#282724]">75272 2818 RR0001</span>
          </p>

          <Separator className="bg-gray/20" />

          <div className="flex flex-col gap-2">
            <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
              Pour obtenir plus d&apos;informations sur la façon dont vous
              pouvez faire un don contactez :
            </h4>
            <p className="font-paragraph-2 text-gray leading-[var(--paragraph-2-line-height)]">
              Secrétaire -trésorière : Aurea cormier, tel : 5068540675
              <br />
              Assistante Administrative : Rhada El Khadir, tel : 5068540675
            </p>
          </div>
        </div>
      </div>

      {/* Donation Benefits Section */}
      <div className="flex flex-col w-full gap-6">
        <div className="flex flex-col gap-1 max-w-[450px]">
          <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            Chaque don construit un avenir.
          </h2>
          <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] leading-[var(--paragraph-1-line-height)] tracking-[var(--paragraph-1-letter-spacing)] [font-style:var(--paragraph-1-font-style)]">
            Grace à votre générosité et votre don, vous permettez de :
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
          {donationBenefits.map((benefit, index) => (
            <div key={index} className="flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-6">
                <img
                  className="w-full h-60 object-cover"
                  alt="Benefit illustration"
                  src={benefit.image}
                />
                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supporters Section */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <div className="flex flex-col gap-2.5 max-w-[390px]">
          <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            ils nous soutiennent déjà,&nbsp;&nbsp;rejoignez-les !
          </h2>
        </div>

        <div className="flex flex-col gap-6 flex-1">
          <div className="flex flex-col gap-2.5 w-full">
            <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
              Les entreprises
            </p>

            <div className="flex items-center justify-between w-full">
              <button className="flex items-center justify-center">
                <ArrowLeftIcon className="w-8 h-8" />
              </button>

              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  className={`h-[50px] ${logo.objectCover ? "object-cover" : ""}`}
                  style={{ width: logo.width }}
                  alt={logo.alt}
                  src={logo.src}
                />
              ))}

              <button className="flex items-center justify-center">
                <ArrowRightIcon className="w-8 h-8" />
              </button>
            </div>
          </div>

          <Separator className="bg-gray/20" />

          <div className="flex flex-col gap-2.5">
            <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
              Les particuliers
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {[...Array(6)].map((_, index) => (
                  <img
                    key={index}
                    className={`w-[58px] h-[58px] object-cover ${index > 0 ? "ml-[-18px]" : ""}`}
                    alt="Contributor"
                    src="/image-11.png"
                  />
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-paragraph-2 text-[#282724] leading-[var(--paragraph-2-line-height)] tracking-[var(--paragraph-2-letter-spacing)] text-[length:var(--paragraph-2-font-size)]">
                  +24 contributeurs
                </p>
                <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                  Actifs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fundraising Campaign Section */}
      <div className="flex flex-col w-full gap-[41px]">
        <div className="flex flex-col gap-2 w-full">
          <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)] max-w-[390px]">
            Nous y mettons du serieux
          </h2>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)] max-w-[390px]">
              Un cabinet de sollicitation de fonds a été créé afin d&apos;appui
              financièrement le projet Habitation pour la Vie. Ce cabinet vise
              deux objectifs :
            </p>

            <div className="flex-1">
              <p className="font-paragraph-1 text-base leading-4">
                <span className="text-[#282724]">Le premier objectif</span>
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
                <span className="text-[#282724]">Le deuxième objectif</span>
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

      {/* Board Members Section */}
      <div className="flex flex-col w-full gap-6">
        <div className="max-w-[500px]">
          <h2 className="font-heading-2 font-[number:var(--heading-2-font-weight)] text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
            Membre du conseil d&apos;administration
          </h2>
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.33%-11px)] lg:w-[calc(25%-12px)] xl:w-[235px]"
            >
              <img
                className="w-full h-[200px] object-cover"
                alt={`Photo of ${member.name}`}
                src={member.image}
              />
              <div className="flex flex-col">
                <h4 className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-black text-[length:var(--heading-4-font-size)] leading-[var(--heading-4-line-height)] tracking-[var(--heading-4-letter-spacing)] [font-style:var(--heading-4-font-style)]">
                  {member.name}
                </h4>
                <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-gray text-[length:var(--paragraph-1-font-size)] text-justify tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
