import React from 'react'
import { GiFlyingDagger } from "react-icons/gi";
import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-[#121212] border w-screen h-[10vh] flex justify-between">
      <div className="flex gap-2 items-center">
        <GiFlyingDagger className="text-blue-400 h-6 w-6" />
        <p className="text-slate-200 text-3xl font-serif font-bold">
          Drone<span className='text-blue-500'>Master</span>
        </p>
      </div>
      <div className='flex gap-4'>
          <LuMoonStar className='text-white h-6 w-6'/>
          <FiSun className='text-white h-6 w-6'/>
      </div>
    </div>
  );
}

export default Navbar