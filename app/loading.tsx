'use client';

import React from 'react'
import { BarLoader } from 'react-spinners';

const loading = () => {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <BarLoader />
      <strong className='mt-5'>로딩중이예요</strong>
    </section>
  )
}

export default loading