import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";

export const DonDesktop = (): JSX.Element => {
  // Browser window control buttons data
  const windowControls = [
    { color: "bg-[#ff5e5d]", border: "border-[#e14942]" },
    { color: "bg-[#ffbc4f]", border: "border-[#e1a325]" },
    { color: "bg-[#22cb58]", border: "border-[#3eaf3f]" },
  ];

  return (
    <div className="bg-[#fbfbf8] flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Browser-like navigation bar */}
        <div className="sticky w-full h-12 top-0 left-0 z-50 bg-[#ffffff] border-b border-[#00000012]">
          {/* Window control buttons */}
          <div className="inline-flex items-start gap-2 absolute top-[17px] left-[17px]">
            {windowControls.map((control, index) => (
              <div
                key={index}
                className={`${control.color} ${control.border} relative w-3 h-3 rounded-md border-[0.5px] border-solid`}
              />
            ))}
          </div>

          {/* Browser navigation buttons */}
          <div className="flex w-14 items-start gap-2 absolute top-[11px] left-[155px]">
            <img
              className="relative w-6 h-6"
              alt="Arrow left"
              src="/arrow-left.svg"
            />
            <img
              className="relative w-6 h-6"
              alt="Arrow right"
              src="/arrow-right.svg"
            />
          </div>

          {/* Refresh button */}
          <div className="absolute w-6 h-6 top-[11px] left-[109px]">
            <img
              className="w-5 h-3.5 left-0.5 absolute top-[5px]"
              alt="Union"
              src="/union-2.svg"
            />
          </div>

          {/* Address bar */}
          <div className="absolute w-[583px] h-7 top-[9px] left-[427px] bg-[#f2f2f2] rounded-[5px]">
            <div className="absolute w-6 h-6 top-0.5 left-[558px]">
              <img
                className="w-3 h-[15px] left-1.5 absolute top-[5px]"
                alt="Union"
                src="/union-1.svg"
              />
            </div>

            <div className="flex w-[99px] items-center justify-center gap-px absolute top-0.5 left-[242px]">
              <div className="relative w-6 h-6 ml-[-39.00px]">
                <div className="relative w-2 h-[11px] top-[7px] left-2 bg-[url(/union.svg)] bg-[100%_100%]" />
              </div>
              <div className="relative w-fit ml-[-14.00px] mr-[-39.00px] [font-family:'Manrope',Helvetica] font-normal text-[#4c4c4c] text-xs tracking-[0] leading-[normal]">
                <span className="font-medium">www.hforlife-hpourlavie.ca</span>
              </div>
            </div>
          </div>

          {/* Browser icons */}
          <img
            className="absolute w-6 h-6 top-[11px] left-[396px]"
            alt="Icon"
            src="/icon.svg"
          />
          <img
            className="absolute w-6 h-6 top-[11px] left-[1327px]"
            alt="Icon"
            src="/icon-1.svg"
          />
          <img
            className="absolute w-6 h-6 top-[11px] left-[1359px]"
            alt="Icon"
            src="/icon-3.svg"
          />
          <img
            className="absolute w-6 h-6 top-[11px] left-[1391px]"
            alt="Icon"
            src="/icon-2.svg"
          />
        </div>

        {/* Main page sections */}
        <NavigationSection />
        <HeaderSection />
        <MainContentSection />
        <FooterSection />
      </div>
    </div>
  );
};
