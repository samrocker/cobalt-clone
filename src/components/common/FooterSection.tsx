import Image from "next/image";
import React from "react";

const FooterSection = () => {
  return (
    <section className="w-full bg-footer-gradient">
      <main className="max-w-[1380px] m-auto">
        <div className="py-5 px-5 w-full flex-between flex-col mt-36">
          <div className="w-full flex-center flex-col gap-7">
            <h1 className="text-2xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-radial from-[#FFFFFF] to-[#71717A] max-w-[658px]">
              See where financial automation can take your business.
            </h1>
            <p className="text-xs md:text-lg text-[#A1A1AA] text-center max-w-[759px]">
              The first financial tool you'll love. And the last one you'll ever
              need.
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
          </div>
          <div className="w-full flex-between flex-col gap-5 mt-32 border-t-[1px] border-white/10">
            <div className="py-3 w-full flex-between flex-col-reverse lg:flex-row gap-5">
              <div className="flex-[1] w-full flex-start gap-5 flex-col-reverse lg:flex-row">
                <p className="text-xs md:text-sm text-[#A1A1AA]">
                  © 2023 Cobalt Financial Technologies Inc.
                </p>
                <div className="flex-center gap-5">
                  <p className="text-xs md:text-sm text-[#A1A1AA]">
                    Privacy Policy
                  </p>
                  <p className="text-xs md:text-sm text-[#A1A1AA]">
                    Terms of Use
                  </p>
                </div>
              </div>
              <div className="flex-[1] w-full flex-center lg:flex-end gap-5">
                <Image src="/icons/X-icon.png" alt="" width={20} height={20} />
                <Image
                  src="/icons/linkedin-icon.png"
                  alt=""
                  width={20}
                  height={20}
                />
                <Image
                  src="/icons/facebook-icon.png"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-5 justify-center mt-10 mb-10">
            <p className="max-w-[729px] text-sm text-[#71717A]">
              Cobalt is a trademark or registered trademark of Cobalt Financial
              Technologies Inc. Any other trademarks are the property of their
              respective owners. Unless otherwise noted, use of third party
              logos does not imply endorsement of, sponsorship of, or
              affiliation with Cobalt.
            </p>
            <p className="max-w-[729px] text-sm text-[#71717A]">
              Cobalt is a financial technology company, not a bank. Banking
              services are provided by Celtic Bank and Evolve Bank & Trust®,
              Members FDIC.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default FooterSection;
