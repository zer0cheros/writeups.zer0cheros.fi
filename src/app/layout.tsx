import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/layout/Container";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Writeups from Hack The Box, Zer0cheros',
  description:
    'Here are some writeups from Hack The Box, Zer0cheros. I hope you find them useful.',
    keywords: ['writeups', 'hackthebox', 'htb', 'zer0cheros','Visual', 'Bizness', 'Surveillance'],
    authors: [{name: 'Zer0cheros', url: 'https://zer0cheros.fi'}],
}

export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en" className={clsx(
      'h-full scroll-smooth bg-white antialiased',
    )}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="canonical" href="https://www.zer0cheros.fi" />
      <body className='h-full w-full font-kode font-extrabold'>
      <Analytics/>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
