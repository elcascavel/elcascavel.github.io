import { Project } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSingleProject = async (id?: string): Promise<Project> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getSingleProject;