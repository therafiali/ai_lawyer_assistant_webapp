import React from "react";
import { TypographyH1, TypographyP } from "../ui/myschema";
import  { FaqsCard } from "./FaqCardsection";


const FAQ = () => {
    const mainHeading = `FAQ's`;

    const faqsList = [
        { q: "What are some random questions to ask?", a: "this is answer" },
        { q: "Do you include common questions?", a: "this is answer" },
        { q: "Can I use this for 21 questions?", a: "this is answer" },
        { q: "Are these questions for girls or for boys?", a: "this is answer" },
        { q: "What do you wish you had more talent doing?", a: "this is answer" }
    ];


    return (
        <section>
            <TypographyH1
                text={mainHeading}
                className="text-left my-8 sm:text-center md:my-16"
            />
            <div className="space-y-3 text-center">
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {faqsList.map((item, idx) => (
                    <FaqsCard key={idx} faqsList={item} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
