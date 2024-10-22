import { Inter, Raleway, Walter_Turncoat } from 'next/font/google'
//import localFont from 'next/font/local'

// define your variable fonts
const inter = Inter({
    subsets:['latin'],
    display:'swap',
    variable:'--font-inter',
    weight:['400', '700']
});
const raleway = Raleway({
    subsets:['latin'],
    display:'swap',
    variable:'--font-raleway',
    weight:['500', '700']
});

const walter = Walter_Turncoat({ 
    subsets:['latin'],
    display:'swap',
    variable: "--font-walter",
    weight: "400",
    style:'normal'
});

export { inter, raleway, walter }