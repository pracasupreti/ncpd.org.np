import ImageCarousel from "@/components/ui/carousel";
import LatestConferencePage from "@/components/ui/latest-conference";
import LatestNewsPage from "@/components/ui/latest-news";
import LatestTrainingPage from "@/components/ui/latest-trainings";
import LogoSection from "@/components/ui/logo";
import WhatWeDoPage from "@/components/ui/whatwedo";

export default function Home() {
  return (
    <div>
      <ImageCarousel/>
      <WhatWeDoPage/>
      <LatestTrainingPage/>
      <LatestNewsPage/>
      <LatestConferencePage/>
      <LogoSection/>
    </div>
  );
}
