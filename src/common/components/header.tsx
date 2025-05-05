import React from "react";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";

import { MainAppLogo } from "./logo";
import { NavLink } from "./navLink";
export const MainAppHeader = () => {
  return (
    <header className="py-[2rem] px-[4rem] flex items-center">
      <MainAppLogo />
      <div className="bg-[#f5f5f7] flex ml-5 py-5 px-4 rounded-2xl items-center flex-1 justify-between">
        <ul className="flex items-center">
          <NavLink title="Xidmətlərimiz" href="/" />
          <NavLink title="Layihələr" href="/" />
          <NavLink title="Analitika" href="/" />
          <NavLink title="Bloq" href="/" />
          <NavLink title="Biz kimik?" href="/" />
        </ul>
        <div className="flex items-center">
          <div className="flex mr-5">
            <a href="#" className="border-r-2 pr-5">
              <IoLogoInstagram size={22} />
            </a>
            <a href="#" className="border-r-2 px-5">
              <FaLinkedinIn size={22} />
            </a>
            <a href="#" className="px-3">
              <IoLogoTiktok size={22} />
            </a>
          </div>
          <button className="bg-[#f7d000] py-[5px] px-6 rounded-lg cursor-pointer">
            Bizimlə əlaqə
          </button>
          <button className="p-1 ml-2 bg-[lightgrey] rounded-md cursor-pointer">
            <IoIosGlobe size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};
