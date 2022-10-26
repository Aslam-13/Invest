 import React from 'react'
 import { useState } from 'react';
  
 const range = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleClick = ()=>{
    console.log(from, to, startDate, endDate);

  }

   return ( 
   <div className="w-screen h-screen bg-teal-600 flex flex-col">
   <div className="w-screen h-32 flex items-center">
     <h1 className="font-mono text-6xl font-bold text-slate-900 opacity-75 ml-10">CoinChange</h1>
   </div>
   <div className=" w-screen h-96 flex flex-wrap items-center justify-center " >
      <input
      onChange={(e)=> setFrom(e.target.value)}
      className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='From'
      />
      <input 
      onChange={(e)=> setTo(e.target.value)}
      className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='To'
      />
      <input  
      onChange={(e)=> setStartDate(e.target.value)}
      className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='2022-10-21'
      />
      <input 
      onChange={(e)=> setEndDate(e.target.value)}
      className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='2022-10-26'
      />
      <button  
      onClick={handleClick}
      className='w-24 h-16 flex justify-center items-center font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
       >Go</button>
     </div>
     
 </div> 
   )
 }
 
 export default range