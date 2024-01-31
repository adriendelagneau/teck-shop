'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import CartIcon from './buttons/CartIcon';
import ThemeToggle from './buttons/ThemeToggle';


const Header = () => {
    const { data: session } = useSession();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 60);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    return (
        <header className={`w-full bg-white text-skin-base transition-all fixed top-0 h-16 z-50 ${!visible && 'top-[-64px]'} left-[50%] translate-x-[-50%] max-w-screen-2xl`}>
            <nav className='flex items-center justify-between w-full h-full px-4 py-2'>
                <Link href={"/"} className='hidden w-1/4 sm:inline-flex'>

                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 554.883 554.883" >
                        <g className="fill-current">
                            <path d="M277.334,27.482C124.414,28.192,0,153.178,0,306.092c0,46.439,11.643,92.219,33.66,132.785v-73.66 c0-13.576,4.832-26.168,13.302-36.971c-0.701-7.346-1.062-14.74-1.062-22.154c0-127.724,103.915-232.116,231.434-232.709 c127.73,0.591,231.645,104.985,231.645,232.709c0,8.211-0.455,16.393-1.314,24.52c7.361,10.258,11.518,22.012,11.518,34.605 v77.396c23.35-41.477,35.701-88.656,35.701-136.521C554.883,153.178,430.469,28.192,277.334,27.482z" />
                            <path d="M50.756,353.324c-1.172,3.84-1.796,7.818-1.796,11.896v70.994v33.045c0,32.109,38.241,58.141,85.417,58.141h35.964V307.08 h-35.964C93.192,307.08,58.825,326.918,50.756,353.324z" />
                            <path d="M503.881,469.26v-34.201v-69.838c0-2.506-0.26-4.973-0.713-7.396c-5.34-28.617-41.213-50.744-84.703-50.744H382.5V527.4 h35.965C465.641,527.4,503.881,501.369,503.881,469.26z" />
                        </g>
                    </svg>
                </Link>
                <div className='w-1/2 text-xl font-Lemon sm:text-center sm:text-3xl'>
                    <Link href={"/"} >Electro Store</Link>
                </div>
                <ul className='flex items-center justify-end w-1/4 gap-4 font-semibold'>
                    <li><ThemeToggle /></li>
                    <li>
                        {session?.user ? (
                            session?.user.role === "admin" ? (
                                <Link href={"/dashboard"}>Dashboard</Link>
                            ) : (
                                <Link href={`/profile/${session?.user?._id}`}>Profile</Link>
                            )
                        ) : (
                            <Link href={"/register"}>Login</Link>
                        )}
                    </li>
                    <li>
                        {session?.user.role !== "admin" && (<CartIcon />)}
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

