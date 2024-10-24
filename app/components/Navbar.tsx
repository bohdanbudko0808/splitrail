"use client";
import { useState } from "react";
import { raleway } from '../fonts/fonts';
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";


interface Nav{
    title:string;
    link:string;
};
export default function Navbar() {
    const navigations: Nav[]=[
        {title:"Home",link:"/"},
        {title:"Products & Pricing",link:"/products-pricing"},
        {title:"FAQs", link:"/faqs"},
        {title:"Gallery", link:"/gallery" },
        {title:"Dogs Love Fence", link:"/dogs-love-fence"},
        {title:"About Us", link:"/about-us"},
        {title:"Contact Us", link:"/contact-us"},
        {title:"Now Franchising",link:"https://splitrailstorefranchise.com/"}
    ];
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return(
        <div className={`${raleway.variable} antialiased fixed-nav`} >
            <nav className="main-nav">
                <Link href="/" className='main-logo'>
                    <img className="" src="/Fence-Logo.png" alt="Fence-Logo.png" width="100%" />
                </Link>
                <div className="mobile-only">
                    <button onClick={toggle} className="">
                        {isOpen ? (
                        <IoClose />
                        ) : (
                        <FaBars />
                        )}
                    </button>
                
                    {isOpen && (
                        navigations.map((item, index) => (
                            <Link key={index} href={`${item.link}`} >
                                {item.title}
                            </Link>
                        ))
                    )}
                </div>
                <div className="desktop-only">
                    {navigations.map((item, index) => (
                        <Link key={index} href={`${item.link}`} >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
