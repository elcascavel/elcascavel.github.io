import { Project } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getProjects = async (id?: string): Promise<Project[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

    if (data && id) {
        data.filter((project) => project.id === id);
      }    

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getProjects;