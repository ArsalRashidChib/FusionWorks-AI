import Hero from "./sections/Hero";
import Tools from "./sections/Tools";
import CoreValues from "./sections/CoreValues";
import Services from "./sections/Services";
import HowItWorks from "./sections/HowItWorks";
import IndustriesBadges from "./sections/IndustriesBadges";
import CtaBanner from "./sections/CtaBanner";
import CorePillars from "./sections/Core-Pillars";


export default function Home() {
  return (
    <>
      <Hero />

          <Tools />

           <CoreValues />

<CorePillars/>
             <Services />

              <HowItWorks />
              
              <IndustriesBadges />

              <CtaBanner />
    </>
  );
}