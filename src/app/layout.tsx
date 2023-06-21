import './globals.css';
import { Metadata } from 'next';
import {
  Cardo,
  DM_Serif_Display as DMsd,
  Jost,
  Oswald,
  Lexend,
  Quattrocento
} from 'next/font/google';

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
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });
const quattrocento = Quattrocento({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-quattrocento'
});

export const metadata: Metadata = {
  title: 'Róbson Batista - Psicanálise',
  description: 'Serviços para o público'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${cardo.variable} 
          ${dmsd.variable} 
          ${jost.variable} 
          ${oswald.variable} 
          ${lexend.variable} 
          ${quattrocento.variable} 
          font-sans
        `}
      >
        {children}
      </body>
    </html>
  );
}
