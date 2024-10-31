import React from 'react';
import { TypographyH1 } from '../ui/myschema';
import { Mail, Phone, MapPin, Facebook,  Instagram, Linkedin, Send } from 'lucide-react';

const ContactUs = () => {
    const mainHeading = `Contact Us`;

    return (
        <section>
            <TypographyH1
                text={mainHeading}
                className="text-left my-8 sm:text-center md:my-16"
            />
            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto bg-sky_blue/30 rounded-lg">
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
            </div>
        </section>
    );
};

export default ContactUs;
