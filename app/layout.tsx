"use client";
import './globals.css'
import type { Metadata } from 'next'

import AOS from "aos";
import 'aos/dist/aos.css';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import AppBar from './layout/app-bar';
import News from './layout/news';
import Footer from './layout/footer';

export const metadata: Metadata = {
  title: 'Blue spark diamonds',
  description: "Blue Spark imports raw diamonds from African countries, follows ethical practices, and sells GIA certified diamonds.The company's diamonds are elegant and strong.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e: any) => { });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <html lang="en">
      <body className="bg-white dark:bg-white font-[Gantari] relative">
        <News />
        <AppBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
