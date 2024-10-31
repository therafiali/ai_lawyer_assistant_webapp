import React from "react";
import { TypographyH1 } from "../ui/myschema";

const TypeOfQuestions = () => {
    const mainHeading = `Types of questions you can ask`
  return (
    <section>
      <TypographyH1
        text={mainHeading}
        className="text-left my-8 sm:text-center md:my-16"
      />
    </section>
  );
};

export default TypeOfQuestions;
