"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";


const formSchema = z.object({
  email: z.string().email("L'adresse email n'est pas valide"),
  nom: z.string().min(1, "Le nom est requis"),
  message: z.string().min(4, "Le message est requis"),
});

export const ContactFormSection = ()=> {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      message: "",
    },
  });

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


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(JSON.stringify(values));
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-width">
      {/* Left side - Contact Form */}
      <Card className="order-2 md:order-1 rounded-2xl bg-white border border-solid border-neutral-200">
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre adresse email</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre adresse email" {...field}
                          id="email"
                          className="h-[50px] bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Votre nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Entrez votre nom" {...field}
                          id="email"
                          className="h-[50px] bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Entrez votre message..." {...field}
                          rows={5}
                          className="bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="h-[50px] w-full mt-4 bg-green rounded-xl font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] text-center tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                  Envoyer le message
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>

      {/* Right side - Contact Information */}
      <div className="order-1 md:order-1 flex flex-col items-start gap-6 text-white px-0 md:p-7">
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
