"use client";

import ProjectItem from "@/components/ProjectItem";
import { Project } from "@/types";

interface PageContentProps {
  projects: Project[];
}

const PageContent: React.FC<PageContentProps> = ({ projects }) => {
  if (projects.length === 0) {
    return <div className="mt-4 text-neutral-400">No projects available.</div>;
  }
  return (
    <div
      className="grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-8
        gap-4
        mt-4"
    >
      {projects.map((project) => (
        <ProjectItem key={project.id} onClick={() => {}} data={project} />
      ))}
    </div>
  );
};

export default PageContent;
