'use client';

import React from 'react'
import { BounceLoader } from 'react-spinners';

const Error = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <BounceLoader color='blue'/>
      <p className='mt-10 font-bold'>뭔가 잘못됐어요!</p>
    </div>
  )
}

export default Error