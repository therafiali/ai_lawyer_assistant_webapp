import React from 'react';
import { TypographyH1S, TypographyP } from '../ui/myschema';
import { Button } from '../ui/button';
import Banner from '@/assets/Banner/hero.svg';
import Image from 'next/image';

const HeroSection = () => {
  const mainHeading = `Pakistan’s First AI Legal Assistant`;
  const subHeading = `Never take meeting notes again. 
Get transcripts, automated summaries, 
action items, and chat with Otter to get 
answers from your meetings.`;

  return (
    <section className="flex flex-col md:flex-row items-start justify-between md:items-center ">
      {/* Text Section */}
      <div className="flex-1 items-start mb-8 md:mb-0 max-w-xs sm:max-w-md md:max-w-none  text-left ">
        <TypographyH1S extra='YourMunshi ' text={mainHeading} className='' />
        <TypographyP text={subHeading} />
        <Button>Try it's free</Button>
      </div>

      {/* Image Section */}
      <div className="flex-1 -mr-2 sm:-mr-4 md:-mr-8">
        <Image src={Banner} alt='YourMunshi Demo' className="w-full h-auto " />
      </div>
    </section>
  );
}

export default HeroSection;
