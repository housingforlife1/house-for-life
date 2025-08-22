"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader } from "@/components/ui/loader";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";


const formSchema = z.object({
  email: z.string().email("L'adresse email n'est pas valide"),
  nom: z.string().min(1, "Le nom est requis"),
  message: z.string().min(4, "Le message est requis"),
});

export const ContactFormSection = ()=> {
  const t = useTranslations("contact")

  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      message: "",
    },
  })

  // Contact information data for the right side
  const contactSections = [
    {
      title: t("data_titre_1"),
      email: "logement@hforlife-hpourlavie.ca",
      tel: "506-854-0675",
      links: [],
    },
    {
      title: t("data_titre_2"),
      email: "donation@hforlife-hpourlavie.ca",
      tel: "506-854-0675",
      links: [t('link_1_data_1')],
    },
    {
      title: t("data_titre_3"),
      email: "benevolat@hforlife-hpourlavie.ca",
      tel: "506-854-0675",
      links: [t('link_2_data_1')],
    },
  ]

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (loading) return; // Prevent multiple submissions
    setLoading(true);
    // Here you can handle the form submission, e.g., send the data to an API
    try {
      const response = await fetch("http://backend.hforlife-hpourlavie.ca/api/formulaire_contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(values),
      })

      if (response.status === 200) {
        // Handle successful submission, e.g., show a success message
        toast.success("Message envoyé avec succès !")
        
        // Reset the form after submission
        form.reset();
      }
      else {
        // Handle error in response
        toast.error(
          <div className='p-3 bg-red-500 text-white rounded-md'>
            Une erreur est survenue. Veuillez réessayer plus tard.
          </div>
        )
      }
    } catch (error) {
      toast.error(
        <div className='p-3 bg-red-500 text-white rounded-md'>
          Une erreur est survenue. Erreur:  {JSON.stringify(error)}
        </div>
      )
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 max-width">
      {/* Left side - Contact Form */}
      <Card className="order-2 md:order-1 rounded-2xl bg-white border border-solid border-neutral-200">
        <CardContent className="p-7">
          <div className="flex flex-col items-start gap-3 mb-6">
            <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-black text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
              {t("formTitle")}
            </h3>
            <p className="font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-gray text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)]">
              {t("formDescription")}
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
                      <FormLabel>{t("form_email")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("form_email")} {...field}
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
                      <FormLabel>{t("form_nom")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("form_nom")} {...field}
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
                          placeholder={t("form_message")} {...field}
                          rows={5}
                          className="bg-[#f0f0ee] rounded-xl font-paragraph-2 font-[number:var(--paragraph-2-font-weight)] text-black text-[length:var(--paragraph-2-font-size)] tracking-[var(--paragraph-2-letter-spacing)] [font-style:var(--paragraph-2-font-style)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="h-[50px] w-full mt-4 bg-green rounded-xl font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] text-center tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                  { loading && <Loader className="text-white w-5 h-5 mr-2" /> }
                  {t("form_send_btn")}
                </Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>

      {/* Right side - Contact Information */}
      <div className="order-1 md:order-1 flex flex-col items-start gap-6 text-white px-0 md:p-7">
        <h3 className="font-heading-3 font-[number:var(--heading-3-font-weight)] text-white text-[length:var(--heading-3-font-size)] tracking-[var(--heading-3-letter-spacing)] leading-[var(--heading-3-line-height)] [font-style:var(--heading-3-font-style)]">
          {t("info_titre")}
        </h3>

        <div className="flex flex-col gap-6 w-full">
          {contactSections.map((section, index) => (
            <div key={index} className="flex flex-col gap-1">
              <h4 className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
                {section.title}
              </h4>
              <p className="font-paragraph-2 text-[#FCFCF8] text-[length:var(--paragraph-2-font-size)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)] font-[number:var(--paragraph-2-font-weight)] tracking-[var(--paragraph-2-letter-spacing)]">
                {t("info_email")} : {section.email}
                <br />
                {t("telephone")} : {section.tel}
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
              {t("adresse")}
            </h4>
            <p className="font-paragraph-2 text-[#FCFCF8] text-[length:var(--paragraph-2-font-size)] leading-[var(--paragraph-2-line-height)] [font-style:var(--paragraph-2-font-style)] font-[number:var(--paragraph-2-font-weight)] tracking-[var(--paragraph-2-letter-spacing)]">
              {t('adresse_val')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
