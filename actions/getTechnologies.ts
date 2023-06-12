import { Technology } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getTechnologies = async (): Promise<Technology[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    });

    const { data, error } = await supabase
    .from('technologies')
    .select('*')
    .order('name', { ascending: true });

    if (error) {
        console.log(error);
    }

    return (data as any) || [];
};

export default getTechnologies;