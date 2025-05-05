import { ServicesIntro } from "@/modules/services/components";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineCursorArrowRipple } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="p-[4rem]">
      <ServicesIntro />
      <div className="grid grid-cols-5 mt-5">
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <h1 className="text-[4rem]">Data Analitikası</h1>
          <p>
            Şirkətin fəaliyyət göstərdiyi istiqamətə, istehsal etdiyi məhsullara
            uyğun olaraq oyun ssenarisi hazırlanır, son trendlərə əsaslanaraq
            dizayn olunur və oyun developerləri tərəfindən 2D və 3D formatında
            oyunlar yazılır. Oyunun növünə uyğun assetlərdən istifadə edilir.
          </p>
          <div className="flex w-[80%]  my-8">
            <button className="px-6 rounded-md py-2 bg-[#f7d000] flex items-center justify-around w-[45%] mr-3">
              <FaPhoneAlt size={20} />
              <p className="text-lg">Bizimlə əlaqə saxlayın</p>
            </button>
            <button className="px-6 rounded-md py-2 bg-[lightgrey] flex items-center justify-around w-[45%]">
              <HiOutlineCursorArrowRipple size={20} />
              <p className="text-lg">İşlərimizə nəzər yetirin</p>
            </button>
          </div>
          <img
            src="https://birainy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsoftware_image.fe49776b.png&w=1920&q=75"
            alt="data analytics"
          />
        </div>
      </div>
    </div>
  );
}
