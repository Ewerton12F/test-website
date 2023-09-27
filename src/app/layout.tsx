import './globals.css';
import { Metadata } from 'next';
import {
  Cardo,
  DM_Serif_Display as DMsd,
  Jost,
  Oswald,
  Lexend,
  Quattrocento,
  DM_Sans,
  Vollkorn
} from 'next/font/google';
import Script from 'next/script';

import Footer from '@/components/Footer/Footer';

const cardo = Cardo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cardo'
});
const dmsd = DMsd({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dmsd'
});
const dm = DM_Sans({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm'
});
const volk = Vollkorn({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-volk'
});
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });
const quattrocento = Quattrocento({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-quattrocento'
});

export const metadata: Metadata = {
  title: 'Róbson Batista | Psicanálise',
  description: 'Atendimento psicológico'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w, d, s, l, i) {
              w[l] = w[l] || []
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
              const f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window,document,'script','dataLayer','GTM-PKJFT27P');`
          }}
        />
      </head>
      <body
        className={`
          ${cardo.variable} 
          ${dmsd.variable} 
          ${dm.variable} 
          ${jost.variable} 
          ${oswald.variable} 
          ${lexend.variable} 
          ${quattrocento.variable} 
          ${volk.variable} 
          font-sans
        `}
      >
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PKJFT27P"
          height="0"
          width="0"
        ></iframe>
        {children}
        <Footer />
      </body>
    </html>
  );
}
