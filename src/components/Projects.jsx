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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        convallis elit id erat luctus, sed consequat est pellentesque. Vivamus
        tincidunt vel sem ut molestie. Ut a quam elit. Pellentesque elit mi,
        malesuada vitae.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        <ProjectItem img={uno} title="Mi Pueblito App" />
        <ProjectItem img={dos} title="Burger App" />
        <ProjectItem img={tres} title="Migramix Website" />
        <ProjectItem img={cuatro} title="Food Collab App" />
      </div>
    </div>
  );
};

export default Projects;
