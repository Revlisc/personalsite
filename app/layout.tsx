import '@/ui/global.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {Lato, Roboto} from 'next/font/google';
// Add the imported icons to the library
library.add(fas, fab, far);

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400'],
})


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    
    return (
      
      <html lang="en" className={`${lato.variable} ${roboto.variable}`}>
        <body>{children}</body>
      </html>
    );
  }