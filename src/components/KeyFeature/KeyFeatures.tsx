import React from 'react';
import { TypographyH1 } from '../ui/myschema';
import FeaturedCard from './FeaturedCard';


const KeyFeatures = () => {
    const mainHeading = `Key Features`;
    const subHeading = `Never take meeting notes again. 
Get transcripts, automated summaries, 
action items, and chat with Otter to get 
answers from your meetings.`;

    return (
        <section>
            <TypographyH1 text={mainHeading} className='text-left my-8 sm:text-center md:16' />

            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </section>
    );
}

export default KeyFeatures;
