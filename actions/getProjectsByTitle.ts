import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

import { Project } from "@/types";

import getProjects from "./getProjects";

const getProjectsByTitle = async (title: string): Promise<Project[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if (!title) {
    const allProjects = await getProjects();
    return allProjects;
  }

  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .ilike('title', `%${title}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getProjectsByTitle;