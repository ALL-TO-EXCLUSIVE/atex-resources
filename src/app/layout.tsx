import type { Metadata } from "next";
import { Inter as FontSans, Roboto } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontRoboto = Roboto({
  subsets:["latin"],
  variable:"--font-roboto",
  weight:["100","300","400","500","700","900"],
  style:["normal","italic"]
})

export const metadata: Metadata = {
  title: "atex resources",
  description: "gtu resources for computer engineering students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={cn(
          "min-h-screen bg-black/[99%] text-white font-sans antialiased",
          fontSans.variable, fontRoboto.variable, fontRoboto.className, fontSans.className
        )}>
          <Navbar/>
          {children}
          <Footer/>
          <Toaster />
          </body>
    </html>
  );
}
