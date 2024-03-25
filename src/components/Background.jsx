import StudyItem from "./StudyItem";

const education = [
  {
    year: 2023,
    title: "Full-stack Developer",
    academy: "*Migracode - Barcelona ",
    duration: "1 year",
  },
  {
    year: 2023,
    title: "Front-end ReactJs",
    academy: "*IT Academy Barcelona Activa ",
    duration: "1 year",
  },

  {
    year: 2021,
    title: "Code Yourself, An Introduction To Programming Computer Programming",
    academy: "*Coursera - Edimburgo University | February 2021",
    duration: "1 months",
  },

  {
    year: 2009,
    title: "Bachelor's Degree in Modern Languages",
    academy: "*Universidad EAN - Bogotá, Colombia",
    duration: "5 year",
  },
];

const Background = () => {
  return (
    <div id="background" className="max-w-[1040] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Background
      </h1>
      {education.map((item, idx) => (
        <StudyItem
          key={idx}
          year={item.year}
          title={item.title}
          academy={item.academy}
          duration={item.duration}
        />
      ))}
    </div>
  );
};

export default Background;
