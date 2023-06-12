"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/hooks/useUser";

const ProjectContent = () => {
  const router = useRouter();
  const { isLoading } = useUser();

  const [loading, setLoading] = useState(false);

  return <div>Project Content!</div>;
};

export default ProjectContent;
