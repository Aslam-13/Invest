import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const latest = () => {
  const [from , setFrom] = useState("");
  const [to, setTo] = useState("");
  const [val, setVal ] = useState("");

  const handleClick = async ()=>{
    var myHeaders = new Headers();
    myHeaders.append("apikey", "IEY8kG6OpalcHIvoHJdRuSMLoGQJuROz");
  
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
  
    await fetch( `https://api.apilayer.com/fixer/latest?symbols=${to}&base=${from}`, requestOptions)
      .then(response => response.json())
      .then(res => setVal(res.rates))
      .catch(error => console.log('error', error));
        
      }
 
  return (
     <div className="w-screen h-screen bg-teal-600 flex flex-col md:w-fit">
  <div className="w-screen h-32 flex items-center">
    <Link href="/">
        <h1 className="font-mono text-6xl md:text-3xl sm:text-2xl font-bold cursor-pointer text-slate-900 opacity-75 ml-10">CoinChange</h1>
        </Link>
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
      <button  
      onClick={handleClick}
      className='w-24 h-16 flex justify-center items-center font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
       >Go</button>
     </div>
     {val===""? 
    <div></div>
    :
    <div className='flex items-center justify-center'>
      <p className="font-mono text-xl md:text-4xl sm:text-3xl font-bold text-slate-900 opacity-75 ml-10">Result: {val[Object.keys(val)[0]]}</p>
    </div>
  }
    
</div> 
  )
}

export default latest