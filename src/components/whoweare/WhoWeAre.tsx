import React from "react";
import { TypographyH1 } from "../ui/myschema";
import Johndoe from '@/assets/Team/johndoe.jpg';
import TeamCard from "./TeamCard";

const WhoWeAre = () => {
  const mainHeading = `Who we are`;

  // Array of team members
  const teamMembers = [
    {
      imageSrc: Johndoe,
      name: "John Doe",
      role: "CEO & Founder",
      socialMedia: [
        { platform: "Facebook", link: "https://facebook.com/johndoe" },
        { platform: "Linkedin", link: "https://linkedin.com/in/johndoe" },
        { platform: "Instagram", link: "https://instagram.com/johndoe" },
      ],
    },
    {
      imageSrc: Johndoe,
      name: "Jane Doe",
      role: "CTO",
      socialMedia: [
        { platform: "Facebook", link: "https://facebook.com/janedoe" },
        { platform: "Linkedin", link: "https://linkedin.com/in/janedoe" },
        { platform: "Instagram", link: "https://instagram.com/janedoe" },
      ],
    },
    {
      imageSrc: Johndoe,
      name: "Alex Smith",
      role: "Lead Designer",
      socialMedia: [
        { platform: "Facebook", link: "https://facebook.com/alexsmith" },
        { platform: "Linkedin", link: "https://linkedin.com/in/alexsmith" },
        { platform: "Instagram", link: "https://instagram.com/alexsmith" },
      ],
    },
  ];

  return (
    <section>
      <TypographyH1
        text={mainHeading}
        className="text-left my-8 sm:text-center md:my-16"
      />
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member) => (
          <TeamCard 
            key={member.name} 
            imageSrc={member.imageSrc} 
            name={member.name} 
            role={member.role} 
            socialMedia={member.socialMedia} 
          />
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
