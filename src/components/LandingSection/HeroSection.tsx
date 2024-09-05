import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-hero-gradient">
      <main className="max-w-[1440px] m-auto">
        <div className="px-5 py-5 min-h-screen w-full flex-center flex-col gap-10">
          <div className="flex-center flex-col gap-7 mt-44">
            <h1 className="text-3xl md:text-7xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-radial from-[#FFFFFF] to-[#71717A] max-w-[711px]">
              Unleash the power of intuitive finance
            </h1>
            <p className="text-xs md:text-xl text-[#A1A1AA] text-center max-w-[759px]">
              Say goodbye to the outdated financial tools. Every small business
              owner, regardless of the background, can now manage their business
              like a pro. Simple. Intuitive. And never boring.
            </p>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-5 ring-1 ring-white/10 ">
                <span className="text-[#A1A1AA]">Join the waiting</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#22D3EE]/0 via-[#22D3EE] to-[#22D3EE]/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
            <span className="flex-center flex-col gap-2">
              <h1 className="text-md text-[#A1A1AA] font-normal">Learn more</h1>
              <Image src="/icons/arrowDown.png" alt="" width={27} height={27} />
            </span>
          </div>
          <div className="w-full flex-center max-w-[1216px]">
            <Image
              src="/images/hero-product-image.png"
              height={1080}
              width={1920}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
