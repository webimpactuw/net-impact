import Link from "next/link"

export default function DropDownButton({buttonName = "Default", dropdownItems = []}){
    return (
    <div className = "sm:flex w-full sm:w-36 max-w-7xl justify-between">
        <Link href= "/about" className="flex flex-col sm:flex-row sm:items-center gap-2 relative group"> {/*removed justify between*/}
            <span className="group-hover:text-gray-400 transition-all">{buttonName}</span>

            <div className="hidden md:block">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70698 7.70734C7.51945 7.89481 7.26514 8.00013 6.99998 8.00013C6.73481 8.00013 6.4805 7.89481 6.29298 7.70734L0.635977 2.05034C0.540467 1.9581 0.464284 1.84775 0.411875 1.72575C0.359466 1.60374 0.33188 1.47252 0.330726 1.33974C0.329572 1.20696 0.354874 1.07529 0.405155 0.952389C0.455436 0.829493 0.529689 0.71784 0.623582 0.623948C0.717475 0.530055 0.829126 0.455802 0.952023 0.405521C1.07492 0.35524 1.2066 0.329939 1.33938 0.331092C1.47216 0.332246 1.60338 0.359833 1.72538 0.412242C1.84739 0.464651 1.95773 0.540832 2.04998 0.636343L6.99998 5.58634L11.95 0.636343C12.1386 0.454185 12.3912 0.35339 12.6534 0.355669C12.9156 0.357947 13.1664 0.463116 13.3518 0.648524C13.5372 0.833932 13.6424 1.08474 13.6447 1.34694C13.6469 1.60914 13.5461 1.86174 13.364 2.05034L7.70698 7.70734Z" fill="#11122D"/>
            </svg>
            </div>

            {/*dropdown */}
            <div className = "sm:absolute left-0 top-0 md:hidden sm:flex flex-row md:flex-col gap-2 transition-all duration-200 md:group-hover:flex md:opacity-0 hover:opacity-100">
                <p className="opacity-0 hidden sm:inline">iama3333333genius</p>
                <div className="border-t border-gray-400 w-156 hidden sm:inline">
                    
                </div>
                <Link href="/about/gallery" className="bg-gray-200 hover:bg-gray-300 rounded-md px-2 py-1 text-center md:text-left w-28 md:w-auto m-2 sm:m-0 inline-block transition-colors">
                Gallery
                </Link>
                <div className="border-t border-gray-400 w-156 hidden sm:inline">
                    
                </div>
                <Link href="/about/ourteam"className="bg-gray-200 hover:bg-gray-300 rounded-md px-2 py-1 text-center md:text-left w-28 md:w-auto m-2 sm:m-0 inline-block transition-colors">
                Our Team
                </Link>
            </div>
        </Link>
    </div>
    ) 
}
    