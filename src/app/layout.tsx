import localFont from 'next/font/local';
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Metadata } from 'next';
import { client, sanityFetch } from '@/sanity/client';
import { SanityDocument } from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const generalSans = localFont({ src: './GeneralSans-Variable.woff2' });

const { projectId, dataset } = client.config();
function urlFor(source: SanityImageSource) {
  return projectId && dataset ? imageUrlBuilder({ projectId, dataset}).image(source) : null;
}

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
