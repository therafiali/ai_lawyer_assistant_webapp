import React from 'react';
import { TypographyH1 } from '../ui/myschema';


const KeyFeatures = () => {
  const mainHeading = `KeyFeatures`;
  const subHeading = `Never take meeting notes again. 
Get transcripts, automated summaries, 
action items, and chat with Otter to get 
answers from your meetings.`;

  return (
   <section>
    <TypographyH1 text={mainHeading} className='text-center' />

   </section>
  );
}

export default KeyFeatures;
