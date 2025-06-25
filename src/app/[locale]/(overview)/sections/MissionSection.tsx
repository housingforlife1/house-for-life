import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function MissionSection() {

    // Data for support options
    const supportOptionsData = [
        {
            icon: "/assets/icons/favourite.png",
            title: "Faire un don",
            description:
                "Votre contribution financière nous aide à construire et entretenir des logements abordables. Chaque dollar compte.",
            action: "Donner maintenant",
        },
        {
            icon: "/assets/icons/agreement-01.png",
            title: "Partenariats",
            description:
                "Les entreprises et organisations peuvent s'associer à notre mission par des dons, du mécénat de compétences ou des partenariats stratégiques.",
            action: "Devenir partenaire",
        },
        {
            icon: "/assets/icons/star.png",
            title: "Devenir bénévole",
            description:
                "Mettez vos compétences et votre temps au service de notre mission. Rejoignez notre équipe de bénévoles dévoués.",
            action: "Rejoindre l'équipe",
        },
    ];

    // Data for testimonials
    const testimonialsData = [
        {
            quote:
                "Avoir un logement stable et abordable m'a permis de reprendre mes études tout en élevant mes enfants. C'est un nouveau départ pour toute notre famille.",
            author: "Marie, mère de deux enfants",
        },
        {
            quote:
                "Soutenir Housing for Life en tant que bénévole m'a permis de contribuer concrètement à améliorer la vie de femmes et d'enfants de ma communauté. C'est une expérience enrichissante.",
            author: "Jeanne, bénévole",
        },
        {
            quote:
                "Notre entreprise est fière de s'associer à Housing for Life. Leur mission s'aligne parfaitement avec nos valeurs d'inclusion et de responsabilité sociale.",
            author: "Robert, directeur d'une entreprise partenaire",
        },
    ];

    return (
        <div className="py-24 md:py-32 bg-[#f8f8e9] w-full my-16 md:my-32">
            <div className='flex flex-col items-start gap-20 md:gap-32 max-width'>

                {/* Mission Statement */}
                <div className="grid grid-cols-12 w-full sm:gap-8">
                    <div className="order-2 md:order-1 col-span-full md:col-span-5 lg:col-span-4 flex flex-col items-start gap-11">
                        <div className="flex flex-col items-start gap-5 w-full">
                            <div className="flex flex-col items-start gap-2 w-full">
                                <span className="font-paragraph-2 text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
                                Notre mission
                                </span>
                                <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                                La solidarité commence par un foyer.
                                </h2>
                            </div>
                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                Habitation pour la vie s&apos;engage à offrir des logements
                                abordables et un soutien communautaire aux femmes et mères
                                monoparentales en situation de précarité.
                            </p>
                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                Nous croyons que chaque femme et chaque enfant mérite un
                                chez-soi sûr, stable et abordable. Notre approche repose sur les
                                valeurs de solidarité, respect, dignité, inclusion et
                                transparence.
                            </p>
                        </div>
                        <Link href={`/donation`} className='w-full cursor-pointer'>
                            <Button className="h-[50px] w-full md:w-min px-5 py-3.5 bg-green rounded-[54px] text-white font-paragraph-bold text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                                Soutenir la&nbsp;&nbsp;mission
                            </Button>
                        </Link>
                    </div>
                    <div className='hidden lg:block lg:order-2 col-span-3 relative min-h-[448px] rounded-2xl overflow-hidden'>
                        <Image
                            className="object-cover"
                            alt="Image"
                            src="/assets/img/mission-img-1.png"
                            fill priority
                        />
                    </div>
                    <div className='order-1 md:order-3 col-span-full md:col-span-7 lg:col-span-5 relative min-h-[448px] rounded-2xl overflow-hidden mb-8 sm:mb-0'>
                        <Image
                            className="object-cover"
                            alt="Image"
                            src="/assets/img/mission-img-2.png"
                            fill priority
                        />
                    </div>
                </div>

                {/* Support Section */}
                <div className="flex flex-col w-full items-start gap-8">
                    <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                            Nous avons besoin de vous.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full">
                            <div className="flex flex-col items-start gap-4">
                                <p className="font-paragraph-1 text-gray text-base leading-[25.6px]">
                                Notre organisme compte sur les subventions de l&apos;État, celles
                                de la province du Nouveau-Brunswick et celles de la ville de
                                Moncton.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                Nous comptons aussi sur les dons des individus désireux de
                                soulager des personnes en situation de pauvreté.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                Vous aimeriez vous joindre à la cause ? Contactez-nous en
                                choisissant l&apos;une des options ci-dessous.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
                        {
                            supportOptionsData.map((option, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-col items-start justify-between shadow-none p-5 bg-white rounded-3xl h-full border-none">
                                    <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
                                        <div className="w-[60px] h-[60px] bg-white rounded-[40px] flex items-center justify-center">
                                            <div className='relative w-[34px] h-[34px]'>
                                                <Image
                                                    className="object-contain"
                                                    alt={option.title}
                                                    src={option.icon}
                                                    fill
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start gap-2 w-full">
                                            <h4 className="font-extrabold text-black text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)] [font-style:var(--heading-4-font-style)]">
                                                {option.title}
                                            </h4>
                                            <p className="font-paragraph-1 text-gray text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
                                            {option.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                    <div className="w-full h-[37px]">
                                        <div className="w-full h-9 bg-[#fcfcf8] border-t border-neutral-200">
                                            <div className="flex items-center justify-between w-full mt-[17px]">
                                            <span className="font-paragraph-bold text-black text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)] cursor-pointer">
                                                {option.action}
                                            </span>
                                            <ChevronRight className="w-[18px] h-[18px]" />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="flex flex-col items-start gap-4 w-full">
                    <h2 className="font-extrabold text-black text-[length:var(--heading-2-font-size)] tracking-[var(--heading-2-letter-spacing)] leading-[var(--heading-2-line-height)] [font-style:var(--heading-2-font-style)]">
                        Ils parlent de nous
                    </h2>
                    <div className="flex flex-row overflow-x-scroll lg:overflow-x-hidden xl:grid-cols-3 gap-4 md:gap-8 w-full h-scroll [&::-webkit-scrollbar]:h-0 pb-6">
                        {
                            testimonialsData.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="min-w-[250px] md:min-w-[320px] xl:w-full flex flex-col items-start gap-4">
                                    <p className="font-paragraph-1 text-gray text-base leading-4">
                                        <span className="leading-[var(--paragraph-1-line-height)] font-paragraph-1 [font-style:var(--paragraph-1-font-style)] font-[number:var(--paragraph-1-font-weight)] tracking-[var(--paragraph-1-letter-spacing)] text-[length:var(--paragraph-1-font-size)]">
                                            {testimonial.quote}
                                            <br />
                                        </span>
                                        <span className="font-bold [font-style:var(--paragraph-bold-font-style)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] text-[length:var(--paragraph-bold-font-size)]">
                                            <br />
                                            {testimonial.author}
                                        </span>
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
