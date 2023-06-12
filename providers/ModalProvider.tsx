"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import CreateProjectModal from "@/components/CreateProjectModal";
import { Technology } from "@/types";

interface ModalProviderProps {
  technologies: Technology[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ technologies }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <CreateProjectModal technologies={technologies} />
    </>
  );
};

export default ModalProvider;
