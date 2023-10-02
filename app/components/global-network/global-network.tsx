import React from "react";
import Image from "next/image";

import globalnetwork from "@/public/global-network.webp";

const GlobalNetwork = () => {
  return (
    <>
      <section className="flex justify-between gap-5 items-center bg-blue-100 px-10 py-20">
        <div className="flex flex-col max-w-xl">
          <h6 className="uppercase text-sm font-base mb-2">
            business across numerous countries
          </h6>
          <h3 className="text-6xl font-bold font-serif mb-5">Global Network</h3>
          <p className="text-gray-500 font-normal text-justify">
            Blue Spark Diamond Company has vast experience working with
            different cultures, and conducting business across numerous
            countries around the globe. Within Blue Spark, we think globally and
            have a progressive global mindset. We communicate in English,
            Spanish, Italian, Portuguese and Hindi. However, all connections we
            make are through appropriate channels, which makes us capable of
            importing and exporting worldwide within 72 hours.
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            width={700}
            height={500}
            src={globalnetwork}
            alt="global network"
            priority
            className=""
          />
        </div>
      </section>
    </>
  );
};

export default GlobalNetwork;
