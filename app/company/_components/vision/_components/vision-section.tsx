import React from "react";
import { IconType } from "react-icons";
import { FaFire } from "react-icons/fa";
import { MdPolicy } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiBrain } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { PiTreeEvergreenFill } from "react-icons/pi";
export interface IServiceData {
  icon: IconType;
  desc: string;
  title: string
}
const VisionSectionOne = () => {
  const data: IServiceData[] = [
    {
      icon: MdPolicy,
      desc: 'Our core mission is to become the global leader in ethically sourced diamonds, offering top-quality, certified diamonds to the people while unwaveringly upholding ethical sourcing practices.',
      title: 'Ensuring Ethical Excellence'
    },
    {
      icon: VscWorkspaceTrusted,
      desc: 'Our second goal is to earn unwavering trust in the diamond market. Through diligent research and a robust network, we ensure the authenticity of every diamond, eliminating dishonest practices.',
      title: 'Unrivaled Trustworthiness'
    },
    {
      icon: FaFire,
      desc: 'Our third goal is to restore the timeless elegance of diamonds. Through precision craftsmanship, we aim to revive the charm and sophistication that these gems symbolize, celebrating their beauty.',
      title: 'Rekindling Elegance'
    },
    {
      icon: GiBrain,
      desc: 'Our vision centers on customer-centric excellence. Blue Spark is dedicated to prioritize customers, delivering exceptional service, and top-quality products right to your doorstep, ensuring satisfaction.',
      title: 'Our Philosophy'
    },
    {
      icon: FaHandsHoldingCircle,
      desc: 'Every Blue Spark Diamond adheres to ethical sourcing and stringent procedures. They proudly hold GIA Certification and Kimberly Process Certification, ensuring quality and responsibility.',
      title: 'Our Values'
    },
    {
      icon: PiTreeEvergreenFill,
      desc: "Environmental stewardship is our core focus. We meticulously consider every actions' environmental impact, striving to minimize harmful impacts and promote sustainability in all our processes.",
      title: 'Green Practices'
    },
  ]
  return (
    <>
      <div className="grid gap-x-4 gap-y-8 place-items-center lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {
          data?.map((item) => (
            <div key={item.title} className="flex flex-col gap-y-2 items-center text-[#585858] max-w-[30em] border px-4 py-6 shadow rounded border-l-[4px] border-sky-300 before:content-[''] relative before:absolute before:h-full before:w-0 before:top-0 before:border-t-[2px] before:border-sky-400 before:left-[-.2rem]  hover:before:w-[30%] hover:before:left-[50%]  hover:before:translate-x-[-50%] before:transition duration-500 delay-150 bg-white" data-aos="fade-up"
              data-aos-duration="1000">
              <p className="border p-2 w-fit rounded-full border-sky-400 bg-sky-500 "><item.icon className="text-[2.75rem] text-white" /></p>
              <h3 className="font-semibold text-[1.25rem]">{item.title}</h3>
              <p className="text-gray-500 text-center text-[.95rem]">{item.desc}</p>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default VisionSectionOne;
