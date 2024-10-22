import { raleway } from '../fonts/fonts';
import Link from "next/link";
import Image from "next/image";

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
    return(
        <div className={`${raleway.variable} antialiased full-height fixed-nav`} >
            <nav className="main-nav">
                <Link href="/" className='main-logo'>
                    <Image className="" src="/Fence-Logo.png" alt="Fence-Logo.png" width={215} height={196} />
                </Link>
                {navigations.map((item, index) => (
                    <Link key={index} href={`${item.link}`} >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
