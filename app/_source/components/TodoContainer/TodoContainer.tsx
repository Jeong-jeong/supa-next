// 'use client';
import React from 'react';
// import useTodosController from '../../hooks/useTodosController';

const TodoContainer = () => {
  return (
    <main className='bg-black h-screen flex justify-between'>
      <nav className='bg-zinc-900 w-[80px] h-full flex flex-col gap-2'>
        <div>로고</div>
        <div>현재화면</div>
        <div>설정</div>
      </nav>
      <section className='w-full'>
        <h1 className='bg-zinc-900 w-full text-[40px] font-bold text-center'>TODO</h1>
        <section className='p-[24px] h-[calc(100vh-60px)]'>
          <form>
            
            <input type='text' placeholder='할 일을 검색하세요' className='bg-inherit p-1' />
          </form>
          <div className='border border-zinc-900 rounded-md w-[240px] flex flex-col items-center mt-12'>
            <div className='flex justify-start w-[85%] mt-2 mb-2'>
              <div className='bg-orange-500 rounded-xl p-1'>
                백로그
              </div>
            </div>
            <ul className='flex flex-col gap-1 overflow-auto h-[calc(100vh-214px)]'>
              {array.map((item, index) => (
                <li key={index} className='w-[200px] h-[140px] bg-zinc-900 shrink-0 rounded-md'>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

const array = ['할일 1', '할일 2', '할일 3', '블라블라', '블ㄹ라라라라라', 'abcd', '에구구'];


export default TodoContainer;