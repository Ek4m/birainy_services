import { Star } from "@/common/components/star";
import React from "react";
import { RollingOrder } from "./rollingOrder";

export const ServicesIntro = () => {
  return (
    <div className="border-b-1 pb-6 flex justify-between items-end">
      <div className="flex flex-col items-start w-[70%]">
        <Star />
        <h1 className="text-[4rem] mt-3">Xidmətlərimiz</h1>
        <p>
          Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni
          avtomatlaşdırılmış şəkildə həyata keçirtmək və bazarda innovativ
          şəkildə inkişaf etmək üçün bizim xidmətlərdən yararlanın.
        </p>
      </div>
      <RollingOrder />
    </div>
  );
};
