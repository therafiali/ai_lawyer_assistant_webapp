import React from "react";
import { TypographyH1 } from "../ui/myschema";
import TeamSlider from "../CaroselSlider/TeamSlider";
import newsImage from "@/assets/News-Blog/new1.jpg"

const EventsBlog = () => {
    const mainHeading = `Events & Blogs`;

    // Array of events or blog posts
    const eventsBlogList = [
        {
            imageSrc: newsImage,
            name: "Exciting New Event Launch",

        },
        {
            imageSrc: newsImage,
            name: "Understanding Tech ",

        },
        {
            imageSrc: newsImage,
            name: "Design in the Modern Age",

        },
    ];

    return (
        <section>
            <TypographyH1
                text={mainHeading}
                className="text-left my-8 sm:text-center md:my-16"
            />
            <TeamSlider slides={eventsBlogList} />
        </section>
    );
};

export default EventsBlog;
