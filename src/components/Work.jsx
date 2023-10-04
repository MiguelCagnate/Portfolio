import React from "react";
import WorkItem from "./Workitem";

const data = [
  {
    year: 2000,
    title: "Content Creator",
    duration: "3 years",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit id erat luctus, sed consequat est pellentesque. Sed ut orci quis eros faucibus imperdiet. Nulla blandit gravida tellus id semper. Vestibulum luctus mattis tellus quis tempor. Morbi vel commodo magna. Vivamus tincidunt vel sem ut molestie. Ut a quam elit. elit. Pellentesque elit mi, malesuada vitae.",
  },
  {
    year: 2000,
    title: "Adevinta",
    duration: "4 years",
    details:
      "Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit id erat luctus, sed consequat est pellentesque. Sed ut orci quis eros faucibus imperdiet. Nulla blandit gravida tellus id semper. Vestibulum luctus mattis tellus quis tempor. Morbi vel commodo magna. Vivamus tincidunt vel sem ut molestie. Ut a quam elit. sit amet, consectetur adipiscing elit. Pellentesque elit mi, malesuada vitae.",
  },
  {
    year: 2000,
    title: "Posche Digital",
    duration: "5 years",
    details:
      "Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit id erat luctus, sed consequat est pellentesque. Sed ut orci quis eros faucibus imperdiet. Nulla blandit gravida tellus id semper. Vestibulum luctus mattis tellus quis tempor. Morbi vel commodo magna. Vivamus tincidunt vel sem ut molestie. Ut a quam elit. dolor sit amet, consectetur adipiscing elit. Pellentesque elit mi, malesuada vitae.",
  },
  {
    year: 2000,
    title: "eDreams Odigeo",
    duration: "2 years",
    details:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis elit id erat luctus, sed consequat est pellentesque. Sed ut orci quis eros faucibus imperdiet. Nulla blandit gravida tellus id semper. Vestibulum luctus mattis tellus quis tempor. Morbi vel commodo magna. Vivamus tincidunt vel sem ut molestie. Ut a quam elit. elit. Pellentesque elit mi, malesuada vitae.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};


export default Work;
