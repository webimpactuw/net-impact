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
                <button className="md:hidden opacity-50 hover:opacity-100 transition" onClick={toggleNav}>
                    <svg clip-rule="evenodd" width="40" height="40" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m21 15.75c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-16.5c-.414 0-.75.336-.75.75s.336.75.75.75h16.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
                </button>
            </div>

            <ul className = {`${showNav ? 'hidden' : 'flex'} md:flex md:flex-row flex-col gap-6 md:my-0 my-6`}>    
                <li className = "text-base hidden lg:inline-block mr-10"><a href = "/">Home</a></li>
                <li className="block">
                    <DropDownButton buttonName="About Us"/>
                </li>
                <li className="block">
                    <DropDownButton buttonName="Events"/>
                </li>
                <li className = "text-base inline-block mr-6"><a href = "/projects">Projects</a></li>
                <li className = "text-base inline-block md:ml-5"><a href = "/contacts">Contacts</a></li>
            </ul>
        </header>
        
    )
}
