import React from 'react'
import { TypographyH1E } from '../ui/myschema';


const HowToUse = () => {
    const mainHeading = `How To Use `;
    return (
        <section>
            <TypographyH1E text={mainHeading} extra='YourMunshi ' sign='?' className='text-left my-8 sm:text-center md:my-16' />
            {/* Video Section */}
            <div className="">
                <video
                    src='/video.mp4'
                    title="How To Use YourMunshi"
                    className="w-auto md:w-2/3 mx-auto"
                    controls
                />
                
            </div>

        </section>
    )
}

export default HowToUse




