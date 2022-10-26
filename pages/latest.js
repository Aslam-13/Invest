import React from 'react'

const latest = () => {
  return (
     <div className="w-screen h-screen bg-teal-600 flex flex-col">
  <div className="w-screen h-32 flex items-center">
    <h1 className="font-mono text-6xl font-bold text-slate-900 opacity-75 ml-10">CoinChange</h1>
  </div>
  <div className=" w-screen h-96 flex flex-wrap items-center justify-center " >
      <input  className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='From'
      />
      <input  className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='To'
      /> 
      <button  className='w-24 h-16 flex justify-center items-center font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
       >Go</button>
     </div>
   
    
</div> 
  )
}

export default latest