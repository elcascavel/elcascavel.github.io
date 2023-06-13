import { createClient } from '@supabase/supabase-js';

const deleteProject = async (id: string) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or key is undefined.');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error('Failed to delete project.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Failed to delete project.');
  }
};

export default deleteProject;