import Image from "next/image";
export default function Footer() {
    return (
        <main className="bg-background place-content-bottom py-12 flex flex-row items-center place-content-center space-x-24">
            <img src="/NI+logo.png" alt="net-impact-logo" className="px-10 h-40"/>
            <div className="flex flex-col space-y-8 px-20">
                <ul className="flex space-x-4 place-content-center text-white">
                    <li><a href="" className="hover:text-light active:text-button">Home</a></li>
                    <li><a href="" className="hover:text-light active:text-button">About</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Team</a></li>
                    <li><a href="" className="hover:text-light active:text-button">CSR</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Gallery</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Events</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Contact</a></li>
                </ul>
                <hr className="w-full flex place-self-center"/>
                <ul className="flex space-x-10 place-content-center text-white">
                    <li ><a href="" className="hover:text-light active:text-button">Instagram</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Facebook</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Links</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Cookie Policy</a></li>
                    <li><a href="" className="hover:text-light active:text-button">Terms of Use</a></li>
                </ul>
            </div>
            <p className="flex flex-col space-y-8 px-10 text-center font-bold text-light hover:text-slate-400 active:text-black">Back to Top</p>
        </main>
    );
}