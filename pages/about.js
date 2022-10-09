import Head from "next/head";

import BestPerformer from "../components/AboutPage/BestPerformer/BestPerformer";
import HeroSection from "../components/AboutPage/HeroSection/HeroSection";
import OurMission from "../components/AboutPage/OurMission/OurMission";
import FirstAction from "../components/AboutPage/FirstAction/FirstAction";
import TeamMember from "../components/AboutPage/Team/TeamMember/TeamMember";
import Partners from "../components/AboutPage/Partner/Partners";
import NotDoingAlone from "../components/AboutPage/NotDoingAlone/NotDoingAlone";
import Faq from "../components/AboutPage/Faq/Faq";
import Collaboration from "../components/AboutPage/Collaboration/Collaboration";
import WorkWithUs from "../components/AboutPage/WorkWithUs/WorkWithUs";

export default function About() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HeroSection />
      <OurMission />
      <BestPerformer />
      <FirstAction />
      <TeamMember />
      <NotDoingAlone />
      <Partners />

      <Faq />
      <WorkWithUs />
      <Collaboration />
    </div>
  );
}
