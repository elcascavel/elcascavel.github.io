import { Box } from "./Box";

const Projects = (props) => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 text-slate-900 sm:px-6 lg:px-8">
      <div>
        <h1 className="font-semibold capitalize">Things I've built</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-2 mt-4">
          {props.projects.map((project) => (
            <Box
              key={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              linkTitle={project.linkTitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
