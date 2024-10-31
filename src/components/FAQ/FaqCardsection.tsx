import { useRef, useState } from "react";

const FaqsCard = ({ faqsList }) => {
    const answerElRef = useRef(null);
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState('0px');

    const handleOpenAnswer = () => {
        if (answerElRef.current) {
            const answerElH = answerElRef.current.childNodes[0]?.offsetHeight || 0;
            setState(!state);
            setAnswerH(state ? '0px' : `${answerElH + 20}px`);
        }
    };

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={{ height: state ? answerH : '0px' }}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function FaqSection() {
    const faqsList = [
        { q: "What are some random questions to ask?", a: "..." },
        { q: "Do you include common questions?", a: "..." },
        { q: "Can I use this for 21 questions?", a: "..." },
        { q: "Are these questions for girls or for boys?", a: "..." },
        { q: "What do you wish you had more talent doing?", a: "..." }
    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
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
}
