import React from 'react';

interface FeaturedCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Accepts any valid React node for the icon
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ title, description, icon }) => {
  return (
    <section className="bg-white/70 p-4 rounded-md dark:bg-gray-900 shadow-sm hover:shadow-md shadow-sky_blue dark:shadow-sky_blue duration-200 transition-colors">
      <div className="space-y-8 md:gap-12 md:space-y-0">
        <div>
          <div className="flex justify-center items-center text-sky_blue mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCard;
