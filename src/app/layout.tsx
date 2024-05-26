'use client';

import localFont from 'next/font/local';
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

const generalSans = localFont({ src: './GeneralSans-Variable.woff2' });

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); 
  const isSanityStudio = pathname.startsWith('/studio');

  return (
    <html lang="en" className="font-light">
      <body className={generalSans.className}>
        {!isSanityStudio && <NavBar />}
          {children}
        {!isSanityStudio && <Footer />}
      </body>
    </html>
  );
}
