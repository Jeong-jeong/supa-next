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

// TODO 리스트 가져오기 by id
export const getTodosById = async (id: number) => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .select('*')
    .is('deleted_at', null)
    .eq('id', id)
  
  return result.data;
}

// TODO 리스트 가져오기 by terms
export const getTodosByContent = async (terms: string) => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .select('*')
    .is('deleted_at', null)
    // 포함하는 문자열 대소문자 구분없이 검색
    .ilike('content', `%${terms}%`)
    .order('id', { ascending: false })
    .limit(500)
  
  return result.data;
}

// TODO 리스트 생성하기
export const createTodo = async (content: string) => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .insert({ content })
    .select()
  
  return result.data;
}

// TODO 리스트 수정하기
export const updateTodo = async (id: number, content: string) => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .update({
      content,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
  
  return result.data;
}

// TODO 리스트 삭제하기
export const deleteTodoSoft = async (id: number) => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .update({
      deleted_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
  
  return result.data;
}

// TODO 리스트 삭제하기
export const deleteTodoHard = async (id: number) => {
  const supabase = createSupabaseBrowserClient();

  const result = await supabase
    .from('todos_no_rls')
    .delete()
    .eq('id', id)
  
  return result.data;
}