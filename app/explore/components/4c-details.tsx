"use client";
import React from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const FourCDetails = () => {
  // animating the left content
  // keeping it sticky until the right content is completely scrolled
  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.on("scroll", (e: any) => {});
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const mainContainer = document.getElementById("main-container");
    const leftContent = document.getElementById("left-content");
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({ paused: true });
    timeline.fromTo(
      leftContent,
      { y: 10 },
      { y: "145vh", duration: 1.5, ease: "sine.out" },
      0
    );
    ScrollTrigger.create({
      animation: timeline,
      trigger: mainContainer,
      start: "top top",
      end: "bottom center",
      scrub: true,
    });
  }, []);
  return (
    <>
      {/* main section stats here */}
      <section className="@container">
        <div
          id="main-container"
          className="bg-gray-900 pt-28 px-[1.5rem] @[30em]:px-[2em] @[50em]:flex-row flex flex-col @[50em]:px-[3em] @[60em]:px-[4em] @[50em]:justify-between"
        >
          {/* Four Cs section starts here */}
          {/* Four Cs heading for large screen i.e above 50em screen size */}
          <div id="left-content" className="flex-1 hidden @[50em]:flex">
            <div className="relative">
              <h1 className="absolute -top-20 left-0 text-[70px] lg:text-[100px] font-bold opacity-5  leading-[4.5rem] w-[3em]">
                4 Cs Of A Diamond
              </h1>
              <h3 className="text-white w-[3em] text-[4rem] leading-[4rem] pb-5 relative before:absolute before:content-[''] before:h-[90%] before:top-0 before:left-0 before:w-[5px]  before:bg-blue-500 pl-4 @[50em]:pl-8">
                4 Cs Of A Diamond
              </h3>
            </div>
          </div>
          {/* Four Cs heading for small screen i.e below 50em screen size */}
          <div className="@[50em]:hidden">
            <div className="relative">
              <h1 className="absolute -top-20 left-0 text-[80px] lg:text-[100px] font-bold opacity-5 md:block leading-[4rem] w-[3em]">
                4 Cs Of A Diamond
              </h1>
              <h3 className="text-white w-[3em] text-[3.5rem] leading-[3rem] pb-5 relative before:absolute before:content-[''] before:h-[90%] before:top-0 before:left-0 before:w-[5px]  before:bg-blue-500 pl-4 @[50em]:pl-8">
                4 Cs Of A Diamond
              </h3>
            </div>
          </div>
          {/* Four Cs heading FIN here */}
          {/* Four Cs details starts here */}
          {/* A short details for each Cs are given */}
          <div
            id="right-content"
            className="h-[180dvh] flex-1  flex flex-col @[60em]:justify-around mt-10 @[50em]:mt-0 text-gray-200"
          >
            {/* cut section starts here */}
            <div className="">
              <div className="relative">
                <h1 className="absolute -top-[3rem] lg:-top-[4.25rem] left-0 text-[50px] lg:text-[70px] font-bold text-gray-200 opacity-5 ">
                  Cut
                </h1>
                <h1 className="pl-2 text-[1.75rem] @[50em]:text-[2rem] font-bold border-l-[5px] border-blue-400 dark:text-white">
                  Cut
                </h1>
              </div>
              <p className="max-w-[30em] text-justify mt-6 mb-10 text-base leading-7 text-gray-4 ">
                The cut of a diamond is often considered one of its most
                important qualities. It takes patience, skill, and experience
                for an expert diamond cutter to sculpt a perfectly proportioned
                diamond, as inaccuracy will affect the diamond&apos;s refraction
                or internal light performance.
              </p>
            </div>
            {/* cut section FIN here */}
            {/* clarity section starts here */}
            <div className="">
              <div className="relative">
                <h1 className="absolute -top-[3rem] lg:-top-[4.25rem] left-0 text-[50px] lg:text-[70px] font-bold text-gray-200 opacity-5 ">
                  Clarity
                </h1>
                <h1 className="pl-2 text-[1.75rem] @[50em]:text-[2rem] font-bold border-l-[5px] border-blue-400 dark:text-white">
                  Clarity
                </h1>
              </div>
              <p className="max-w-[30em] text-justify mt-6 mb-10 text-base leading-7 text-gray-4">
                Every diamond undergoes a magnificent eons-long journey, forged
                by immense heat and pressure within the Earth, then propelled to
                the surface by volcanic activity. This process commonly leads to
                the formation of tiny inherent flaws known as inclusions in most
                diamonds.
              </p>
            </div>
            {/* clarity section FIN here */}
            {/* color section starts here */}
            <div className="">
              <div className="relative">
                <h1 className="absolute -top-[3rem] lg:-top-[4.25rem] left-0 text-[50px] lg:text-[70px] font-bold text-gray-200 opacity-5 ">
                  Color
                </h1>
                <h1 className="pl-2 text-[1.75rem] @[50em]:text-[2rem] font-bold border-l-[5px] border-blue-400 dark:text-white">
                  Color
                </h1>
              </div>
              <p className="max-w-[30em] text-justify mt-6 mb-10 text-base leading-7 text-gray-4">
                Diamonds&apos; color is evaluated on a transparency scale akin
                to pure water, graded from D (colorless) to Z (off-white) due to
                natural variations. Precise assessment requires controlled
                lighting and a master diamond reference to ensure accurate
                results.
              </p>
            </div>
            {/* color section FIN here */}
            {/* carat section starts here */}
            <div className="">
              <div className="relative">
                <h1 className="absolute -top-[3rem] lg:-top-[4.25rem] left-0 text-[50px] lg:text-[70px] font-bold text-gray-200  opacity-5">
                  Carat
                </h1>
                <h1 className="pl-2 text-[1.75rem] @[50em]:text-[2rem] font-bold border-l-[5px] border-blue-400 dark:text-white">
                  Carat
                </h1>
              </div>
              <p className="max-w-[30em] text-justify mt-6 mb-10 text-base leading-7">
                In antiquity, carob seeds served as a diamond weight reference.
                Modern diamond measurement has vastly improved, now quantified
                in carats. One carat equals 0.2 grams, divided into 100 points,
                so a 0.50-carat diamond is termed a 50-point diamond.
              </p>
            </div>
            {/* carat section FIN here */}
          </div>
        </div>
      </section>
      {/* main section FIN here */}
    </>
  );
};

export default FourCDetails;
