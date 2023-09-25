import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Varela } from "next/font/google";
const varela = Varela({ subsets: ["latin-ext"], weight: "400" });
export const metadata: Metadata = {
  title: "MoshCode Portfolio",
  description: "My portfolio website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
