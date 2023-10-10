import dynamic from "next/dynamic";
import React from "react";

const VisionHeading = dynamic(() => import("./_components/vision-heading"));
const VisionSection = dynamic(
  () => import("./_components/vision-section")
);

const Vision = () => {
  return (
    <section className="bg-[#F7F6F3] @container">
      <div className="px-4 py-20 @[600px]:px-8 @[800px]:px-12 @[1250px]:px-20">
        <VisionHeading />
        <VisionSection />
      </div>
    </section>
  );
};

export default Vision;
