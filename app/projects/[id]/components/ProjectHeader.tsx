"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types";
import Image from "next/image";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const imagePath = useLoadImage(project);

  return (
    <div className="mb-2 flex flex-row items-center gap-x-6">
      <div className="relative aspect-square w-48 md:w-60 h-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <a
          href={project.link}
          className="text-neutral-50 text-2xl md:text-4xl font-bold"
        >
          {project.title}
        </a>
        <p className="text-neutral-50">{project.technologies.join(", ")}</p>
        <div>
          <p className="font-semibold">{project.author}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
