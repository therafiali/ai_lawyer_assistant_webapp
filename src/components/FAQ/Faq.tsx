import React from "react";
import { TypographyH1, TypographyP } from "../ui/myschema";


const FAQ = () => {
    const mainHeading = `FAQ's`;
    return (
        <section>
            <TypographyH1
                text={mainHeading}
                className="text-left my-8 sm:text-center md:my-16"
            />

        </section>
    );
};

export default FAQ;
