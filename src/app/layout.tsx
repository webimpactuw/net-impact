import localFont from 'next/font/local';
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Metadata } from 'next';

const generalSans = localFont({ src: './GeneralSans-Variable.woff2' });

export const metadata: Metadata = {
  title: {
    template: "%s | Net Impact",
    default: "Net Impact"
  },
};

export const dynamic = 'force-dynamic';
const ASSET_QUERY = `*[_type == "assets"]`;

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
