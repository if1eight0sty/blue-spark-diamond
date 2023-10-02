import React from "react";
import Image from "next/image";
import logoConcept from "@/public/logo-concept.webp";

const LogoConcept = () => {
  return (
    <>
      <section className="flex flex-col item-center justify-center py-20 lg:flex-row bg-indigo-50">
        <div className="flex flex-col items-start justify-center px-10">
          <h6 className="uppercase font-base text-sm text-start mb-2">
            CONCEPT BEHIND BLUE SPARK DIAMOND COMPANY'S LOGO
          </h6>
          <h3 className="text-5xl lg:text-6xl font-serif font-bold mb-5">
            The Wings Of The Hawk
          </h3>
          <p className="text-gray-500 font-normal mt-3 text-start max-w-xl">
            A bird with an understanding capacity like no other, which believes
            in the power of teamwork — The Hawk. The Hawk is not only a symbol
            of power but also a globally attached to freedom, liberty, power,
            and grandeur.
          </p>
          <p className="text-gray-500 font-normal mt-3 text-start max-w-xl">
            The Hawk is known as one of the most fore-sighted birds. To give
            flight to its vision and move with graceful speed, Blue Spark
            Diamond Company has used the Hawk's wings in its logo. The crown of
            this kingbird is also included in the logo, which adds to its
            greatness. The circular shape in the middle is a representation of
            the earth's circumference and the separated lines denote a
            destination that ends beyond the earth. Blue Spark Diamond Company's
            main area of expertise is the business of diamonds, therefore, the
            logo has a diagram of a diamond at its center.
          </p>
        </div>
        <div>
          <Image
            src={logoConcept}
            width={700}
            height={500}
            // src={getImageURL(
            //   300,
            //   600,
            //   "blue-spark/global-network"
            // )}
            sizes="(max-width: 768px) 100vw,
                            (max-width: 100px) 20vw,
                            30vw"
            alt="team - an image for Blue Spark Diamond logo concept"
            className="object-cover rounded my-10 px-10"
          />
        </div>
      </section>
    </>
  );
};

export default LogoConcept;
