import { createTodo, deleteTodoSoft, getTodos, getTodosByContent, updateTodo } from '@/lib/api/todo-no-rls';
import { Database } from '@/types/supabase';
import { useEffect, useState } from 'react';

type TodosType = Database['public']['Tables']['todos_no_rls']['Row'];

const useTodosController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<TodosType[]>([]);

  const handleAsyncFunction = async (callback: () => Promise<TodosType[] | null>) => {
    setIsLoading(true);
    try {
      const response = await callback();
      if (response) {
        setTodos(response);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const onCreateEmptyTodo = async () => {
    handleAsyncFunction(() => createTodo(''));
  }

  const onUpdateTodo = async (id: number, content: string) => {
    handleAsyncFunction(() => updateTodo(id, content));
  }

  const onDeleteTodo = async (id: number) => {
    handleAsyncFunction(() => deleteTodoSoft(id));
  }

  const onSearchTodos = async (terms: string) => {
    if (terms.trim() === '') {
      handleAsyncFunction(getTodos);

      return;
    }

    handleAsyncFunction(() => getTodosByContent(terms));
  }

  useEffect(() => {
    const onGetTodos = async () => {
      handleAsyncFunction(getTodos);
    }

    onGetTodos();
  }, [])

  return {
    isLoading,
    todos,
    onCreateEmptyTodo,
    onUpdateTodo,
    onDeleteTodo,
    onSearchTodos,
  }
};

export default useTodosController;