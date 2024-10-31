"use client";

import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { TypographyP } from "../ui/myschema";

interface SocialMedia {
  platform: string;
  link: string;
}

interface TeamCardProps {
  imageSrc: string | StaticImageData;
  name: string;
  role: string;
  socialMedia: SocialMedia[];
}

const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, role, socialMedia }) => {
  return (
    <section>

      <div className="flex flex-col items-center bg-white p-8 max-w-sm rounded-lg shadow transition duration-200 hover:shadow-lg">
        <Image className="rounded-md shadow-sm" src={imageSrc} alt={name} width={500} height={500} />
        <div className="py-4 px-2 space-y-2 flex flex-col justify-start items-start w-full">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h3>
          <span className="text-gray-500 dark:text-gray-400">{role}</span>
          <TypographyP text="Veteran industry expert in design and development of commercial grade technology solutions for businesses" />
          <ul className="flex space-x-4 sm:mt-0">
            {socialMedia.map(({ platform, link }) => {
              const Icon = platform === "Facebook" ? Facebook :
                platform === "Linkedin" ? Linkedin :
                  platform === "Instagram" ? Instagram : null;

              return (
                <li key={platform}>
                  <Link
                    href={link}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

    </section>
  );
};

export default TeamCard;
