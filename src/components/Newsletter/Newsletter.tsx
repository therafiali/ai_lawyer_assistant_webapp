import React from 'react'
import { TypographyH1, TypographyP } from '../ui/myschema';
import { Button } from '../ui/button';

const Newsletter = () => {
    const mainHeading = `Newsletter`;
    const note = `Be a part of our newsletter group and stay updated with the latest news and updates`
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md sm:text-center">
                    <TypographyH1
                        text={mainHeading}
                        className="text-left my-8 sm:text-center md:my-16"
                    />
                    <form action="#">
                        <div className="items-center mx-auto  space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                            <div className="relative w-full">
                                <label
                                    htmlFor="email"
                                    className="hidden mb-2 text-sm font-medium  dark:text-gray-300"
                                >
                                    Email address
                                </label>
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <input
                                    className="block p-3 pl-10 w-full text-sm   rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Enter your email"
                                    type="email"
                                    id="email"
                                />
                            </div>

                        </div>
                        <Button >Subscribe</Button>
                       <TypographyP text={note} className='max-w-sm mx-auto' />
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Newsletter