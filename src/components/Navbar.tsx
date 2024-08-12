import { GiFlyingDagger } from "react-icons/gi";
import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedUser } from '../store/loggedUserStore';
import { RootState } from "../store/store";

const Navbar = () => {
  const username=useSelector((store:RootState)=>store.login.username);
  const dispatch=useDispatch();

  console.log('username: ',username);
  return (
    <div className="bg-[#232222] border-b border-b-slate-700 w-screen h-[10vh] flex justify-between">
      <div className=" px-4 flex gap-2 items-center cursor-pointer">
        <GiFlyingDagger className="text-blue-400 h-6 w-6" />
        <p className="text-slate-200 text-3xl font-serif font-bold">
          Drone<span className='text-blue-500'>Master</span>
        </p>
      </div>
      <div className='flex items-center gap-4'>
          <LuMoonStar className='text-white h-6 w-6'/>
          <FiSun className='text-white h-6 w-6'/>
          {/* {!username && <p className='text-slate-200 font-medium text-lg underline'>Login please</p>} */}
          {!username && <p className={`text-slate-200 font-medium text-lg underline`}>Login please</p>}
          {username && <p className='text-white'>Hi {username}</p>}
          {username && <button className='p-1 px-2 bg-sky-700 hover:bg-sky-600 rounded-md text-slate-100 border' onClick={()=>dispatch(setLoggedUser(null))}>Logout</button>}
      </div>
    </div>
  );
}

export default Navbar