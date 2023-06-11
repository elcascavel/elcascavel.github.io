export interface Project {
    id: string;
    user_id: string;
    author: string;
    title: string;
    description: string;
    image_path: string;
}

export interface UserDetails 
{
    id: string;
    full_name: string;
    avatar_url?: string;
}