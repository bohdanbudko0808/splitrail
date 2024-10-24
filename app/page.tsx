import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { walter } from './fonts/fonts';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="left-gap">
        <Hero title="Split Rail Fence Store" subtitle="Number One in Split Rail Fence" textContent="In addition to traditional split rail we also have Wood, Vinyl and Aluminium fences" bottomText="Serving PA, NJ, DE, MD and Surrounding Areas"  />
        <div className="flex" style={{backgroundColor:'#5FCF34', paddingBottom:'40px'}}>
          <div className="flex column center" style={{backgroundColor:'#A80000', padding:'30px', width:'100%'}}>
            <h3 className={`${walter.className} h3 white`}>Pick Um</h3>
            <p className="white big">Any Quantity Large or Small</p>
          </div>
          <div className="flex column center" style={{backgroundColor:'#910000', padding:'30px', width:'100%'}}>
            <h3 className={`${walter.className} h3 white`}>Delivered</h3>
            <p className="white big">Ask For Our Competitive Rates</p>
          </div>
          <div className="flex column center" style={{backgroundColor:'#A80000', padding:'30px', width:'100%'}}>
            <h3 className={`${walter.className} h3 white`}>Installed</h3>
            <p className="white big">Free Estimates for Installations</p>
          </div>
        </div>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <Footer />
    </>
  );
}
