import ProjectCard from "./Projects/ProjectCard";

const Projects = () => {
  return (
    <section className=" flex flex-col items-center py-6" id="projects">
      <h1 className="text-5xl font-bold">Projects</h1>
      <p className="text-2xl mt-2">Most Recent Works</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
