import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const generalSans = localFont({ src: './GeneralSans-Variable.woff2' });

export const metadata: Metadata = {
  title: {
    template: "%s | Net Impact",
    default: "Net Impact",
  },
  // TODO: replace
  description: "...",
};

// TODO: change layout to include NavBar at top and Footer at bottom
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-light">
      <body className={generalSans.className}>{children}</body>
    </html>
  );
}
