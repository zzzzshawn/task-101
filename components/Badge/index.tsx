import React from "react";

const Badge = ({children}: {children: React.ReactNode}) => {
  return (
    <div
      className="text-[9px] px-2 font-medium border py-1 rounded-md bg-white text-black "
    >
      {children}
    </div>
  );
};

export default Badge;
