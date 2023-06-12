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
      <div className="relative aspect-square w-48 md:w-60 h-full rounded-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      <h1 className="text-white text-2xl md:text-4xl font-bold">
        {project.title}
      </h1>
    </div>
  );
};

export default ProjectHeader;
