"use client"
import Image from 'next/image'
import React from 'react'
import LogoLight from '@/assets/Logo/ym_l.png'
import LogoDark from '@/assets/Logo/ym_d.png'
import ThemeToggle from '../theme-switcher/ThemeToggle'
import Link from 'next/link'
import { Separator } from '../ui/separator'
const Navbar = () => {

    const [currentMode, setCurrentMode] = React.useState('')

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },

    ];


    React.useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme === "dark") {
            setCurrentMode('dark')
        } else {
            setCurrentMode('light')
        }

    }, [currentMode]);

    function HandleChangeMode(){
        if (currentMode === "light") {
            setCurrentMode("dark")
        }else {
            setCurrentMode("light")
        }
    }

66666666
    return (
        <>

            <nav className="bg-nav_light dark:bg-nav_dark  shadow-md shadow-sky_blue/2566">
                <div className="sm:max-w-screen-xl sm:px-4 py-3 mx-auto flex flex-col sm:flex-row justify-between items-center ">
                    <div className='flex justify-around sm:justify-between
                    w-full'>
                        {
                            currentMode === 'light' ? (
                                <>
                                    <Image className='flex sm:hidden' src={LogoLight} alt='Your Munshi Light' width={150} height={150} />
                                    <Image className='hidden sm:flex' src={LogoLight} alt='Your Munshi Light' width={200} height={200} />
                                </>
                            ) : (
                                <>
                                    <Image className='flex sm:hidden' src={LogoDark} alt='Your Munshi Dark' width={150} height={150} />
                                    <Image className='hidden sm:flex' src={LogoDark} alt='Your Munshi Dark' width={200} height={200} />
                                </>
                            )
                        }

<div className="hidden sm:flex items-center justify-end w-full mx-12 space-x-8">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}
                                        className=" dark:text-white duration-200 transition-colors hover:text-xl hover:text-sky_blue dark:hover:text-sky_blue">
                                        {item.name}

                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>

                        <div onClick={HandleChangeMode} className='flex justify-center items-center'>
                            <ThemeToggle  />
                        </div>

                    </div>
                    <Separator className='my-4 flex sm:hidden bg-bg_light dark:bg-white' />
                    <div className="sm:hidden flex items-center ">
                        <ul className="flex flex-row justify-between font-medium mt-0 space-x-8 rtl:space-x-reverse text-lg">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}
                                        className=" dark:text-white duration-200 transition-colors hover:text-xl hover:text-sky_blue dark:hover:text-sky_blue">
                                        {item.name}

                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar