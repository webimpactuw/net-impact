'use client';

import Image from 'next/image'
import DropDownButton from "./DropDownButton"
import DropDownButton2 from './DropDownButton2'
import { useState } from 'react';
import { usePathname } from "next/navigation";

export default function NavBar(){
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    const pathname = usePathname(); 
    const isSanityStudio = pathname.startsWith('/studio');

    return !isSanityStudio ? ( 
        <header className = "md:flex md:flex-row flex-col items-center px-8 sm:px-16 py-5 justify-between md:absolute w-full font-medium z-20"> {/*60 px horizontal 20 px vertical */}

            <div className="flex md:flex-none items-center justify-between hover:opacity-80 transition-all">
                <a href="/"><Image src="/logo.png" alt="My Image" width={64} height={64}/></a>
                <button className="md:hidden opacity-50 hover:opacity-100 transition" onClick={toggleNav}>
                    <svg clip-rule="evenodd" width="40" height="40" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                </button>
            </div>

            <ul className = {`${showNav ? 'flex' : 'hidden'} md:flex md:flex-row flex-col gap-6 md:my-0 my-6`}>    
                <li className = "text-base hidden lg:inline-block mr-10 hover:text-gray-400 transition-all"><a href = "/">Home</a></li>
                <li className="block">
                    <DropDownButton buttonName="About Us"/>
                </li>
                <li className="block">
                    <DropDownButton2 buttonName="Events"/>
                </li>
                <li className = "text-base inline-block mr-6 hover:text-gray-400 transition-all"><a href = "/projects">Projects</a></li>
                <li className = "text-base inline-block md:ml-5 hover:text-gray-400 transition-all"><a href = "/contacts">Contacts</a></li>
            </ul>
        </header>
    ) : <></>
}
