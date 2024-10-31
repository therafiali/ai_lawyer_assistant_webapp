import React from "react";

interface PromptCardProps {
  title: string; // Define the type for the title prop
}

const PromptCard: React.FC<PromptCardProps> = ({ title }) => {
  return (
    <section className="bg-white/70 p-4 rounded-full m-2 dark:bg-gray-900 shadow-sm hover:shadow-md shadow-sky_blue dark:shadow-sky_blue duration-200 transition-colors w-auto">
      <div className="space-y-8 md:gap-12 md:space-y-0">
        <div>
          <h3 className=" text-sm font-medium text-nowrap dark:text-white">{title}</h3>
        </div>
      </div>
    </section>
  );
};

export default PromptCard;
