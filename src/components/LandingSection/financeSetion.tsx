import React from "react";

const FinanceSetion = () => {
  return (
    <section className="w-full bg-background md:mt-20">
      <main className="max-w-[1440px] m-auto">
        <div className="py-5 px-5 w-full flex flex-col lg:flex-row gap-5 items-start justify-center">
          <div className="flex-[1] h-full w-full flex items-start justify-start">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-radial from-[#FFFFFF] to-[#71717A] max-w-[536px]">
              Who said finance has to be boring?
            </h1>
          </div>
          <div className="flex-[1] h-full w-full flex items-start justify-start">
            <p className="text-sm md:text-base text-[#A1A1AA] max-w-[598px]">
              With Cobalt, managing your business finances is effortless,
              empowering, and anything but boring. Our intuitive platform brings
              clarity to your cash flow, simplifies your financial
              decision-making, and puts the power of advanced financial
              management right at your fingertips.
              <span className="text-[#E4E4E7]">
                Say no to spreadsheets and tools designed in the 80s.
              </span>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FinanceSetion;
