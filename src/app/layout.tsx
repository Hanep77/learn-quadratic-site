"use client";

import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./navbar";
import { MathJaxContext } from "better-react-mathjax";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const mathJaxConfig = {
  loader: { load: ["[tex]/color"] },
  tex: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
    displayMath: [["$$", "$$"], ["\\[", "\\]"]],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[rgba(28,3,50,1)]`}>
        <Navbar />
        <MathJaxContext config={mathJaxConfig}>
          {children}
        </MathJaxContext>
      </body>
    </html>
  );
}
