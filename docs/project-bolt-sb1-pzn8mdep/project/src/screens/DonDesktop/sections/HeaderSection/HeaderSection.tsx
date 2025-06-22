import React from "react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full max-w-[1420px] h-[623px] mx-auto mt-[58px]">
      <div className="relative w-full h-full">
        <img
          className="w-full h-[580px] object-cover"
          alt="Header background"
          src="/rectangle-1.svg"
        />

        <div className="flex flex-col w-full max-w-[550px] items-start gap-11 absolute top-48 left-[90px]">
          <div className="flex flex-col w-full items-start gap-4">
            <div className="flex flex-col items-start gap-2 w-full">
              <h1 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
                Un toit pour elles : Faites un don, changez une vie.
              </h1>
            </div>

            <p className="w-full font-paragraph-1 font-[number:var(--paragraph-1-font-weight)] text-white text-[length:var(--paragraph-1-font-size)] tracking-[var(--paragraph-1-letter-spacing)] leading-[var(--paragraph-1-line-height)] [font-style:var(--paragraph-1-font-style)]">
              Aidez-nous à financer la construction de logements abordables pour
              des femmes et mères monoparentales en situation précaire.
            </p>
          </div>
        </div>

        <div className="absolute w-[525px] h-[461px] top-[162px] right-[140px]">
          <div className="absolute w-[216px] h-[351px] bottom-0 left-0">
            <AspectRatio ratio={216 / 351} className="h-full">
              <div className="w-full h-full bg-[url(/image.png)] bg-cover bg-center" />
            </AspectRatio>
          </div>

          <div className="absolute w-[285px] h-[351px] top-0 right-0">
            <AspectRatio ratio={285 / 351} className="h-full">
              <div className="w-full h-full bg-[url(/image-1.png)] bg-cover bg-center" />
            </AspectRatio>
          </div>
        </div>
      </div>
    </header>
  );
};
