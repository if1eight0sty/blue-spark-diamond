import React from "react";

const Timeline = () => {
  return (
    <section className="items-center py-24 bg-gray-100 font-poppins isolate">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center ">
            <div className="relative flex flex-col items-center">
              <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                TIMELINE
              </div>
              <h1 className="text-5xl font-bold leading-tight ">
                Company <span className="text-blue-500"> Timeline</span>
              </h1>
              <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div className="flex-1 h-2 bg-blue-200"></div>
                <div className="flex-1 h-2 bg-blue-400"></div>
                <div className="flex-1 h-2 bg-blue-600"></div>
              </div>
            </div>
            <p className="mb-16 text-base text-center text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              magni eius eaque? Pariatur numquam, odio quod nobis ipsum ex
              cupiditate?
            </p>
          </div>
        </div>
        <div className="w-full mx-auto lg:max-w-3xl">
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="w-px h-full bg-blue-300"></div>
            </div>
            <div>
              <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900  rounded-3xl">
                January 2020
              </h2>
              <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl ">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-gray-600 ">
                    Company Started
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    veniam libero facilis minus reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="w-px h-full bg-blue-300"></div>
            </div>
            <div>
              <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 rounded-3xl">
                February 2021
              </h2>
              <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-gray-600 ">
                    Website Launched
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    veniam libero facilis minus reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full ">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="w-px h-full bg-blue-300"></div>
            </div>
            <div>
              <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 rounded-3xl">
                September 2023
              </h2>
              <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow  rounded-3xl">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-gray-600">
                    Company Launched in Bangkok, Thailand
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    veniam libero facilis minus reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
              <div>
                <div className="flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full ">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
              </div>
              <div className="w-px h-full bg-blue-300"></div>
            </div>
            <div>
              <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium text-gray-100 bg-gradient-to-r from-blue-500 to-blue-900 rounded-3xl">
                January 2024
              </h2>
              <div className="relative flex-1 mb-10 bg-white border-b-4 border-blue-200 shadow rounded-3xl">
                <div className="relative z-20 p-6">
                  <p className="mb-2 text-xl font-bold text-gray-600">
                    Company Launched in U.K.
                  </p>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    veniam libero facilis minus reprehenderit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
