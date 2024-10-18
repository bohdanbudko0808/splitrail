import { raleway } from '../fonts/fonts';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const navigation = ["Home", "Products & Pricing", "FAQs", "Gallery", "Dogs Love Fence", "About Us", "Contact Us", "Now Franchising"];
    return(
        <div className={`${raleway.variable} antialiased full-height fixed-nav`} >
            <nav className="main-nav">
                <Link href="/" className='main-logo'>
                    <Image className="" src="/Fence-Logo.png" alt="Fence-Logo.png" width={215} height={196} />
                </Link>
                {navigation.map((item, index) => (
                    <Link key={index} href="/" >
                        {item}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
