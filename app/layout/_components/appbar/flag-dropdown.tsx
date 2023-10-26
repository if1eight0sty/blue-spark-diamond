"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IFlagData } from "./interface";
import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
import { getCldImageUrl } from "next-cloudinary";

const FlagDropdown = () => {
  // stores
  const setCountry = useGlobalStore(
    (state: IUseGlobalStore) => state.setCountry
  );
  // get image url from cloudinary based on the image name/public id
  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };
  // states
  // open states -> opens the dropdown for country selection
  const [isOpen, setIsOpen] = useState(false);
  // flagData -> contains the flag and country code
  const [flagData, setFlagData] = useState<IFlagData>({
    flag: getImageURL(200, 400, "blue-spark/country-flags/Nepal-Flag"),
    country: "NP",
  } as IFlagData);
  // handlers
  // opens the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  // closes the dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };
  // handles the flag change
  const handleFlagChange = (flag: IFlagData) => {
    setFlagData(flag);
    setIsOpen(false);
    setCountry(flag.country);
  };

  return (
    <div className="@[50em]:w-[6.5em]">
      <div className={`relative group`}>
        <button
          className="flex items-center w-full px-2 @[50em]:px-4 font-medium text-gray-100  focus:text-gray-100 focus:outline-none "
          type="button"
        >
          <div className="flex items-center gap-x-1">
            <Image
              src={flagData?.flag}
              alt="Nepal flag"
              priority
              width={150}
              height={150}
              className="h-[1em] w-[1em] @[50em]:w-[1.22em] @[50em]:h-[1.22em] object-cover"
            />
            <p className="mt-[.22rem] @[50em]:text-[#505050] text-[.9rem] ">
              {flagData?.country}
            </p>
            <svg
              className={`w-[1.2rem] h-[1.2rem] ml-auto fill-current mt-[3px] ${
                isOpen ? "transform rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                className="fill-white @[50em]:fill-[#505050]"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div onClick={closeDropdown} className="fixed inset-0 z-40"></div>
        )}
        <ul className="absolute mt-1 pt-2 pb-1 font-medium text-blue-600 bg-white border-t-2 border-blue-600 rounded shadow-lg hidden group-hover:block hover:block z-40">
          <div
            className={` absolute right-3 inline-block w-6 overflow-hidden -translate-x-1/2 -top-3 group-hover:block hover:block`}
          >
            <div className="w-3 h-3 origin-bottom-left transform rotate-45 bg-blue-600 dark:bg-blue-400 drop-shadow"></div>
          </div>
          <li>
            <div
              className="flex items-center justify-between px-2 @[50em]:px-4  py-2 whitespace-no-wrap border-b border-blue-200  hover:bg-blue-100 cursor-pointer"
              onClick={() =>
                handleFlagChange({
                  flag: getImageURL(
                    200,
                    400,
                    "blue-spark/country-flags/Nepal-Flag"
                  ),
                  country: "NP",
                })
              }
            >
              <div className="flex items-center gap-x-1">
                <Image
                  src={getImageURL(
                    200,
                    400,
                    "blue-spark/country-flags/Nepal-Flag"
                  )}
                  alt="Nepal's national flag"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 20vw, 30vw"
                  width={150}
                  height={150}
                  className="h-[1em] w-[1em] @[50em]:w-[1.22em] @[50em]:h-[1.22em] object-cover"
                />
                <p className="mt-[.22rem] @[50em]:text-[#505050] text-[.9rem]">
                  NP
                </p>
              </div>
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-between px-2 @[50em]:px-4 py-2 whitespace-no-wrap border-b border-blue-200 dark:border-gray-600 dark:hover:bg-gray-600 hover:bg-blue-100 cursor-pointer"
              onClick={() =>
                handleFlagChange({
                  flag: getImageURL(
                    200,
                    400,
                    "blue-spark/country-flags/Thailand-Flag"
                  ),
                  country: "TH",
                })
              }
            >
              <div className="flex items-center gap-x-1">
                <Image
                  src={getImageURL(
                    200,
                    400,
                    "blue-spark/country-flags/Thailand-Flag"
                  )}
                  alt="Thailand's national flag"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 20vw, 30vw"
                  width={150}
                  height={150}
                  className="h-[1em] w-[1em] @[50em]:w-[1.22em] @[50em]:h-[1.22em] object-cover"
                />
                <p className="mt-[.22rem] @[50em]:text-[#505050] text-[.9rem]">
                  TH
                </p>
              </div>
            </div>
          </li>
          <li>
            <div
              className="flex items-center justify-between px-2 @[50em]:px-4 py-2 whitespace-no-wrap border-b border-blue-200 dark:border-gray-600 dark:hover:bg-gray-600 hover:bg-blue-100 cursor-pointer"
              onClick={() =>
                handleFlagChange({
                  flag: getImageURL(
                    200,
                    400,
                    "blue-spark/country-flags/UK-Flag"
                  ),
                  country: "UK",
                })
              }
            >
              <div className="flex items-center gap-x-1">
                <Image
                  src={getImageURL(
                    200,
                    400,
                    "blue-spark/country-flags/UK-Flag"
                  )}
                  alt="United Kingdom's national flag"
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 20vw, 30vw"
                  width={150}
                  height={150}
                  className="h-[1em] w-[1em] @[50em]:w-[1.22em] @[50em]:h-[1.22em] object-cover"
                />
                <p className="mt-[.22rem] @[50em]:text-[#505050] text-[.9rem]">
                  UK
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlagDropdown;
