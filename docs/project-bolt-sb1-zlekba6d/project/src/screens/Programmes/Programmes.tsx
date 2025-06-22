import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const Programmes = (): JSX.Element => {
  return (
    <div className="bg-[#fbfbf8] flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Top navigation bar */}
        <div className="sticky w-full h-12 top-0 left-0 z-10 bg-[#ffffff] border-b border-[#00000012]">
          {/* Window controls */}
          <div className="inline-flex items-start gap-2 absolute top-[17px] left-[17px]">
            <div className="bg-[#ff5e5d] border-[#e14942] relative w-3 h-3 rounded-md border-[0.5px] border-solid" />
            <div className="bg-[#ffbc4f] border-[#e1a325] relative w-3 h-3 rounded-md border-[0.5px] border-solid" />
            <div className="bg-[#22cb58] border-[#3eaf3f] relative w-3 h-3 rounded-md border-[0.5px] border-solid" />
          </div>

          {/* Refresh button */}
          <div className="absolute w-6 h-6 top-[11px] left-[109px]">
            <img
              className="w-5 h-3.5 left-0.5 absolute top-[5px]"
              alt="Union"
              src="/union.svg"
            />
          </div>

          {/* Navigation arrows */}
          <div className="flex w-14 items-start gap-2 absolute top-[11px] left-[155px]">
            <ArrowLeftIcon className="relative w-6 h-6" />
            <ArrowRightIcon className="relative w-6 h-6" />
          </div>

          {/* SearchIcon bar */}
          <div className="absolute w-[583px] h-7 top-[9px] left-[427px] bg-[#f2f2f2] rounded-[5px]">
            <div className="absolute w-6 h-6 top-0.5 left-[558px]">
              <img
                className="w-3 h-[15px] left-1.5 absolute top-[5px]"
                alt="Union"
                src="/union-2.svg"
              />
            </div>

            <div className="flex w-[99px] items-center justify-center gap-px absolute top-0.5 left-[242px]">
              <div className="relative w-6 h-6 ml-[-39.00px]">
                <div className="relative w-2 h-[11px] top-[7px] left-2 bg-[url(/union-1.svg)] bg-[100%_100%]" />
              </div>

              <div className="relative w-fit ml-[-14.00px] mr-[-39.00px] [font-family:'Manrope',Helvetica] font-normal text-[#4c4c4c] text-xs tracking-[0] leading-[normal]">
                <span className="font-medium">www.hforlife-hpourlavie.ca</span>
              </div>
            </div>
          </div>

          {/* Right side icons */}
          <img
            className="absolute w-6 h-6 top-[11px] left-[396px]"
            alt="Icon"
            src="/icon-3.svg"
          />
          <img
            className="absolute w-6 h-6 top-[11px] left-[1327px]"
            alt="Icon"
            src="/icon-1.svg"
          />
          <img
            className="absolute w-6 h-6 top-[11px] left-[1359px]"
            alt="Icon"
            src="/icon-2.svg"
          />
          <img
            className="absolute w-6 h-6 top-[11px] left-[1391px]"
            alt="Icon"
            src="/icon.svg"
          />
        </div>

        {/* Main content sections */}
        <HeaderSection />
        <NavigationSection />
        <MainContentSection />
      </div>
    </div>
  );
};
