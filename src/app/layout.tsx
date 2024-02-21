import type { Metadata } from "next";
import { Barlow } from 'next/font/google';
import "./globals.css";

const barlow = Barlow({
  weight: ['600', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Net Impact",
    default: "Net Impact",
  },
  // TODO: replace
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
