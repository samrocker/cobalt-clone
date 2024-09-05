import React from "react";
import ExperienceCard from "../reuseable/ExperienceCard";

const GeniusSection = () => {
  return (
    <section className="w-full bg-background mt-10 lg:mt-20">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-10">
          <div className="w-full flex flex-col gap-5 items-start justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#FFFFFF] to-[#71717A] max-w-[474px]">
              Meet Genius
            </h1>
            <p className="text-sm md:text-base text-[#A1A1AA] max-w-[529px]">
              Financial management and visibility in one place. Experience
              <span className="mx-2 text-[#E4E4E7]">a flexible toolkit</span>
              that makes every task feel like a breeze.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 place-content-between">
            <ExperienceCard
              imageUrl="/images/Genius-card-image-1.png"
              className="flex-[1] max-w-none"
              title="Smart forecasting"
              description="Harness the power of Cobalt's predictive analytics to map out the financial future of your business."
            />
            <ExperienceCard
              imageUrl="/images/Genius-card-image-2.png"
              className="flex-[1] max-w-none"
              title="Chat with Genius"
              description="Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless."
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default GeniusSection;
