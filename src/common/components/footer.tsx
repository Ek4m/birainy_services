import React from "react";
import { NavLink } from "./navLink";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { Checked } from "./checked";
import Image from "next/image";

export const MainAppFooter = () => {
  return (
    <div className="py-[2rem] px-[4rem] bg-black">
      <div className="flex w-full items-end justify-between mb-10">
        <div>
          <h1 className="text-white text-[3rem] w-[300px] mb-6 leading-[3rem]">
            Bizimlə indi əlaqəyə keçin
          </h1>
          <ul className="flex">
            <NavLink className="text-white" href="/" title="Xidmətlərimiz" />
            <NavLink className="text-white" href="/" title="Layihələr" />
            <NavLink className="text-white" href="/" title="Analitika" />
            <NavLink className="text-white" href="/" title="Bloq" />
            <NavLink className="text-white" href="/" title="Haqqımızda" />
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <h3 className="text-white text-lg mb-2 font-semibold">
            Bizi izləyin
          </h3>
          <div className="flex">
            <button className="w-[64px] h-[64px] border-white border-1 flex items-center rounded-[50%] ml-3 justify-center">
              <IoLogoInstagram color="white" />
            </button>
            <button className="w-[64px] h-[64px] border-white border-1 flex items-center rounded-[50%] ml-3 justify-center">
              <IoLogoTiktok color="white" />
            </button>
            <button className="w-[64px] h-[64px] border-white border-1 flex items-center rounded-[50%] ml-3 justify-center">
              <FaLinkedinIn color="white" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full">
        <div>
          <h1 className="text-white">Azərbaycan</h1>
          <h2 className="text-[hsla(0,0%,100%,.64)] w-[70%]">
            Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010
          </h2>
        </div>
        <div>
          <h1 className="text-white">Kanada</h1>
          <h2 className="text-[hsla(0,0%,100%,.64)] w-[70%]">
            Edmonton, Alberta
          </h2>
        </div>
        <div>
          <h1 className="text-white">Gürcüstan</h1>
          <h2 className="text-[hsla(0,0%,100%,.64)] w-[70%]">
            Tbilisi, Gürcüstan
          </h2>
        </div>
      </div>
      <div className="border-t-2 border-white mt-10 pt-8 flex w-full justify-between items-center">
        <div className="flex items-center">
          <Checked />
          <p className="text-white mx-3">Partner with</p>
          <Image
            width={100}
            height={20}
            src="https://birainy.com/_next/static/media/microsoft.9f8da16c.svg"
            alt="microsoft"
          />
        </div>
        <div className="flex items-center">
          <a href="tel:+994 12 488 66 54" className="text-white">
            +994 12 488 66 54
          </a>
          <a href="tel:+994 12 488 66 54" className="text-white ml-5">
            +994 77 613 13 17
          </a>
          <a href="mailto:info@birainy.com" className="text-white ml-5">
            info@birainy.com
          </a>
        </div>
      </div>
    </div>
  );
};
