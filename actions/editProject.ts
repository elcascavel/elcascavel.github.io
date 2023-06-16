import { createClient } from '@supabase/supabase-js';

const editProject = async (projectId: string, updatedData: any) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or key is undefined.');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    const { error } = await supabase
      .from('projects')
      .update(updatedData)
      .eq('id', projectId);

    if (error) {
      throw new Error('Failed to update project.');
    }

    console.log(`Project with ID ${projectId} updated.`);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update project.');
  }
};

export default editProject;
