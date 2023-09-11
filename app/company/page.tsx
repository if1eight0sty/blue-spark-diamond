import dynamic from "next/dynamic";
import React from "react";

const Welcome = dynamic(() => import("./_components/welcome"));
const Vision = dynamic(() => import("./_components/vision/vision"));

const Company = () => {
  return (
    <div className="flex flex-col">
      <Welcome />
      <Vision />
      {/*  <Certification />
      <Location />
      <Team />
      <ContactUs /> */}
    </div>
  );
};

export default Company;
