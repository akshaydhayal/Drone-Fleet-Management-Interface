import React from 'react'
import { sampleData } from './store/sampleData'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from './store/store';

const DroneListPage = () => {
  const navigate=useNavigate();
  const dronesData=sampleData.drones;
  const username=useSelector(store=>store.login.username);
  if(!username){
    return<div className=' h-[90vh] flex flex-col gap-2 justify-center items-center bg-[#121212]'>
        <p className='text-white font-semibold text-2xl'>Login first to see the the drones summary</p>
        <p className='text-white'>Go to <span><button className='text-white p-1 px-3 border bg-blue-500
         hover:bg-blue-400 rounded-md font-medium' onClick={()=>navigate("/")}>Home </button></span> Page</p>
      </div>
  }
  return (
    <div className="w-screen h-[90vh] bg-[#121212] flex justify-center pt-8">
      <div className="flex flex-col w-2/3">

        <div className="w-full flex border-b-2 border-b-slate-400 p-2 bg-[#312e2e] rounded-t-lg pb-4">
          <p className="text-xl font-sans font-medium text-slate-300 w-1/3">
            Drone ID
          </p>
          <p className="text-xl font-sans font-medium text-slate-300 w-1/3">
            Drone status
          </p>
          <p className="text-xl font-sans font-medium text-slate-300 w-1/3">
            Flight hours
          </p>
        </div>

        {dronesData.map((drone) => {
          return (
            <div className="w-full flex border-b border-slate-500 p-2 bg-[#312e2e] 
            cursor-pointer hover:bg-[#423e3e]" onClick={()=>navigate(`/drones/${drone.id}`)} key={drone.id}>
              <p className="text-lg font-mono font-medium text-slate-200 w-1/3">
                {drone.id}
              </p>
              <p className="text-lg font-mono font-medium text-slate-200 w-1/3">{drone.status}</p>
              <p className="text-lg font-mono font-medium text-slate-200 w-1/3">{drone.flight_hours}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DroneListPage