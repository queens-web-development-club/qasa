import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

import NavLogo from "@/assets/images/qasa_nav_logo.png";

export default function NavBar() {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const toggleLogo = useCallback(event => {
        

        if (window.scrollY > 10) setLogo(true)
        else setLogo(false)
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", toggleLogo, { passive: true });
        return () => { window.removeEventListener("scroll", toggleLogo, { passive: true });}
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-30">
            <div className="relative">
                <nav className="w-full bg-beige">
                    <div className="flex flex-row justify-center gap-[50px] px-10 py-5">
                        <div className={`flex gap-12 align-center transition-all duration-500 ${logo ? "-translate-x-40" : ""}`}>
                            <Link href="/">
                                <div className="nav-item">
                                    Home
                                </div>
                            </Link>
                            <Link href="/about">
                                <div className="nav-item">
                                    About
                                </div>
                            </Link>
                        </div>
                        
                        {logo && 
                        <Link href="/">
                            <div className={`${logo ? "animate-fadeIn" : "animate-fadeOut"} transition-opacity duration-500`}>
                                <Image src={NavLogo} alt="" width={50} height={50}/> 
                            </div>
                        </Link>
                        }
                        <div className={`flex gap-12 align-center transition-all duration-500 ${logo ? "translate-x-40" : ""}`}>
                            <Link href="/events">
                               <div className="nav-item">
                                    Events
                                </div> 
                            </Link>
                            
                            <Link href="/">
                                <div className="nav-item">
                                    Contact
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                </nav>
            </div>
            
        </header>
    )
}