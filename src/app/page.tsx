import React from "react";
import HeaderSection from "@/components/common/HeaderSection";
import FinanceSetion from "@/components/LandingSection/financeSetion";
import HeroSection from "@/components/LandingSection/HeroSection";
import EverythingGridSection from "@/components/LandingSection/EverythingGridSection";
import GeniusSection from "@/components/LandingSection/GeniusSection";
import FooterSection from "@/components/common/FooterSection";

export default function Home() {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <FinanceSetion />
    <EverythingGridSection />
    <GeniusSection />
    <FooterSection />
    </>
  );
}
