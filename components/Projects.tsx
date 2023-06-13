"use client";

import { MdOutlineWork } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useCreateProjectModal from "@/hooks/useCreateProjectModal";

import SidebarProjectItem from "./SidebarProjectItem";

import { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const authModal = useAuthModal();
  const createProjectModal = useCreateProjectModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return createProjectModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <MdOutlineWork className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">
            Sim&atilde;o&apos;s Projects
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
                text-neutral-400
                cursor-pointer
                hover:text-white
                transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {projects.map((project) => (
          <SidebarProjectItem
            onClick={() => {}}
            key={project.id}
            data={project}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
