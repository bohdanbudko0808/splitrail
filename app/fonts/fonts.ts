import { Inter, Raleway } from 'next/font/google'
import localFont from 'next/font/local'

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

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const walter = localFont({ 
    src: "./WalterTurncoat.woff2",
    display:'swap',
    variable: "--font-walter",
    weight: "400",
    style:'normal'
});

export { inter, raleway, walter }