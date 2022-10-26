import React from 'react';
import Link from 'next/link';

const Options = ({value}) => {
  return (
    <Link href={value}>
    <div className='w-44 h-44 flex justify-center items-center cursor-pointer hover:translate-x-1 hover:translate-y-2 delay-100   text-center bg-white text-black m-9 p-10 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
     > 
      <p className='font-mono font-bold text-3xl '> {value}</p>

    </div>
    </Link>
  )
}

export default Options