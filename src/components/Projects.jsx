import ProjectItem from "./ProjectItem";
import uno from "../assets/uno.jpg";
import dos from "../assets/dos.jpg";
import tres from "../assets/tres.jpg";
import cuatro from "../assets/cuatro.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Welcome to my portfolio! Here, you will discover the diverse projects I
        have crafted both solo and collaboratively as a Full-Stack developer.
        From innovative solo ventures to dynamic team efforts, each project
        showcases my skills and passion for creating impactful solutions.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 image-rendering={pixelated}">
        <ProjectItem
          img={tres}
          title="Migramix Website"
          software="ReactJS - Vite - NextJS - Tailwind - MySQL"
          url="https://migramix.migracode.org/"
        />
        <ProjectItem
          img={cuatro}
          title="Javascript Quizz"
          software="ReactJS - Vite - Zustand - Tailwind"
          url="https://miguelcagnate.github.io/jsquizz/"
        />

        <ProjectItem
          img={dos}
          title="Burger Landing Page"
          software="Html - Css"
          url="https://bestburguersbarcelona.netlify.app/"
        />
        <ProjectItem
          img={uno}
          title="MiguelCagnate_Portfolio"
          software="ReactJS - Vite - Tailwind"
          url="https://miguelcanate-portfolio.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
