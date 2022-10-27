import React from 'react';
import { useState } from 'react';

const date = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [val, setVal] = useState("");
  const handleClick = async ()=>{
    var myHeaders = new Headers();

    myHeaders.append("apikey", "ugZuBOT5jWoqXYFbqK30l0O1UF00XBLh");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  
    await fetch( `https://api.apilayer.com/fixer/${date}?symbols=${to}&base=${from}`, requestOptions)
      .then(response => response.json())
      .then(res => setVal(res.rates))
      .catch(error => console.log('error', error));
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
      onChange={(e)=> setDate(e.target.value)}
      className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='2022-10-21'
      />
      <button  
      onClick={handleClick}
      className='w-24 h-16 flex justify-center items-center font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
       >Go</button>
     </div>
     {val===""? 
    <div></div>
    :
    <div className='flex items-center justify-center'>
      <p className="font-mono text-6xl font-bold text-slate-900 opacity-75 ml-10">Result: {val[Object.keys(val)[0]]}</p>
    </div>
  }
    
    
</div> 

  )
}

export default date