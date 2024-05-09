"use client"
import CardCarousel from "@/components/CardCarousel";
import CustomCard from "@/components/Card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/utlis/data";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-[10vw] sm:gap-[30vw] lg:gap-[10vw] p-10 sm:p-24 relative">
      {/* <div className="bg-gradient-to-t from-black via-transparent to-transparent fixed bottom-0 left-0 h-20 w-full "></div> */}



      <div className="w-full overflow-hidden min-h-max font-roboto flex flex-col gap-10">
        <div className="flex items-center sm:gap-10">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-medium ">ATEX-RESOURCES</h1>
          <Link href={"/blog"} title="explore now" className="border-2 p-5 relative flex gap-5 items-center justify-center border-white sm:p-10 rounded-3xl transition-all hover:bg-white hover:text-black "> 
  <ChevronRight size={30}/></Link >
          {/* <p className="text-3xl font-[300]  text-gray-100">
            Empowering Students, Enriching Futures.
          </p> */}
        </div>
        <div>
          <div className="w-full h-52 sm:h-80 rounded-xl overflow-hidden relative">
            <div className="w-full h-full absolute z-10 bg-gradient-to-t from-slate-900/10 via-transparent to-zinc-900/10"></div>
            <Image
              className="w-full h-full object-cover"
              loading="lazy"
              src={"/bg1.png"}
              height={4096}
              width={4096}
              alt=""
            />
          </div>
          <p className="text-[12px] leading-7 sm:text-[16px] text-gray-200 sm:leading-normal mt-2">
            your one-stop destination for comprehensive study materials tailored
            to meet the needs of modern-day learners. Whether you&apos;re preparing
            for exams, conducting research, or simply seeking to expand your
            knowledge, we&apos;re here to support your academic journey every step of
            the way.
          </p>
        </div>
      </div>
      {/* <div className="py-24 font-roboto font-light"></div> */}

      <div className="w-full h-max">
        <h1 className=" text-5xl md:text-9xl font-roboto mb-10">Latest Posts</h1>
      <CardCarousel blogs={data}/>
      </div>


    </main>
  );
}
