import React from "react";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./components/contact-form"));
const Socials = dynamic(() => import("./components/socials"));
const Address = dynamic(() => import("./components/address"));
const Email = dynamic(() => import("./components/email"));
const Phone = dynamic(() => import("./components/phone"));
const ContactUs = () => {
  return (
    <>
      <section className="py-16 bg-gray-100 font-poppins">
        <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7">
          <Address />
          <div className="flex flex-wrap mb-8 -mx-4">
            <Email />
            <Phone />
            <Socials />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
