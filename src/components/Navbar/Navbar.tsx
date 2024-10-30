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


    return (
        <>

            <nav className="bg-slate-400 dark:bg-nav_dark  shadow-md shadow-black dark:shadow-white">
                <div className="max-w-screen-xl sm:px-4 py-3 mx-auto flex flex-col sm:flex-row justify-between items-center ">
                    <div className='flex justify-around sm:justify-start
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


                        <div className='flex sm:hidden'>
                            <ThemeToggle />
                        </div>

                    </div>
                    <Separator className='my-4 flex sm:hidden bg-bg_light dark:bg-white' />
                    <div className="flex items-center space-x-8">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}
                                        className="text-gray-900 dark:text-white hover:underline">
                                        {item.name}

                                    </Link>
                                </li>
                            ))}

                        </ul>
                        <div className='hidden sm:flex'>

                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar