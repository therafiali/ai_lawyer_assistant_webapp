import React from "react";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Freelance React Developer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    quote:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
  },
  {
    id: 2,
    name: "Jacob Jones",
    role: "Digital Marketer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    quote:
      "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Graphic Designer",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    quote:
      "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              2,157 people have said how good Rareblocks
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

     

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #BBDEFB -0.55%, #90CAF9 50%, #E3F2FD 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonialsData.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col overflow-hidden shadow-xl"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className="w-5 h-5 text-[#FDB241]"
                          />
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          “{testimonial.quote}”
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
