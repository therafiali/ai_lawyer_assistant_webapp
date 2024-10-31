import React from "react";
import { TypographyH1E } from "../ui/myschema";
import FeaturedCard from "../KeyFeature/FeaturedCard";
import { Clock, DollarSign, Users } from "lucide-react";
import CarouselSlider from "../CaroselSlider/Slider";


const BenefitsOfAIApp = () => {
  const mainHeading = `Benefits of `;

  const featuredData = [
    {
      title: "Cost Efficiency",
      description:
        "Reduce legal fees significantly compared to traditional services.",
      icon: (
        <DollarSign className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
      ),
    },
    {
      title: "24/7 Availability",
      description:
        "Access legal assistance anytime, ensuring you never miss a deadline.",
      icon: (
        <Clock className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
      ),
    },
    {
      title: "Personalized Legal Advice",
      description:
        "Receive tailored solutions based on your unique legal needs.",
      icon: (
        <Users className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
      ),
    },
    {
        title: "24/7 Availability",
        description:
          "Access legal assistance anytime, ensuring you never miss a deadline.",
        icon: (
          <Clock className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
        ),
      },
  ];

  return (
    <section>
      <TypographyH1E
        text={mainHeading}
        extra=" YourMunshi"
        className="text-left my-8 sm:text-center md:my-16"
      />

      
      <CarouselSlider slides={featuredData} />
     
    </section>
  );
};

export default BenefitsOfAIApp;
