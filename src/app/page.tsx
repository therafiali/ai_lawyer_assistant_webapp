import Aboutus from "@/components/About/About";
import BenifitsOFYM from "@/components/Benifits/BenifitsofYM";
import ContactUs from "@/components/Contact/ContactUs";
import EventsBlog from "@/components/EventsBlog/EventsBlog";
import FAQ from "@/components/FAQ/Faq";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import HowToUse from "@/components/HowToUse/HowToUse";
import KeyFeatures from "@/components/KeyFeature/KeyFeatures";
import Newsletter from "@/components/Newsletter/Newsletter";
import OurSponser from "@/components/OurSponser/OurSponser";
import TypeOfQuestions from "@/components/Prompts/TypeOfQuestions";
import Testimonial from "@/components/Testimonial/Testimonial";
import WhoWeAre from "@/components/whoweare/WhoWeAre";


export default function Home() {
  return (
    <section>
      <HeroSection/>
      <OurSponser/>
      <KeyFeatures/>
      <HowToUse/>
      <BenifitsOFYM/>
      <TypeOfQuestions/>
      <Aboutus/>
      <WhoWeAre/>
      <FAQ/>
      <EventsBlog/>
      <Testimonial/>
      <Newsletter/>
      <ContactUs/>
      <Footer/>
    </section>
  );
}
