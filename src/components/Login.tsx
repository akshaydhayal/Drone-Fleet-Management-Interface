import { useState } from 'react'
import { sampleData } from '../store/sampleData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoggedUser } from '../store/loggedUserStore';
import { MdWavingHand } from "react-icons/md";

const Login = () => {
  const [username,setUsername]=useState<string>('');
  const [password,setPassword]=useState<string>('');

  const navigate=useNavigate();
  const dispatch=useDispatch();

  function handleLogin(){
    const adminUsername=sampleData.users[0].username;
    const adminPassword=sampleData.users[0].password;
    if(username==adminUsername && password==adminPassword){
      console.log("login success");
      dispatch(setLoggedUser(username));
      navigate('/drones');
    }else{
      console.log("login failed");
    }
  }
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border border-slate-500 p-8 py-12 rounded-lg flex flex-col gap-4">
        <div className='flex gap-3 items-center'>
          <p className="text-4xl font-medium text-slate-100">Welcome back</p>
          <MdWavingHand className='text-yellow-400 h-9 w-9'/>
        </div>
      
        <p className="text-xl text-slate-400">
          Please enter your information to signin
        </p>
        <div className="flex flex-col gap-4">
          <input
            className="p-2 rounded-md bg-[#2d2c2c] text-slate-300 placeholder:text-slate-300  placeholder:px-2"
            type="text" value={username}
            placeholder="Username" onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            className="p-2 rounded-md bg-[#2d2c2c] text-slate-300 placeholder:text-slate-300 placeholder:px-2"
            type="password"
            placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
          <button className="bg-[#078adc] p-2 rounded-lg text-white font-semibold text-lg"
          onClick={handleLogin}>LOGIN</button>
          <p className='text-slate-300 text-sm '>Use admin and password123 as details to login</p>
      </div>
    </div>
  );
}

export default Login