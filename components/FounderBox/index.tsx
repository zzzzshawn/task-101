import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { founders } from "@/constants";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../Content/animated-modal";
import Card from "../Card";

type FounderProps = {
  content: {
    number: string;
    head1: string;
    head2: string;
  };
  inverse?: boolean;
};

const Founderbox = ({ content, inverse }: FounderProps) => {
  return (
    <div className="w-[50%] relative p-5 flex items-center justify-center group">
      <div className="relative size-[600px]  flex items-center justify-center ">
        {founders.map((founder, idx) => (
          <Modal key={idx}>
            <ModalTrigger
              className={cn(
                "size-[112px] p-[12px] absolute opacity-0 group-hover:opacity-100 transition-all duration-300 ",
                inverse ? founder.classInv : founder.classname
              )}
            >
              <Image
                key={idx}
                src={founder.imageUrl}
                alt="image"
                width={1024}
                height={1024}
                className=""
              />
            </ModalTrigger>
            <ModalBody className="p-[24px] max-w-[460px] bg-secondary">
              <ModalContent>
                <Card founder={founder} />
              </ModalContent>
            </ModalBody>
          </Modal>
        ))}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[60px] font-bold">{content.number}</h1>
          <h2 className="font-serif-reg text-[24px] tracking-wider text-center">
            {content.head1} <br /> {content.head2}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Founderbox;
