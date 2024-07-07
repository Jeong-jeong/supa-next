'use client';

import { getTodos } from '@/lib/api/todo-no-rls';
import React, { useEffect } from 'react';

const TodoContainer = () => {
  useEffect(() => {
    const todos = getTodos();
    console.log(todos, 'todos');
  }, []);

  return (
    <div>
      <h1>TodoContainer</h1>
    </div>
  );
};

export default TodoContainer;