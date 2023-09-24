import dynamic from "next/dynamic";
import React from "react";

const Welcome = dynamic(() => import("./_components/welcome"));
const Vision = dynamic(() => import("./_components/vision/vision"));
const Certification = dynamic(() => import("./_components/certification"));
const Location = dynamic(() => import("./_components/location"));
const Team = dynamic(() => import("./_components/team/team"));
const ContactUs = dynamic(() => import("./_components/contact-us/contact-us"));
const WhyBlueSpark = dynamic(
  () => import("./_components/why-blue-spark/why-blue-spark")
);

const Company = () => {
  return (
    <div className="flex flex-col">
      <Welcome />
      <Vision />
      <WhyBlueSpark />
      <Certification />
      <Location />
      <Team />
      <ContactUs />
    </div>
  );
};

export default Company;
