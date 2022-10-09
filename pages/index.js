import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";
import TmDao from "../components/HomePage/1TmDao/TmDao";
import AllonBoard from "../components/HomePage/AllonBoard/AllonBoard";
import BeautyOfWeb3 from "../components/HomePage/BeautyOfWeb3/BeautyOfWeb3";
import BuildYourReputation from "../components/HomePage/BuildYourReputation/BuildYourReputation";
import CollaborationRedifined from "../components/HomePage/CollaborationRedifined/CollaborationRedifined";
import CollaborativeEcosystem from "../components/HomePage/CollaborativeEcosystem/CollaborativeEcosystem";
import HeroSection from "../components/HomePage/HeroSection/HeroSection";
import LetsCreateTogether from "../components/HomePage/LetsCreateTogether/LetsCreateTogether";

import NftCommons from "../components/HomePage/NftCommons/NftCommons";
import ReveneuSplit from "../components/HomePage/RevenueSplit/RevenueSplit";
import StartDoingTogether from "../components/HomePage/StartDoingTogether/StartDoingTogether";
import Studio from "../components/HomePage/Studio/Studio";
import ThemeVerse from "../components/HomePage/ThemeVerse/ThemeVerse";
import WorkWithBrands from "../components/HomePage/WorkWithBrands/WorkWithBrands";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",

      offset: 100,
      duration: 1000,
      delay: 50,
    });
  }, []);
  return (
    <div>
      {" "}
      <Head>
        <title>Create Next App</title>
      </Head>
      <HeroSection />
      <CollaborationRedifined />
      <Studio />
      <AllonBoard />
      <StartDoingTogether />
      <BuildYourReputation />
      <NftCommons />
      <ReveneuSplit />
      <ThemeVerse />
      <CollaborativeEcosystem />
      <BeautyOfWeb3 />
      <TmDao />
      <WorkWithBrands /> <LetsCreateTogether />
    </div>
  );
}
