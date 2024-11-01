import React from 'react';
import { TypographyH1 } from '../ui/myschema';
import { Mail, Phone, MapPin, Facebook,  Instagram, Linkedin, Send, SendHorizonal } from 'lucide-react';
import { Button } from '../ui/button';

const ContactUs = () => {
    const mainHeading = `Contact Us`;

    return (
        <section>
            <TypographyH1
                text={mainHeading}
                className="text-left my-8 sm:text-center md:my-16"
            />
            {/* <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto  rounded-lg">
                <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                    <div>
                        <h1 className="text-4xl font-bold text-black">Get in Touch</h1>

                        <ul className="mt-12 space-y-8">
                            <li className="flex items-center">
                                <Mail size={16} color="black" />
                                <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                    info@example.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} color="black" />
                                <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                    +158 996 888
                                </a>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={16} color="black" />
                                <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                    123 Street 256 House
                                </a>
                            </li>
                        </ul>

                        <ul className="flex mt-12 space-x-4">
                            <li className="bg-sky_blue hover:bg-sky_blue h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <Facebook size={18} color="black" />
                                </a>
                            </li>
                            <li className="bg-sky_blue hover:bg-sky_blue h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <Linkedin size={18} color="black" />
                                </a>
                            </li>
                            <li className="bg-sky_blue hover:bg-sky_blue h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <Instagram size={18} color="black" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg">

                        <form className="mt-8 space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-sky_blue"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-sky_blue"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-sky_blue"
                            />
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-sky_blue"
                                defaultValue={""}
                            />
                            <button
                                type="button"
                                className="text-black  bg-sky_blue hover:bg-sky_blue tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
                            >
                              <Send color='black' />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}

<section className="body-font ">
  <div
    className="container flex flex-col md:flex-row lg:max-w-5xl w-full px-5 py-12 md:py-16 mx-auto section "
    id="contact-form"
  >
    <div className="md:w-1/3 w-full ">

      <p className="leading-relaxed text-xl text-gray-900">
        We're here to assist you! If you have any questions or need assistance,
        please feel free to reach out to us.
        <br />
        <br />
        You can also email us at  {" "}
        <a
          href="mailto:contact@example.com"
          className="font-semibold border-b-4 border-sky_blue"
        >
          contact@example.com
        </a>
      </p>
      <p className="leading-relaxed text-xl text-gray-900 mt-8">
         Connect with us on social media:
      </p>
      <span className="inline-flex mt-6 justify-center sm:justify-start">
        <a
          className="text-gray-500 hover:text-gray-900"
          target="_blank"
          href="https://twitter.com/example"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a
          className="ml-3 text-gray-500 hover:text-gray-900"
          href="https://www.instagram.com/example/"
          target="_blank"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
      </span>
    </div>
    <div className="md:w-2/3 w-full mt-10 md:mt-0 md:pl-28">
     
      <form action="send-contact.php" method="post" id="submit-contact-form">
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="name"
              className="leading-7 py-4 text-lg text-gray-900"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              
              className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="email"
              className="leading-7 py-4 text-lg text-gray-900"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              
              className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-900 py-1 px-1 leading-8 transition-colors duration-200 ease-in-out "
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 py-4 text-lg text-gray-900"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              
              className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out "
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
       <Button><SendHorizonal/> Send Message  </Button>
       
        </div>
      </form>
    </div>
  </div>
</section>



        </section>
    );
};

export default ContactUs;
