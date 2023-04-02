import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';

import NavLogo from "@/assets/images/logos/qasa_nav_logo.png";

export default function NavBar() {
    // Enable when implementing mobile support
    // const [nav, setNav] = useState(false); 
    const [logo, setLogo] = useState(false);

    const toggleLogo = useCallback(() => {
        if (window.scrollY > 10) setLogo(true)
        else setLogo(false)
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", toggleLogo, { passive: true });
        return () => { window.removeEventListener("scroll", toggleLogo, { passive: true });}
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-30 bg-beige">
            <nav>
                <div className="flex flex-row justify-center gap-[50px] px-10 py-2">
                    <div className={`flex gap-12 align-center transition-all duration-500 ${logo ? "sm:-translate-x-12 md:-translate-x-24 lg:-translate-x-40" : ""}`}>
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
                        <div className="animate-fadeIn transition-opacity duration-500">
                            <Image className="p-5" src={NavLogo} alt="" fill objectFit='contain'/> 
                        </div>
                    </Link>
                    }
                    <div className={`flex gap-12 align-center transition-all duration-500 ${logo ? "sm:translate-x-12 md:translate-x-24 lg:translate-x-40" : ""}`}>
                        <Link href="/events">
                            <div className="nav-item">
                                Events
                            </div> 
                        </Link>
                        
                        <Link href="/contact">
                            <div className="nav-item">
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            
        </header>
    )
}