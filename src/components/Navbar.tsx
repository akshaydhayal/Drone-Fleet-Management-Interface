import React from 'react'
import { GiFlyingDagger } from "react-icons/gi";
import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../store/store';
import { setLoggedUser } from '../store/loggedUserStore';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const username=useSelector(store=>store.login.username);
  const dispatch=useDispatch();

  console.log('username: ',username);
  return (
    <div className="bg-[#121212] border w-screen h-[10vh] flex justify-between">
      <div className="flex gap-2 items-center cursor-pointer">
        <GiFlyingDagger className="text-blue-400 h-6 w-6" />
        <p className="text-slate-200 text-3xl font-serif font-bold">
          Drone<span className='text-blue-500'>Master</span>
        </p>
      </div>
      <div className='flex gap-4'>
          <LuMoonStar className='text-white h-6 w-6'/>
          <FiSun className='text-white h-6 w-6'/>
          {!username && <p className='text-white'>Login please</p>}
          {username && <p className='text-white border' onClick={()=>dispatch(setLoggedUser(null))}>Logout</p>}
          {username && <p className='text-white'>Hi {username}</p>}
      </div>
    </div>
  );
}

export default Navbar