import React from "react";
import Image from "next/image";

import globalnetwork from "@/public/global-network.webp";

const GlobalNetwork = () => {
  return (
    <>
      <section className="flex justify-between items-center bg-yellow-100 px-10 py-20">
        <div className="flex flex-col max-w-xl">
          <h3 className="text-7xl font-medium">Global Network</h3>
          <p className="text-gray-500 font-normal">
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
          src={globalnetwork}
          alt="global network"
          priority
          className=""
        />
      </section>
    </>
  );
};

export default GlobalNetwork;
