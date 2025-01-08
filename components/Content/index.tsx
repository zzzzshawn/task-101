import React from "react";
import Founderbox from "../FounderBox";
import { founderContent1, founderContent2 } from "@/constants";

const Content = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="w-full h-[600px] absolute top-[24%]  flex justify-between">
        <Founderbox content={founderContent1} />
        <Founderbox content={founderContent2} inverse />
      </div>
      <Seperator />

    </div>
  );
};

const Seperator = () => {
  return (
    <>
      <div className="absolute z-50 top-[15%] text-text-primary bg-primary text-xl font-bold tracking-wider text-[60px] p-5">
        TEAM
      </div>
      <div
        className="w-px h-screen absolute bg-white/20"
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Content;
