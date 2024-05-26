import localFont from 'next/font/local';
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Metadata } from 'next';
import { SanityDocument } from 'next-sanity';
import { sanityFetch, urlFor } from '@/sanity/client';

const generalSans = localFont({ src: './GeneralSans-Variable.woff2' });

export const metadata: Metadata = {
  title: {
    template: "%s | Net Impact",
    default: "Net Impact"
  },
};

export const dynamic = 'force-dynamic';
const ASSET_QUERY = `*[_type == "assets"]`;
const CUR_EVENTS_QUERY = `*[_type == "event" && !pastEvent]{shortName}`

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const assets = await sanityFetch<SanityDocument[]>({query: ASSET_QUERY});
  const events = await sanityFetch<SanityDocument[]>({query: CUR_EVENTS_QUERY});
  
  return (
    <html lang="en" className="font-light">
      <body className={generalSans.className}>
        <NavBar logo={assets[0].logo ? urlFor(assets[0].logo)?.width(544).url() : ''} events={events.map((event: SanityDocument) => event.shortName)} />
          {children}
        <Footer />
      </body>
    </html>
  );
}
