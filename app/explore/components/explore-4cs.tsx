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
        <div className="flex gap-x-3">
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
                  alt="an african man mining and collecting diamond from river"
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
        </div>
      </section>
    </>
  );
};

export default Explore4Cs;
