"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitType from "split-type";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getCldImageUrl } from "next-cloudinary";
const FourCS = () => {
  gsap.registerPlugin(ScrollTrigger);
  React.useEffect(() => {
    const split = document.querySelectorAll(".split-4c");
    split.forEach((el) => {
      const text = new SplitType(el as HTMLElement, {
        types: "chars",
      });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 75%",
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
  }, []);

  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };
  return (
    <>
      <section className="flex pt-5 pb-10 min-h-[95dvh] bg-white @container mt-10">
        <div className="flex-1">
          <div className="lg:p-5 h-full">
            <div className="flex flex-col items-center justify-center h-full">
              {/* top section */}
              <div
                className="flex flex-col items-center justify-center"
                data-aos="zoom-in-up"
              >
                <p className="capitalize text-[8px] text-[#585858] font-light tracking-widest">
                  What makes a diamond
                </p>
                <h3 className="capitalize text-[#151542] text-xl md:text-2xl lg:text-3xl font-medium mb-2 md:mb-3 tracking-wide">
                  4 Cs of a Diamond
                </h3>
                <div className="flex items-center justify-center text-[12px] text-[#585858] font-light gap-5">
                  <p>Cut</p>
                  <p>Clarity</p>
                  <p>Color</p>
                  <p>Carat</p>
                </div>
              </div>
              {/* top section FIN*/}
              {/* four Cs section starts here */}
              <div className="relative flex flex-col items-center ">
                <div
                  className="flex flex-col items-center"
                  data-aos="zoom-in-up"
                >
                  {/* image section */}
                  <div className=" h-[20em] w-[20em] rounded-full flex justify-center items-center relative text-[#585858] px-2">
                    <Image
                      width="300"
                      height="300"
                      src={getImageURL(
                        800,
                        1080,
                        "blue-spark/diamonds/diamond4c"
                      )}
                      sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 40vw,
                    20vw"
                      alt="a diamond picture, vertical sharp diamond"
                      loading="lazy"
                      title="The picture of a diamond"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* image section fin*/}
                  {/* small description od 4c */}
                  <div className="text-gray-500 flex flex-col gap-y-2 text-[.95rem] leading-[1.75] max-w-[54em] text-justify px-4 -mt-10">
                    <p className="split-4c">
                      The 4Cs, namely Carat, Cut, Clarity and Color decide the
                      value of a diamond. This universal language was introduced
                      to the world and established through the GIA. The 4Cs are
                      very important in Diamond Grading reports. It&apos;s
                      crucial to learn about the 4Cs of Diamond before
                      purchasing one. At Blue Spark, we hope to educate our
                      customers on the 4Cs very comprehensively.
                    </p>
                  </div>
                  {/* description section fin */}
                </div>
                {/* 4c explain individually */}
                <div className="text-gray-500 mt-5  w-full grid grid-cols-2 gap-x-5 @[560px]:max-w-[50em] px-6 gap-y-3">
                  {/* cut section */}
                  <div data-aos="zoom-out-up" className="">
                    <h3>Cut</h3>
                    <p className="text-[.8rem]">
                      The cut of a diamond is often considered one of its most
                      important qualities. It takes patience, skill, and
                      experience for an expert diamond cutter to sculpt a
                      perfectly proportioned diamond, as inaccuracy will affect
                      the diamond&apos;s refraction or internal light
                      performance.
                    </p>
                  </div>
                  {/* cut section end */}
                  {/* color section start */}
                  <div data-aos="zoom-out-up" className="">
                    <h3>Color</h3>
                    <p className="text-[.8rem]">
                      Diamonds&apos; color is evaluated on a transparency scale
                      akin to pure water, graded from D (colorless) to Z
                      (off-white) due to natural variations. Precise assessment
                      requires controlled lighting and a master diamond
                      reference to ensure accurate results.
                    </p>
                  </div>
                  {/* color section fin */}
                  {/* clarity section start */}
                  <div data-aos="zoom-out-up" className="">
                    <h3>Clarity</h3>
                    <p className="text-[.8rem]">
                      Every diamond undergoes a magnificent eons-long journey,
                      forged by immense heat and pressure within the Earth, then
                      propelled to surface by volcanic activity. This process
                      commonly leads to formation of tiny inherent flaws known
                      as inclusions in most diamonds.
                    </p>
                  </div>
                  {/* clarity section fin */}
                  {/* carat section start */}
                  <div data-aos="zoom-out-up" className="">
                    <h3>Carat</h3>
                    <p className="text-[.8rem]">
                      In antiquity, carob seeds served as a diamond weight
                      reference. Modern diamond measurement has vastly improved,
                      now quantified in carats. One carat equals 0.2 grams,
                      divided into 100 points, so a 0.50-carat diamond is termed
                      a 50-point diamond.
                    </p>
                  </div>
                  {/* carat section fin */}
                </div>
                {/* individual description fin */}
                <Link href="/explore" className="mt-10">
                  <button data-aos="zoom-out-up" className="explore">
                    <span className="text-[#585858] explore-span">
                      Explore more
                    </span>
                  </button>
                </Link>
              </div>
              {/* four Cs section fin */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourCS;
