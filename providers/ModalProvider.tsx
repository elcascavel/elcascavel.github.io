"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import CreateProjectModal from "@/components/CreateProjectModal";
import { Project, Technology } from "@/types";
import EditProjectModal from "@/components/EditProjectModal";

interface ModalProviderProps {
  technologies: Technology[];
  selectedProject: Project;
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  technologies,
  selectedProject,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  console.log(selectedProject);

  return (
    <>
      <AuthModal />
      <CreateProjectModal technologies={technologies} />
      <EditProjectModal project={selectedProject} technologies={technologies} />
    </>
  );
};

export default ModalProvider;
