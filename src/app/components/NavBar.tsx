'use client';

import Image from 'next/image'
import DropDownButton from "./DropDownButton"
import { useState } from 'react'

export default function NavBar(){
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }
    
    return( 

        <header className = "md:flex md:flex-row flex-col items-center px-16 py-5 justify-between md:absolute w-full font-medium z-10"> {/*60 px horizontal 20 px vertical */}

            <div className="flex md:flex-none items-center justify-between">
                <Image src="/logo.png" alt="My Image" width={62} height={62}/>
                <button className="md:hidden w-10 h-10 bg-green-400" onClick={toggleNav}></button>
            </div>

            {
            <ul className = "flex md:flex-row flex-col gap-6 md:my-0 my-6 border-b border-gray-400">
                <li className = "text-base hidden lg:inline-block mr-10"><a href = "/">Home</a></li>
                <li className="block">
                    <DropDownButton buttonName="About Us"/>
                </li>
                <li className="block">
                    <DropDownButton buttonName="Events"/>
                </li>
                <li className = "text-base inline-block mr-6"><a href = "/projects">Projects</a></li>
                <li className = "text-base inline-block md:ml-5 md:mb-0 mb-6"><a href = "/contacts">Contacts</a></li>
            </ul>
            }
        </header>
        
    )
}
