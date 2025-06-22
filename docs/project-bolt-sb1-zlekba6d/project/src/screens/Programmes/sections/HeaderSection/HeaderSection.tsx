import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full h-[580px] bg-[url(/image.png)] bg-cover bg-center">
      <div className="container h-full flex items-center">
        <div className="flex flex-col max-w-[550px] items-start gap-11 py-12">
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
              Des logements, un avenir : Découvrez nos programmes de soutien.
            </h1>

            <p className="font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
              Nous offrons bien plus qu&apos;un toit. Nos programmes sont conçus
              pour aider les femmes et les mères monoparentales à retrouver
              stabilité et autonomie.
            </p>
          </div>

          <Button className="h-[50px] px-5 py-3.5 bg-green rounded-[54px] hover:bg-green/90">
            <span className="font-paragraph-bold font-[number:var(--paragraph-bold-font-weight)] text-white text-[length:var(--paragraph-bold-font-size)] tracking-[var(--paragraph-bold-letter-spacing)] leading-[var(--paragraph-bold-line-height)] [font-style:var(--paragraph-bold-font-style)]">
              Faire une demande de logement
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
