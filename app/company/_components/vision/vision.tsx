import dynamic from "next/dynamic";
import React from "react";


const VisionHeading = dynamic(() => import("./_components/vision-heading"))
const VisionSectionOne = dynamic(() => import("./_components/vision-section-one"))
const VisionSectionTwo = dynamic(() => import("./_components/vision-section-two"))

const Vision = () => {
    return (
        <section className="flex items-center justify-center bg-[#F7F6F3]">
            <div className="px-4 py-20 mx-auto max-w-7xl">
                <VisionHeading />
                <VisionSectionOne />
                <VisionSectionTwo />
            </div>
        </section>
    );
};

export default Vision;
