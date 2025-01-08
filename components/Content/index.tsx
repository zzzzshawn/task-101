import React from "react";
import Founderbox from "../FounderBox";
import { founderContent1, founderContent2, founders, founders2 } from "@/constants";

const Content = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="w-full h-[600px] absolute top-[24%]  flex justify-between">
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
      <div className="absolute z-30 top-[15%] text-text-primary bg-primary text-xl font-bold tracking-wider  py-8">
        <h1 className="text-[60px]">TEAM</h1>
      </div>
      <div
        className="w-[1px] h-screen absolute bg-white/20"
      ></div>
    </>
  );
};

export default Content;
