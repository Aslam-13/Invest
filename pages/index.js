 import Options from "./components/Options.js";
 import Link from "next/link.js";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-teal-600 flex flex-col">
      <div className="w-screen h-32 flex items-center">
        <Link href="/">
        <h1 className="font-mono text-6xl md:text-3xl sm:text-2xl font-bold cursor-pointer text-slate-900 opacity-75 ml-10">CoinChange</h1>
        </Link>
      </div>
      <div className=" w-screen h-96 flex flex-wrap items-center justify-center ">
        <Link href="/convert">
        <Options value={"convert"}/>
        </Link>
        <Link href="/date">
        <Options value={"date"}/>
        </Link>
        <Link href="/latest">
        <Options value={"latest"}/>
        </Link>
v      </div>
        
    </div>
     
  )
}
