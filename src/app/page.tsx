import { ServicesIntro, ServicesList } from "@/modules/services/components";

export default function Home() {
  return (
    <div className="p-[4rem]">
      <ServicesIntro />
      <ServicesList />
    </div>
  );
}
