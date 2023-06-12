export interface Project {
    id: string;
    user_id: string;
    author: string;
    title: string;
    technologies: string[];
    description: string;
    image_path: string;
}

export interface Technology {
    id: string;
    name: string;
}

export interface UserDetails 
{
    id: string;
    full_name: string;
    avatar_url?: string;
}