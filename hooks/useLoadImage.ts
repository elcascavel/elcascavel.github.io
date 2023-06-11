import { useSupabaseClient } from "@supabase/auth-helpers-react"

import { Project } from "@/types";

const useLoadImage = (project: Project) => {
    const supabaseClient = useSupabaseClient();

    if (!project) {
        return null;
    }

    const { data: imageData} = supabaseClient.storage
    .from('images')
    .getPublicUrl(project.image_path);

    return imageData.publicUrl;
};

export default useLoadImage;