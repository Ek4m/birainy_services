"use client";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { IService } from "../types/interfaces";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { DUMMY_SERVICES } from "@/assets/data";
import { Accordion } from "./accordion";

export const ServiceContext = createContext<{
  active?: IService;
  onClick(val: IService): void;
  services: IService[][];
}>({ onClick() {}, services: [] });

export const ServicesList = () => {
  const [activeService, setActiveService] = useState<IService | undefined>(
    undefined
  );
  const [dummyServices] = useState<IService[][]>(DUMMY_SERVICES);
  const onClickService = useCallback((s: IService) => {
    setActiveService(s);
  }, []);

  useEffect(() => {
    setActiveService(dummyServices[0][0]);
  }, [dummyServices]);

  return (
    <ServiceContext.Provider
      value={{
        active: activeService,
        onClick: onClickService,
        services: dummyServices,
      }}
    >
      <div className="grid grid-cols-5 mt-5 gap-5">
        <div className="col-span-2">
          {dummyServices.map((service, index) => (
            <Accordion
              defaultOpen={index === 0}
              key={service[0].id}
              items={service}
            />
          ))}
        </div>
        <div className="col-span-3">
          <h1 className="text-[4rem]">{activeService?.title}</h1>
          <p>{activeService?.description}</p>
          <div className="flex w-[75%]  my-8">
            <button className="cursor-pointer px-6 rounded-md py-2 bg-[#f7d000] flex items-center justify-around w-[45%] mr-3 px-[2rem]">
              <FaPhoneAlt size={20} />
              <p className="text-sm">Bizimlə əlaqə saxlayın</p>
            </button>
            <button className="cursor-pointer px-6 rounded-md py-2 bg-[lightgrey] flex items-center justify-around w-[45%] px-[2rem]">
              <HiOutlineCursorArrowRipple size={20} />
              <p className="text-sm">İşlərimizə nəzər yetirin</p>
            </button>
          </div>
          <img
            src="https://birainy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoftware_image.fe49776b.png&w=1920&q=75"
            alt="data analytics"
          />
        </div>
      </div>
    </ServiceContext.Provider>
  );
};
