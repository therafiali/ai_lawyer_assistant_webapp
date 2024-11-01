import React from "react";
import { svg1, svg2, svg3, svg4, svg5, svg6 } from "@/assets/svg/Sponser"; // Adjust path as needed

// Define a type for the sponsor
interface Sponsor {
  id: number;
  icon: () => JSX.Element; // Change to a function type
}

// Create an array of sponsors with the defined type
const sponsors: Sponsor[] = [
  { id: 1, icon: svg1 },
  { id: 2, icon: svg2 },
  { id: 3, icon: svg3 },
  { id: 4, icon: svg4 },
  { id: 5, icon: svg5 },
  { id: 6, icon: svg6 },
//   { id: 5, icon: svg6 },
];

const OurSponser: React.FC = () => {
  return (
    <section className="">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Our Sponsors
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex justify-center items-center">
              {sponsor.icon()} {/* Call the icon function here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSponser;
