"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Project } from "@/types";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";
import { BiPencil, BiTrash } from "react-icons/bi";
import Button from "@/components/Button";

import deleteProject from "@/actions/deleteProject";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";
import useAuthModal from "@/hooks/useAuthModal";
import useEditProjectModal from "@/hooks/useEditProjectModal";

interface ProjectHeaderProps {
  project: Project;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
  const { user } = useUser();
  const imagePath = useLoadImage(project);
  const router = useRouter();

  const authModal = useAuthModal();
  const editProjectModal = useEditProjectModal();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    return editProjectModal.onOpen(project);
  };

  const handleDelete = async () => {
    try {
      await deleteProject(project.id);
      toast.success("Project deleted!");
      router.push("/");
    } catch (error) {
      toast.error("Failed to delete project.");
    }
  };

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
        <div className="flex flex-row gap-x-4">
          <a
            href={project.link}
            className="text-neutral-50 text-2xl md:text-4xl font-bold"
          >
            {project.title}
          </a>

          {user && (
            <div className="flex gap-x-4 items-center">
              <Button
                onClick={() => {
                  onClick();
                }}
                className="bg-white"
              >
                <BiPencil size={16} />
              </Button>
              <Button
                onClick={() => {
                  handleDelete();
                }}
                className="bg-white"
              >
                <BiTrash size={16} />
              </Button>
            </div>
          )}
        </div>
        <p className="text-neutral-50">{project.technologies.join(", ")}</p>
        <div>
          <p className="font-semibold">{project.author}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
