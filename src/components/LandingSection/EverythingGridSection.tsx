import React from "react";
import ExperienceCard from "../reuseable/ExperienceCard";

const EverythingGridSection = () => {
  return (
    <section className="w-full bg-background mt-10 lg:mt-20">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col gap-10">
          <div className="w-full flex flex-col gap-5 items-start justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#FFFFFF] to-[#71717A] max-w-[474px]">
              Everything you need. Nothing you don’t
            </h1>
            <p className="text-sm md:text-base text-[#A1A1AA] max-w-[529px]">
              Our AI-driven assistant is designed to decode complex financial
              figures and
              <span className="mx-2 text-[#E4E4E7]">illuminate key trends</span>
              in your business.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-between max-w-[1200px]">
            <ExperienceCard
              imageUrl="/images/card-image-1.png"
              title="Insights at your fingertips"
              description="All your data and finances in one place to provide quick answers and make decisions instantly."
            />
            <ExperienceCard
              imageUrl="/images/card-image-2.png"
              title="Manage in real time"
              description="Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it’s 2023."
            />
            <ExperienceCard
              imageUrl="/images/card-image-3.png"
              title="Important business alerts"
              description="Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click."
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-5 max-h-[480px] max-w-[1200px]">
            <ExperienceCard
              imageUrl="/images/card-image-4.png"
              className="w-10/1 max-w-none"
              title="Connect all your apps"
              description="Bring your data with our built-in integrations for accounting, revenue tools and banking."
            />
            <ExperienceCard
              imageUrl="/images/card-image-5.png"
              className="max-w-[488px] gap-0"
              title="You’re in control"
              description="Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl+K on Windows. Dark mode."
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default EverythingGridSection;
