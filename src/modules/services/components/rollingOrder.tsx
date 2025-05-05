"use client";
import React from "react";

export const RollingOrder = () => {
  return (
    <div className="group p-2 bg-black flex items-center justify-center rounded-[50%]  relative w-[160px] h-[160px] cursor-pointer">
      <img
        src="https://birainy.com/_next/static/media/direction.e5fbef99.svg"
        alt=""
        className="relative z-2 rotate-[-30deg] group-hover:rotate-0 duration-200"
      />
      <svg
        className="absolute top-[5px] left-[5px] animate-spin group-hover:animate-none"
        style={{ animationDuration: "4s" }}
        width="150"
        height="150"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
          />
        </defs>

        {/* Coin Shape */}
        <circle cx="150" cy="150" r="150" strokeWidth="5" />

        {/* Circular Text */}
        <text fill="#000" fontSize="26.3" fontFamily="Arial" letterSpacing="0">
          <textPath fill="#fff" href="#circlePath" startOffset="0%">
            SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡ SİFARİŞ ET ⚡
          </textPath>
        </text>
      </svg>
    </div>
  );
};
