import Image from "next/image";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ITeamInfo } from "../interface";

const TeamMember = ({ data }: { data: ITeamInfo }) => {
  return (
    <>
      <div
        className="min-h-[50dvh] w-full md:max-w-6xl flex items-center gap-x-5 flex-col @[750px]:flex-row mt-3 @[750px]:mt-0 @[750px]:justify-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid place-items-center isolate overflow-hidden w-[20em]">
          <div className="h-[15em] border relative before:content-[''] before:absolute before:bg-white before:h-[5em] before:top-[-2.8em] before:right-[-2.6em] before:w-[6em] before:rotate-45 before:border">
            <Image
              src={data?.image}
              alt="Chairman of the Blue Spark Diamond Company"
              priority
              title={data?.title}
              width="960"
              height="300"
              sizes="(max-width: 768px) 100vw, (max - width: 1200px) 20vw, 30vw"
              className="object-cover w-full h-full border"
            />
            <div className="absolute bottom-0 right-[-2em] w-[2em] h-[11.25em]">
              <div className="flex flex-col items-center justify-around h-full gap-y-2 text-[#585858]">
                <span className="flex-1" />
                <span className="text-2xl font-bold hover:text-[#1877F2] cursor-pointer transition-[color] duration-200">
                  <FaFacebookSquare />
                </span>
                <span className="text-2xl font-bold hover:text-[#1D9BF0] cursor-pointer transition-[color] duration-200">
                  <FaTwitterSquare />
                </span>
                <span className="text-2xl font-bold hover:text-[#E4405F] cursor-pointer transition-[color] duration-200">
                  <FaInstagramSquare />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-items-center mt-3 @[750px]:place-items-start">
          <div className="max-w-[25em] @[750px]:items-start flex flex-col items-center">
            <h2 className="mb- text-xl font-bold">{data?.name}</h2>
            <p className="mb-3 text-sm text-blue-500">{data?.designation}</p>
            <p className="text-sm text-gray-400 text-center @[750px]:text-left">
              {data?.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
