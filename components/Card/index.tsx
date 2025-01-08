import Image from "next/image";
import React from "react";
import LinkedIn from "../Icons/LinkedIn";
import Badge from "../Badge";
import Link from "next/link";

interface FounderProps {
  founder: {
    name: string;
    position: string;
    desc: string;
    tags: string[];
    linkedIn: string;
    imageUrl: string;
    banner: string;
    classname: string;
    classInv: string;
  };
}

const Card = ({ founder }: FounderProps) => {
  return (
    <div className="flex flex-col justify-between gap-5">
      <Image
        src={founder.banner}
        alt="image"
        width={1024}
        height={1024}
        priority
        className="w-[410px] h-[246px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-between h-[260px]">
        <div className="">
          <div className="flex justify-between items-center">
            <h1 className="text-[32px] font-bold">{founder.name}</h1>
            <Link href={founder.linkedIn}>
              <LinkedIn />
            </Link>
          </div>
          <h2 className="font-serif-reg tracking-wider text-[14px] text-text-secondary">
            {founder.position}
          </h2>
          <p className="text-[14px] mt-5 max-h-[133px] line-clamp-6 text-text-secondary">
            {founder.desc}
          </p>
        </div>
        <div className="flex itcems-center gap-2">
          {founder.tags.map((tag, idx) => (
            <Badge key={idx}>{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
