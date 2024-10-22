import type { Metadata } from "next";
import "./globals.css";
import { inter } from './fonts/fonts';


export const metadata: Metadata = {
  title: "Split Rail Fence Store - Split Rail Fence Store in Line Lexington, PA",
  description: "Split rail fence is timeless, beautiful and economical. It is the most popular fence in our area because it adds rustic charm to any property, serves many purposes, and has been around since colonial times. It adds distinction to your property and is very popular for use with horses and large animals as well as dogs and small pets (just add our welded wire).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
