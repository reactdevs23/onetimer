import Head from "next/head";

import BestPerformer from "../components/BestPerformer/BestPerformer";
import HeroSection from "../components/HeroSection/HeroSection";
import OurMission from "../components/OurMission/OurMission";
import FirstAction from "../components/FirstAction/FirstAction";
import TeamMember from "../components/Team/TeamMember/TeamMember";
import Partners from "../components/Partner/Partners";
import NotDoingAlone from "../components/NotDoingAlone/NotDoingAlone";
import Faq from "../components/Faq/Faq";
import Collaboration from "../components/Collaboration/Collaboration";
import WorkWithUs from "../components/WorkWithUs/WorkWithUs";

export default function Home() {
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
