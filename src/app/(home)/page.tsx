import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection /> 
      <section className="pt-8 bg-[#fff]" style={{ height:"800px"}}>
        <div className="ml-[10%] mr-[5%]">
          <h2 className="text-white">card section</h2>

        </div>
      </section>
    </>
  );
}
