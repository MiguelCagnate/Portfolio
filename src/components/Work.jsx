import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Team leader / Web Visionary",
    company: "*MIGRAMIX - Bootcamp final project",
    duration: "3 Months - Current date",
    details: [
      "Front-end Developer (MIGRAMIX) | Barcelona | Current Date",
      " Developed and designed a website using React.js, Vite, Agile method, MySQL, MUI, showcasing your front-end development skills.",
      "• Implemented responsive design principles, optimized performance, and ensured cross-browser compatibility.",
      "• Utilized HTML, CSS, JavaScript, and React.js to create interactive and visually appealing user interfaces.",
      "• Integrated external APIs or services to enhance functionality and user experience.",
    ],
  },
  {
    year: 2022,
    title: "DJ",
    company: "*Milo Bembé",
    duration: "2 years - Current date",
    details: [
      "• Curated dynamic DJ sets at prestigious venues, collaborating with management to tailor music experiences and enhance brand identity.",
      "• Continuously refined skills through professional development, graduating from Plastic Academia and staying updated on industry trends and technologies.",
    ],
  },
  {
    year: 2015,
    title: "EY Reserve Champion",
    company: "*EY Colombia",
    duration: "4 years",
    details: [
      "• Improved customer experience by providing exceptional support for workspace and event bookings, overseeing the implementation of reservation software, and training new members.",
      "• Coordinated the EY Reserve team and collaborated with CBS branches to optimize service delivery.",
    ],
  },
  {
    year: 2014,
    title: "Front-desk Agent",
    company:
      "*Marriott International - The Artisan D.C. Hotel, Autograph Collection (OPENING)",
    duration: "1 years",
    details: [
      "• Provided exceptional guest service and contributed to the establishment of the first Autograph Collection by Marriott in Colombia, achieving recognition among the top 50 hotels in Bogotá within six months.",
      "• Developed front-desk protocols and facilitated the training of new colleagues, demonstrating leadership and organizational skills.",
    ],
  },
  {
    year: 2009,
    title: " Marine Operations Supervisor",
    company: "*LBH Colombia Santa Marta, Colombia ",
    duration: "4 years, 2 meses",
    details: [
      "•	Streamlined international shipment management, resolved disputes, negotiated agreements, and provided comprehensive training, earning recognition as Best Supervisor LBH Colombia 2013.",
    ],
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040] m-auto md:pl-20 p-5 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
