import React from "react";
import { TypographyH1 } from "../ui/myschema";
import PromptSlider from "../CaroselSlider/PromptSlider";
import PromptCard from "./PromptCard";

const TypeOfQuestions = () => {
  const mainHeading = `Types of questions you can ask`;

  const dummyPrompts = [
    { title: "What is AI?" },
    { title: "Explain Quantum Computing." },
    { title: "What are Neural Networks?" },
    { title: "Discuss Machine Learning." },
    { title: "What is Natural Language Processing?" },
    { title: "Explain Reinforcement Learning." },
    { title: "What is AI?" },
    { title: "Explain Quantum Computing." },
    { title: "What are Neural Networks?" },
    { title: "Discuss Machine Learning." },
    { title: "What is Natural Language Processing?" },
    { title: "Explain Reinforcement Learning." },
  ];

  return (
    <section>
      <TypographyH1
        text={mainHeading}
        className="text-left my-8 sm:text-center md:my-16"
      />
  <PromptSlider  slides={dummyPrompts} />

    </section>
  );
};

export default TypeOfQuestions;
