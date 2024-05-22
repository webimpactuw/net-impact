import Image from 'next/image'
import DropDownButton from "./DropDownButton"
import DropDownButton2 from './DropDownButton2'
export default function NavBar(){

    return( 

        <header className = "flex items-center px-16 py-5 justify-between absolute w-full font-medium z-10"> {/*60 px horizontal 20 px vertical */}

            <div>
                <Image src="/logo.png" alt="My Image" width={62} height={62}/>
            </div>

            <ul className = "flex gap-6">
                <li className = "text-base inline-block mr-10"><a href = "/">Home</a></li>
                <DropDownButton buttonName="About Us"/>
                <DropDownButton2 buttonName="Events"/>
                <li className = "text-base inline-block mr-6"><a href = "/projects">Projects</a></li>
                <li className = "text-base inline-block ml-5"><a href = "/contacts">Contacts</a></li>
            </ul>
        </header>
    )
}
