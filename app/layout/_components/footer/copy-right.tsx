import React from "react";

const CopyRight = () => {
  return (
    <>
      <div className="flex flex-col w-full items-center lg:mt-10">
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm font-light text-[13px] max-w-xs text-center text-gray-200 lg:text-[#585858]">
            &copy;2023 Blue Spark Diamond | All Rights Reserved.
          </p>
          <p className="text-sm font-light text-[13px] max-w-xs text-center text-gray-100 lg:text-[#23527c] text-hover-gray-200 lg:hover:text-[#3d5b75] cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
