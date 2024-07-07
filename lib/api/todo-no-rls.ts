import { createSupabaseBrowserClient } from "../client/supbase";

// TODO 리스트 가져오기
export const getTodos = async () => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .select('*')
    .is('deleted_at', null)
    .order('id', { ascending: false })
  
  return result.data;
};