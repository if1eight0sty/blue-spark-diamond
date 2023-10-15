"use client";

import React, { useState } from "react";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

const Certification = () => {
  // states
  const [currentSlide, setCurrentSlide] = useState(0);
  // get image url from cloudinary based on the image name/public id
  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };
  const slides = [
    {
      title: "GIA",
      description:
        "The Gemological Institute of America (GIA), headquartered in California, is a distinguished non-profit organization devoted to gemology and the jewelry arts. Since its establishment in the 1930s, GIA has been at the forefront of pioneering research in the field of gems. All diamonds available through Blue Spark are proudly GIA Certified.",
      image: getImageURL(300, 600, "blue-spark/certificate/gia"),
      authorized: "Authorized by GIA",
    },
    {
      title: "Kimberly",
      description:
        "The Kimberly Process, which has been active for over 19 years, unites organizations, civil societies, administration, and industries to reduce the flow of conflict diamonds. It has brought together 82 countries worldwide and is underpinned by the United Nations Mandate. All Diamonds sold through Blue Spark have received the Kimberly Process Certification.",
      image: getImageURL(200, 600, "blue-spark/certificate/WDC-Kimberly"),
      authorized: "Authorized by Kimberly Process",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const currentSlideData = slides[currentSlide];
  return (
    <section className="flex items-center min-h-screen bg-gray-100">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-600">
            Our Certifications
          </h1>
          <p className="max-w-xl mx-auto text-gray-500">
            We hold official authorization as a diamond importer, manufacturer,
            and exporter
          </p>
        </div>
        <div>
          <div className="relative px-4 text-center bg-white rounded shadow md:px-20 transition-[.5s] pt-6 flex items-center h-[80vh] md:h-[70dvh]">
            <div className="z-20 max-w-xl pb-12 pt-5 transition-[.5s] ">
              <div className="flex gap-x-1">
                <button
                  onClick={prevSlide}
                  className="absolute p-3 text-white -translate-y-1/2 bg-blue-400/50  hover:bg-blue-400 rounded -left-2 lg:-left-5 top-1/2 transition-[background-color] duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute p-3 text-white -translate-y-1/2 bg-blue-400/50   hover:bg-blue-400 rounded -right-2 lg:-right-5 top-1/2 transition-[background-color] duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-4 text-base leading-7 text-gray-400">
                {currentSlideData.description}
              </p>
              <h2 className="text-lg font-bold leading-9 text-black">
                {currentSlideData.title}
              </h2>
              <span className="block text-xs font-semibold text-blue-500 uppercase">
                {currentSlideData.authorized}
              </span>
              <div className="w-full rounded flex justify-center mt-5 sm:px-2 md:px-0">
                <Image
                  src={currentSlideData.image}
                  alt={`${currentSlideData.title} certification`}
                  priority
                  width="960"
                  height="300"
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 70vw,
                    30vw"
                  className="object-cover w-full h-full transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
