"use client";
import React, { useState } from "react";
import Logo from "../Icons/Logo";
import { navLinks } from "@/constants";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full h-[49px] flex justify-between items-end px-[24px] fixed top-0 z-50">
      <div className="">
        <Logo />
      </div>
      <div className="flex font-serif-reg gap-2 justify-between">
        {navLinks.map((link, idx) => (
          <HoverLink key={idx} href={link.href} name={link.name} />
        ))}
      </div>
    </nav>
  );
};

const HoverLink = ({ href, name }: { href: string; name: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-3 overflow-hidden "
    >
      <div className="flex relative px-1 pt-1 ">
        <motion.span
          initial={{ opacity: 0 }}
          transition={{
            delay: 0.15,
            ease: [.25,.11,.7,.69],
            duration: 0.12
          }}
          animate={{ opacity: isHovered ? [0,1,1,1] : [1,1,0.7,0], x: isHovered ? -7 : 0 }}
          className="absolute -left-1"
        >
          (
        </motion.span>
        <motion.p
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -24 : 0 }}
          transition={{
            duration: 0.27,
            ease: [.25,.11,.7,.69],
          }}
          className="text-[16px]"
        >
          {name}
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          transition={{
            delay:0.15,
            ease: [.25,.11,.7,.69],
            duration: 0.12
          }}
          animate={{ opacity: isHovered ? [0,1,1,1] : [1,1,0.7,0], x: isHovered ? 7 : 0  }}
          className="absolute -right-1"
        >
          )
        </motion.span>
        <motion.p
        initial={{ y: 24 }}
        animate={{ y: isHovered ? 0 : 24 }}
        transition={{
          duration: 0.27,
          ease: [.25,.11,.7,.69],
        }}
        className="absolute text-[16px]"
      >
        {name}
      </motion.p>
      </div>
      
    </Link>
  );
};

export default Navbar;
