import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Faqs() {
  return (
    <>
      <Navbar />
      <main className="left-gap">
      <Hero title="Questions & Answers" subtitle="Number One in Split Rail Fence" textContent="" bottomText="3 Locations Serving PA, NJ, DE, MD and Surrounding Areas"  />
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
