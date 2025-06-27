import { instrument } from '@/app/fonts/fonts';
import { NavigationSection } from '@/components/sections/NavigationSection/NavigationSection';
import { Toaster } from "@/components/ui/sonner";
import { Link, routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";
import FooterSection from '@/components/sections/FooterSection/FooterSection';
import DonationBtn from '@/components/sections/NavigationSection/DonationBtn';


export const metadata: Metadata = {
  title: "House For Life",
  description: "Habitation pour la vie construit des logements sécuritaires et abordables pour créer un avenir meilleur pour les femmes et les familles monoparentales en situation de précarité.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {

  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${instrument.className} antialiased select-none overflow-x-hidden`}>
          <NextIntlClientProvider>
            <main>
              {/* Header */}
              <NavigationSection />

              {children}

              {/* Footer */}
              <FooterSection />
            </main>
           
            <Toaster />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}
