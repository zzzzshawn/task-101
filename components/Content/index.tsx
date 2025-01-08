import React from "react";
import Founderbox from "../FounderBox";
import { founderContent1, founderContent2, founders, founders2 } from "@/constants";

const Content = () => {
  return (
    <div className="relative w-full min-h-screen flex max-sm:flex-col justify-center items-center">
      <div className="w-full h-[600px] max-sm:min-h-screen absolute top-[24%] max-sm:top-0  flex max-sm:flex-col justify-between">
        <Founderbox content={founderContent1} founders={founders} />
        <Founderbox content={founderContent2} founders={founders2} inverse />
      </div>
      <Seperator />

    </div>
  );
};

const Seperator = () => {
  return (
    <>
      <div className="absolute z-30 top-[15%] max-sm:top-1/2 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 text-text-primary bg-primary text-xl font-bold tracking-wider max-sm:px-3 py-8">
        <h1 className="text-[60px] max-sm:text-[40px] select-none">TEAM</h1>
      </div>
      <div
        className="w-[1px] h-screen max-sm:h-[1px] max-sm:w-full absolute bg-white/20"
      ></div>
    </>
  );
};

export default Content;
