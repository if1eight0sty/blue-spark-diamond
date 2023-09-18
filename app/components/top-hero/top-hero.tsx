"use client";

import React from "react";
import "./style.css";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Landing = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const split = document.querySelectorAll(".split");
    split.forEach((el) => {
      const text = new SplitType(el as HTMLElement, {
        types: "chars",
      });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 50%",
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);
  return (
    <section className="w-full @container">
      <div className="relative pt-16 lg:pt-20">
        <div className="absolute top-0 right-0 flex w-full bg-gray-800 h-[78%] md:h-2/3 lg:h-[70%]"></div>
        <div className=" px-4 mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <video
                className="relative z-50 block w-full shadow-lg lg:h-4/6 rounded-lg border"
                autoPlay
                loop
                muted
              >
                <source src={"https://res.cloudinary.com/dnfq9u2nu/video/upload/v1695049529/blue-spark/videos/intro.webm"} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-0 right-0 hidden -mt-6 opacity-25 lg:block lg:-mt-20 lg:-mr-20 lg:w-auto bg-enable-background w-0 h-0 min-w-512 min-h-512">
                <svg
                  height="512px"
                  id="Layer_1"
                  version="1.1"
                  className="w-40 h-40 dark:fill-blue-500 fill-blue-500"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g>
                    <g>
                      <path d="M160,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z"></path>
                      <path d="M288,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z"></path>
                      <path d="M416,153.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V153.3z"></path>
                    </g>
                    <g>
                      <path d="M160,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z"></path>
                      <path d="M288,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z"></path>
                      <path d="M416,281.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V281.3z"></path>
                    </g>
                    <g>
                      <path d="M160,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z"></path>
                      <path d="M288,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z"></path>
                      <path d="M416,409.3c0,3.7-3,6.7-6.7,6.7h-50.5c-3.7,0-6.7-3-6.7-6.7v-50.5c0-3.7,3-6.7,6.7-6.7h50.5c3.7,0,6.7,3,6.7,6.7V409.3z"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center w-full mt-[2em] @[40em]:mt-[3em] lg:mt-[4em]">
        <h1 className="absolute -top-7 -left-[.35rem] text-[2.5rem] @[40em]:text-[2.75rem] @[40em]:-mt-[.3rem] @[40em]:-left-[.3rem] md:-left-[.5em] text-gray-900 font-bold opacity-[.1] w-full text-center select-none md:text-[3em] md:-mt-3">
          Blue Spark Diamond
        </h1>
        <h1 className="pl-2 text-[1.75em] @[40em]:text-[1.9rem] font-bold border-l-8 border-blue-400 md:text-4xl dark:text-[#585858]">
          The Spark To Your Intelligence
        </h1>
        <div className="text-[#585858] w-[80%] max-w-[25em] mt-3 text-base md:max-w-[30em] split">
          Blue Spark imports raw diamonds from African countries, follows
          ethical practices, and sells GIA certified diamonds. The
          company&apos;s diamonds are elegant and strong.
        </div>
      </div>
    </section>
  );
};

export default Landing;
