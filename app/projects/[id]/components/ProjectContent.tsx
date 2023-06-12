"use client";

import { Project } from "@/types";

interface ProjectContentProps {
  project: Project;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <div>
      <p className="text-neutral-400 leading-relaxed my-4">
        {project.description}
      </p>

      <h2 className="text-white text-2xl font-semibold">Technologies</h2>
      <p className="text-neutral-400 leading-relaxed">
        {project.technologies.join(", ")}
      </p>
    </div>
  );
};

export default ProjectContent;
