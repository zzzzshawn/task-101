import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const normalSerifBold = localFont({
  src: "./fonts/normal-serif-bold.woff2",
  variable: "--font-serif-bold",
  weight: "100 900",
});

const normalSerifReg = localFont({
  src: "./fonts/normal-serif-bold.woff2",
  variable: "--font-serif-reg",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SSV",
  description: "Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${normalSerifBold.variable} ${normalSerifReg.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
