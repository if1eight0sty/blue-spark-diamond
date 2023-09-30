import "./globals.css";
import "aos/dist/aos.css";

import type { Metadata } from "next";

import AppBar from "./layout/app-bar";
import News from "./layout/news";
import Footer from "./layout/footer";
import Scroll from "./components/_scroll/scroll";
import { Suspense } from "react";
import Fallback from "./components/fallback";

export const metadata: Metadata = {
  title: "Blue spark diamonds",
  description:
    "Blue Spark imports raw diamonds from African countries, follows ethical practices, and sells GIA certified diamonds.The company's diamonds are elegant and strong.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white font-[Gantari] relative min-h-screen">
        <Suspense fallback={<Fallback />}>
          <Scroll>
            <News />
            <AppBar />
            {children}
            <Footer />
          </Scroll>
        </Suspense>
      </body>
    </html>
  );
}
