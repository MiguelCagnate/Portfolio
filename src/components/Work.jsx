import React from "react";
import WorkItem from "./Workitem";


const data = [
  {
    year: 2000,
    title: "Content Creator",
    duration: "3 years",
    details: "lorem11",
  },
  {
    year: 2000,
    title: "Content Creator",
    duration: "3 years",
    details: "lorem11",
  },
  {
    year: 2000,
    title: "Content Creator",
    duration: "3 years",
    details: "lorem11",
  },
  {
    year: 2000,
    title: "Content Creator",
    duration: "3 years",
    details: "lorem11",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => {
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />;
      })}
    </div>
  );
};

export default Work;
