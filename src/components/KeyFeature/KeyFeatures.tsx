import React from 'react';
import { TypographyH1 } from '../ui/myschema';
import FeaturedCard from './FeaturedCard';
import { Book, FileText, PenTool } from 'lucide-react';


const KeyFeatures = () => {
    const mainHeading = `Key Features`;
    const subHeading = `Never take meeting notes again. 
Get transcripts, automated summaries, 
action items, and chat with Otter to get 
answers from your meetings.`;

    const featuredData = [
        {
            title: "Legal Research",
            description: "Access well trained AI instantly for precise legal research and insights.",
            icon: <Book className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />,
        },
        {
            title: "Case Referencing",
            description: "Get detailed information about legal matters with thorough referencing.",
            icon: <FileText className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />,
        },
        {
            title: "Drafting Support",
            description: "Get all your drafting work done effortlessly with Your Munshi and ensure seamless compliance.",
            icon: <PenTool className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />,
        },
    ];


    return (
        <section>
            <TypographyH1 text={mainHeading} className='text-left my-8 sm:text-center md:16' />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                {featuredData.map((item, index) => (
                    <FeaturedCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </section>
    );
}

export default KeyFeatures;
