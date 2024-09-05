import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const HeaderSection = () => {
  return (
    <section className="w-full absolute top-0 z-[50]">
      <main className="max-w-[1440px] m-auto">
        <div className="pt-7 px-5 w-full flex-between">
          <div className="flex-[1] flex-start">
            <Image
              src="/images/logo.png"
              alt=""
              width={1009}
              height={1000}
              className="w-24"
            />
          </div>
          <div className="flex-[1] hidden md:flex-end gap-5">
            <Link href="/" className="text-md text-[#D4D4D8] font-normal">
              Blog
            </Link>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-5 ring-1 ring-white/10">
                <span className="text-[#A1A1AA]">Join the waiting</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#22D3EE]/0 via-[#22D3EE] to-[#22D3EE]/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
          </div>
          <div className="flex-[1] flex-end md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Image src='/icons/menu-line.svg' alt="" height={24} width={24} />
              </SheetTrigger>
              <SheetContent side='left'>
                <div className="h-screen w-full flex flex-col gap-7 items-center justify-center">
                <Link href="/" className="text-3xl text-[#D4D4D8] font-normal">
              Blog
            </Link>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-5 ring-1 ring-white/10 ">
                <span className="text-xl text-[#A1A1AA]">Join the waiting</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-[#22D3EE]/0 via-[#22D3EE] to-[#22D3EE]/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
