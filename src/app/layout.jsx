import "./globals.css";

import { Inter } from "next/font/google";

import Header from "@/components/global/layout/header/Header";
import Main from "@/components/global/layout/Main";
import Footer from "@/components/global/layout/footer/Footer";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Interview Test - Himanshu",
  description: "Frontend Developer Interview Test",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}