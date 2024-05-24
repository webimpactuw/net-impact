import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const generalSans = localFont({ src: './GeneralSans-Variable.woff2' });

export const metadata: Metadata = {
  title: {
    template: "%s | Net Impact",
    default: "Net Impact",
  },
  // TODO: replace
  description: "...",
};

export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-light">
      <body className={generalSans.className}>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
