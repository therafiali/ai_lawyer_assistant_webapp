import Aboutus from "@/components/About/About";
import BenifitsOFYM from "@/components/Benifits/BenifitsofYM";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowToUse from "@/components/HowToUse/HowToUse";
import KeyFeatures from "@/components/KeyFeature/KeyFeatures";
import TypeOfQuestions from "@/components/Prompts/TypeOfQuestions";
import WhoWeAre from "@/components/whoweare/WhoWeAre";


export default function Home() {
  return (
    <section>
      <HeroSection/>
      <KeyFeatures/>
      <HowToUse/>
      <BenifitsOFYM/>
      <TypeOfQuestions/>
      <Aboutus/>
      <WhoWeAre/>
    </section>
  );
}
