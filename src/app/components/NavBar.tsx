import "./NavBarStyles.css";

export default function NavBar() {
    return (     
        <nav className="flex flex-row items-center justify-between bg-[#29FAD1] p-5">
            <ul id="navbar">
                <h1>
                    This is a NavBar 
                </h1>  
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Gallery</a></li>
                <li><a href="index.html">Events</a></li>
                <li><a href="index.html">Projects</a></li>
             </ul>
        </nav>
    );
};