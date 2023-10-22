import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Varela, Abhaya_Libre } from "next/font/google";
import React from "react"
const varela = Varela({ subsets: ["latin-ext"], weight: "400" });
export const metadata: Metadata = {
  title: "MoshCode Portfolio",
  description: "My portfolio website",
};
export default function RootLayout({
  children,
}: {
  children:React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${varela.className} bg-white `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
