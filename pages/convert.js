import React from 'react';
import { useState } from 'react';

const convert = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [ val, setVal] = useState("");
  const handleClick = async  ()=> {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "IEY8kG6OpalcHIvoHJdRuSMLoGQJuROz");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  await fetch( `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, requestOptions)
    .then(response => response.json())
    .then(res => setVal(res.result))
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
      onChange={(e)=> setAmount(e.target.value)}
      className='w-72 h-24 font-mono text-3xl cursor-pointer bg-white text-black m-9 p-4 shadow-2xl shadow-teal-200 opacity-75 rounded-xl border-4 border-teal-800'
      placeholder='Amount'
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
      <p className="font-mono text-6xl font-bold text-slate-900 opacity-75 ml-10">Result: {val}</p>
    </div>
  }
     
      
  </div> 
   )
}

export default convert