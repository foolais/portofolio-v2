import CardContainerProject from "@/components/card-container-project";
import ProjectTypeBadge from "@/components/project-type-badge";

const ProjectsPage = () => {
  return (
    <div className="lg:w-5/6 mx-auto py-8 ">
      <h1 className="text-4xl font-bold">
        <span className="text-gradient">Projects</span> Gallery
      </h1>
      <div className="md:w-3xl py-4">
        <span className="text-slate-500">
          A curated collection of projects I’ve built, showcasing my experience
          in building modern, scalable, and user-focused web applications.
        </span>
      </div>
      <ProjectTypeBadge />
      <CardContainerProject />
    </div>
  );
};

export default ProjectsPage;
