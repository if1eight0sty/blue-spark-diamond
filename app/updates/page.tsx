import React from "react";
import dynamic from "next/dynamic";

const Timeline = dynamic(() => import('./_components/timeline'), { loading: () => <p>Loading...</p>, });
const Faq = dynamic(() => import('./_components/faq'), { loading: () => <p>Loading...</p>, })

const Updates = () => {
  return (
    <section>
      <Timeline />
      <Faq />
    </section>
  );
};

export default Updates;
