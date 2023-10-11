import React from "react";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

const GlobalNetwork = () => {
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
      <section className="flex justify-between gap-5 items-center bg-blue-100 px-10 lg:px-20 py-20 w-full">
        <div className="flex flex-col w-full lg:max-w-xl items-center">
          <h6 className="uppercase font-base text-sm mb-2">
            business across numerous countries
          </h6>
          <h3 className="text-6xl font-serif font-bold mb-5 tracking-wide">
            Global Network
          </h3>
          <p className="text-gray-500 font-normal mt-3 text-justify max-w-lg">
            Blue Spark Diamond Company has vast experience working with
            different cultures, and conducting business across numerous
            countries around the globe. Within Blue Spark, we think globally and
            have a progressive global mindset. We communicate in English,
            Spanish, Italian, Portuguese and Hindi. However, all connections we
            make are through appropriate channels, which makes us capable of
            importing and exporting worldwide within 72 hours.
          </p>
        </div>
        <Image
          width={700}
          height={500}
          src={getImageURL(
            300,
            600,
            "blue-spark/network"
          )}
          sizes="(max-width: 768px) 100vw,
                    (max-width: 100px) 20vw,
                    30vw"
          alt="a diagram of a diamond with the names of each diamond and the names of each diamond on the side of the diamond"
          className="object-cover rounded hidden lg:block"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="2000"
        />
      </section>
    </>
  );
};

export default GlobalNetwork;
