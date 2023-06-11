"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import CreateProjectModal from "@/components/CreateProjectModal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <CreateProjectModal />
    </>
  );
};

export default ModalProvider;
