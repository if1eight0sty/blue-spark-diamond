import React from "react";
import Image from "next/image";
import team from "@/public/team.webp";

const Team = () => {
  return (
    <>
      <section className="bg-[#F7F6F3] flex flex-col md:items-center">
        <div className="flex flex-col items-center justify-center px-10 py-20">
          <div className="flex flex-col items-start md:items-center justify-center">
            <h6 className="uppercase font-base text-sm text-start md:text-center mb-2">
              THE PEOPLE WHO MAKE BLUE SPARK
            </h6>
            <h3 className="text-5xl lg:text-6xl font-serif font-bold mb-5">
              The Blue Spark Team
            </h3>
            <p className="text-gray-500 font-normal mt-3 text-start md:text-center max-w-sm">
              We believe that the key to a successful company is teamwork, and
              we have assembled a team with unmatched experience and passion.
            </p>
          </div>
          <Image
            width={700}
            height={500}
            // src={getImageURL(
            //   300,
            //   600,
            //   "blue-spark/global-network"
            // )}
            sizes="(max-width: 768px) 100vw,
                            (max-width: 100px) 20vw,
                            30vw"
            src={team}
            alt="team - an image of a teamwork"
            className="object-cover rounded mt-10 px-10"
          />
        </div>
        <p className="text-gray-500 px-10 pb-20 rounded-lg font-normal text-start md:text-center max-w-sm md:max-w-md">
          We invest in our people. Not just those people who are currently with
          us on the team, but also those who show potential for growth. We
          mentor them and encourage them to follow the culture and achieve
          growth.
        </p>
      </section>
    </>
  );
};

export default Team;
