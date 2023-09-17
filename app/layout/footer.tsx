import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import Logo5 from "@/public/logos/full-logo.png";
import background from "@/public/background/footer-background.webp";

const CopyRight = dynamic(() => import("./_components/footer/copy-right"));
const Socials = dynamic(() => import("./_components/footer/socials"));
const NavigationLinks = dynamic(
  () => import("./_components/footer/navigation-links")
);
const Subscribe = dynamic(() => import("./_components/footer/subscribe"));
const Contacts = dynamic(() => import("./_components/footer/contacts"));

const Footer = () => {
  return (
    <>
      <div
        className="flex flex-col bg-cover bg-center bg-white @container"
        style={{
          backgroundImage: `url('${background.src}')`,
        }}
      >
        {/* top container */}
        <div className="flex justify-center items-center px-5 py-16 lg:py-5">
          <Contacts />
        </div>
        <Image
          src="/certificate/sbu4rdchinhv7rvivggz"
          alt=""
          property=""
          width={200}
          height={200}
        />
        {/* horizontal bar */}
        <hr className="flex flex-col items-center justify-between mx-5 py-3" />
        {/* middle container */}
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-24 lg:max-w-6xl px-5">
            {/* left-middle */}
            <div className="flex flex-col items-center lg:items-start gap-5">
              {/* logo */}
              <Image
                src={Logo5}
                alt="logo"
                priority
                width={150}
                height={150}
                className=""
                style={{ width: "auto" }}
              />
              <p className="text-[#151542] text-sm font-light text-[13px] max-w-xs text-center lg:text-left">
                A tailored experience for all customers.
                <br />
                The Spark to your Elegance.
              </p>
              {/* Social Media Icons */}
              <Socials />
            </div>
            {/* mid-middle */}
            <NavigationLinks />
            {/* right-middle */}
            <Subscribe />
          </div>
        </div>
        {/* bottom container with copyrights and privacy policy */}
        <CopyRight />
      </div>
    </>
  );
};

export default Footer;
