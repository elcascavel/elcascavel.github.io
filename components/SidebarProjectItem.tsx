"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types";
import Image from "next/image";

interface SidebarProjectItemProps {
  data: Project;
  onClick: (id: string) => void;
}

const SidebarProjectItem: React.FC<SidebarProjectItemProps> = ({
  data,
  onClick,
}) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => onClick(data.id);

  return (
    <div
      onClick={handleClick}
      className="
            flex
            items-center
            gap-x-3
            cursor-pointer
            hover:bg-neutral-800/50
            w-full
            p-2
            rounded-md
            "
    >
      <div
        className="
                    relative
                    rounded-md
                    min-h-[48px]
                    min-w-[48px]
                    overflow-hidden
                    "
      >
        <Image
          fill
          src={imageUrl || "/images/placeholder.png"}
          alt="proj item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 truncate">{data.description}</p>
      </div>
    </div>
  );
};

export default SidebarProjectItem;
