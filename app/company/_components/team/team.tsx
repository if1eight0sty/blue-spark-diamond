import React from "react";
import dynamic from 'next/dynamic'

import chairman from "@/public/team/chairman.webp";
import ceo from "@/public/team/ceo.webp";
import md from "@/public/team/md.webp";
import { ITeamInfo } from "./interface";

const TeamHeading = dynamic(() => import("./components/team-heading"))
const TeamMember = dynamic(() => import("./components/team-member"))

const Team = () => {
  const teamInfo: ITeamInfo[] = [
    {
      name: 'Yadav Prasad Pathak',
      designation: "Chairman (The Man Behind Blue Spark Diamond)",
      desc: "Mr. Pathak, the visionary leader behind Blue Spark Diamond, has played a pivotal role since its inception. His guiding vision has been instrumental in shaping the company. Blue Diamond and Mr.Pathak both strive to restore elegance to diamonds.",
      image: chairman,
      title: "Chairman: Yadav Prasad Pathak"
    },
    {
      name: 'Sher Bahadur Karki',
      designation: "Chairman (The Man Behind Blue Spark Diamond)",
      desc: " With a keen eye for diamonds and extensive industry expertise, Mr.Karki is a seasoned figure in the Nepalese diamond market. With over 50 years of experience, he serves as the guiding force at Blue Spark, blending his experience and passion to create a strong presence.",
      image: ceo,
      title: "CEO: Sher Bahadur Karki"
    },
    {
      name: 'Rohit Bhattarai',
      designation: "Managing Director of the Blue Spark Diamond Company",
      desc: "As of July 13, 2021, Mr. Rohit Bhattarai serves as the acting managing director of Blue Spark Diamond International Company. With a decade of experience in the diamond industry, Mr. Bhattarai has notably worked within the Rough Diamond Division and various international agencies, primarily in the African Territory.His reputation for precision and strong leadership led to his appointment at Blue Spark in 2021.",
      image: md,
      title: "Managing Director: Rohit Bhattarai"
    }
  ]
  return (
    <section className="flex items-center py-24 bg-stone-100 font-poppins text-gray-600">
      <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <TeamHeading />
        <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {
            teamInfo.map(teamMember => <TeamMember key={teamMember?.name} data={teamMember} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Team;
