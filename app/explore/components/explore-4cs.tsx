import React from "react";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";
const Explore4Cs = () => {
  // get image url from cloudinary based on the image name/public id
  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };
  return (
    <>
      <section className="@container text-[#585858]" id="scroll-container">
        <div className="flex flex-col gap-x-3">
          {/* cut section */}
          <div className="w-full flex justify-center items-center flex-col px-6 @[50em]:px-[2.5em]">
            <div className="flex flex-col justify-center my-16">
              <div className="relative @[60em]:pl-[2em]">
                <h1 className="absolute -top-[2.25rem] left-0 text-[55px] lg:text-[80px] text-gray-900 opacity-10 font-bold opacity- leading-[4.5rem] select-none">
                  Cut
                </h1>
                <h3 className="text-[3rem] leading-[4rem] pb-5 relative before:absolute before:content-[''] before:h-[90%] before:top-0 before:left-0 before:w-[5px]  before:bg-blue-500 pl-4 font-semibold font-mono">
                  Cut
                </h3>
              </div>
              <div className="@[50em]:flex-row items-center justify-center flex flex-col">
                <Image
                  width="1080"
                  height="900"
                  src={getImageURL(
                    300,
                    600,
                    "blue-spark/four-cs/gia-cut"
                  )}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 20vw,
                    30vw"
                  alt="a diagram of a diamond with the names of each diamond and the names of each diamond on the side of the diamond"
                  className="h-[15em] @[30em]:h-[17em] @[50em]:flex-1 @[60em]:h-[25em] @[80em]:h-[30em]"
                />
                <div className="flex-1 @[30em]:px-4 [40em]:px-6 @[50em]:px-0 mt-3 @[50em]:mt-0 flex flex-col gap-y-3 font-medium  @[70em]:pl-[3em]">
                  <h3 className="text-[1.1rem] ">What is Cut?</h3>
                  <p className="text-base leading-7 text-[#585858]/80">
                    The cut of a diamond is often considered one of its most
                    important qualities. It takes patience, skill, and
                    experience for an expert diamond cutter to sculpt a
                    perfectly proportioned diamond, as inaccuracy will affect
                    the diamond&apos;s refraction or internal light performance.
                  </p>
                  <p className="text-base leading-7 text-[#585858]/80">
                    A diamond&apos;s cut refers to the quality of each tiny
                    surface, called a facet. A well-cut diamond will have
                    carefully crafted and positioned facets in areas known as
                    the crown, girdle, and pavilion. The facets are polished to
                    sizes and angles with mathematical precision, in order to
                    maximize the diamond&apos;s ability to reflect and return
                    light to the viewer. This is described as a diamond&apos;s
                    &lsquo;life&rsquo;.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-col px-6 @[50em]:px-[2.5em]">
            <div className="flex flex-col justify-center my-16">
              <div className="relative @[60em]:pl-[2em]">
                <h1 className="absolute -top-[2.25rem] left-0 text-[55px] lg:text-[80px] text-gray-900 opacity-10 font-bold opacity- leading-[4.5rem] select-none">
                  Clarity
                </h1>
                <h3 className="text-[3rem] leading-[4rem] pb-5 relative before:absolute before:content-[''] before:h-[90%] before:top-0 before:left-0 before:w-[5px]  before:bg-blue-500 pl-4 font-semibold font-mono">
                  Clarity
                </h3>
              </div>
              <div className="@[50em]:flex-row-reverse items-center justify-center flex flex-col">
                <Image
                  width="1080"
                  height="900"
                  src={getImageURL(
                    300,
                    600,
                    "blue-spark/four-cs/clarity"
                  )}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 20vw,
                    30vw"
                  alt="a diagram of the different sizes of diamonds and their corresponding sizes of diamonds and their corresponding sizes of diamonds and their corresponding sizes"
                  className="h-[15em] @[30em]:h-[17em] @[50em]:flex-1 @[60em]:h-[25em] @[80em]:h-[30em]"
                />
                <div className="flex-1 @[30em]:px-4 [40em]:px-6 @[50em]:px-0 mt-3 @[50em]:mt-0 flex flex-col gap-y-3 font-medium  @[70em]:pl-[3em]">
                  <h3 className="text-[1.1rem] ">What is Clarity?</h3>
                  <p className="text-base leading-7 text-[#585858]/80">
                    Diamonds, those timeless gems of immense beauty, originate from a fascinating journey spanning billions of years. They form deep within the Earth under tremendous heat and pressure, emerging during volcanic eruptions. This natural process leaves them with tiny natural features called inclusions, a testament to their origin and history.
                  </p>
                  <p className="text-base leading-7 text-[#585858]/80">
                    Although often invisible to the naked eye, inclusions play a pivotal role in determining a diamond&apos;s worth. Gemologists meticulously inspect these imperfections under 10x magnification, assessing their size, position, and characteristics. A diamond&apos;s clarity grade is then assigned based on these evaluations, with higher grades indicating greater rarity and value. Understanding the impact of inclusions is crucial for buyers and collectors alike, as it directly influences a diamond&apos;s market value and desirability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center flex-col px-6 @[50em]:px-[2.5em]">
            <div className="flex flex-col justify-center my-16">
              <div className="relative @[60em]:pl-[2em]">
                <h1 className="absolute -top-[2.25rem] left-0 text-[55px] lg:text-[80px] text-gray-900 opacity-10 font-bold opacity- leading-[4.5rem] select-none">
                  Carat
                </h1>
                <h3 className="text-[3rem] leading-[4rem] pb-5 relative before:absolute before:content-[''] before:h-[90%] before:top-0 before:left-0 before:w-[5px]  before:bg-blue-500 pl-4 font-semibold font-mono">
                  Carat
                </h3>
              </div>
              <div className="@[50em]:flex-row-reverse items-center justify-center flex flex-col">
                <Image
                  width="1080"
                  height="900"
                  src={getImageURL(
                    300,
                    600,
                    "blue-spark/four-cs/carat"
                  )}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 20vw,
                    30vw"
                  alt="a diagram of the different sizes of diamonds and their corresponding sizes of diamonds and their corresponding sizes of diamonds and their corresponding sizes"
                  className="h-[15em] @[30em]:h-[17em] @[50em]:flex-1 @[60em]:h-[25em] @[80em]:h-[30em]"
                />
                <div className="flex-1 @[30em]:px-4 [40em]:px-6 @[50em]:px-0 mt-3 @[50em]:mt-0 flex flex-col gap-y-3 font-medium  @[70em]:pl-[3em]">
                  <h3 className="text-[1.1rem]">What is Carat?</h3>
                  <p className="text-base leading-7 text-[#585858]/80">
                    In ancient times, carob seeds served as a reference for weighing diamonds. However, our diamond measurement techniques have significantly advanced. Today, we gauge a diamond&apos;s weight in carats, with one carat equivalent to 0.2 grams, further divided into 100 points. Therefore, a half-carat diamond, or 0.50 carats, is also referred to as a 50 points diamond.
                  </p>
                  <p className="text-base leading-7 text-[#585858]/80">
                    It&apos;s important to note that carat isn&apos;t a measure of size but rather weight. As carat weight increases, diamonds become increasingly rare, making heavier diamonds more valuable than the combined weight of multiple lighter ones. Consequently, a one-carat diamond typically commands a higher price than two half-carat diamonds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore4Cs;
