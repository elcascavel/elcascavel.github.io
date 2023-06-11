"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types";

import Image from "next/image";

interface ProjectItemProps {
  data: Project;
  onClick: (id: string) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);
  return (
    <div
      onClick={() => onClick(data.id)}
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        rounded-md
        overflow-hidden
        gap-x-4
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
        "
    >
      <div className="relative aspect-square w-full h-full rounded-md overflow-hidden">
        <Image
          className="object-cover"
          src={imagePath || "/images/music-placeholder.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm w-full line-clamp-3">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
