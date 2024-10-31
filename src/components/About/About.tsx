import React from "react";
import { TypographyH1, TypographyP } from "../ui/myschema";


const Aboutus = () => {
  const mainHeading = `About us`;
  const describe = `YourMunshi exemplifies Pakistan’s commitment to embracing technological advancements, particularly in the legal domain. By leveraging AI capabilities, YourMunshi not only modernizes traditional legal processes but also sets a precedent for digital innovation in Pakistan’s legal sector. YourMunshi democratizes access to legal knowledge and streamlines processes, reducing time and resources for research, drafting, decision-making, and case preparation.
Behind YourMunshi’s virtual presence are passionate legal experts, tech enthusiasts, and data scientists from Pakistan and the U.S. who are committed to enhancing legal literacy, promoting justice, and making legal knowledge accessible to all.`
  return (
    <section>
      <TypographyH1
        text={mainHeading}
        className="text-left my-8 sm:text-center md:my-16"
      />
      <TypographyP text={describe} className="max-w-screen-md text-justify mx-auto" />
    </section>
  );
};

export default Aboutus;
