import Link from "next/link";
import { walter } from '../fonts/fonts';
import { FaPhone, FaMapMarker  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface HeroContent {
    title: string;
    subtitle: string;
    textContent:string;
    bottomText:string;
}

const Hero: React.FC<HeroContent> = ({ title, subtitle, textContent, bottomText}) => {
    return(
        <div className="hero-section center">
            <div className="top-menu" >
                <Link href="/contact-us" className='top-menu-item white'>
                    <FaPhone />&nbsp;<span>Call Us</span>
                </Link>
                <Link href="/contact-us" className='top-menu-item white'>
                    <MdEmail />&nbsp;<span>Email Us</span>
                </Link>
                <Link href="/contact-us" className='top-menu-item white'>
                    <FaMapMarker />&nbsp;<span>Store Info</span>
                </Link>
            </div>
            <div className="hero-content center">
                <h1 className={`${walter.className} antialiased h1 white mb-0` }>{title}</h1>
                <h3 className={`${walter.className} antialiased h3 white` }>{subtitle}</h3>
                <Link href="/request-a-quote" className="btn-primary mt mb">
                    REQUEST A QUOTE
                </Link>
                <h2 className={`${walter.className} antialiased h2 red` }><b>{textContent}</b></h2>                
            </div>
            <h3 className={`${walter.className} antialiased h3 white` }>{bottomText}</h3>
        </div>
    );
}

export default Hero;