import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="left-gap">
        <Hero title="Split Rail Fence Store" subtitle="Number One in Split Rail Fence" textContent="In addition to traditional split rail we also have Wood, Vinyl and Aluminium fences" bottomText="Sercing PA, NJ, DE, MD and Surrounding Areas"  />
        <div style={{backgroundColor:'#a80000'}}>

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
