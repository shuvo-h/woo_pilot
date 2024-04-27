import { Inter } from "next/font/google";
import localFont from 'next/font/local'

const interFont = Inter({ subsets: ["latin"] });

 
// Font files can be colocated inside of `app`
const monaSansFont = localFont({
  src: '../assets/fonts/Mona_Sans/Mona-Sans.woff2',
  display: 'swap',
})
 
export const fontFamily = {
    interFont,
    monaSansFont,
}