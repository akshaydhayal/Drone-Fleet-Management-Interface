import { useNavigate, useParams } from 'react-router-dom'
import { sampleData } from './store/sampleData';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
const DronePage = () => {
  const {droneId}=useParams();
  const drone=sampleData.drones.filter(d=>d.id==droneId)[0];
  console.log(drone);
  const username = useSelector((store:RootState) => store.login.username);
  const navigate=useNavigate();

  if (!username) {
    return (
      <div className=" h-[90vh] flex flex-col gap-2 justify-center items-center bg-[#121212]">
        <p className="text-white font-semibold text-2xl">Login first to see the the drones summary</p>
        <p className="text-white">Go to{" "}<span><button className="text-white p-1 px-3 border bg-blue-500
         hover:bg-blue-400 rounded-md font-medium"onClick={() => navigate("/")}>Home</button></span>Page</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-[90vh] bg-[#121212] flex flex-col items-center">
      
      <div className='flex w-3/4 h-full pt-4 gap-8 border border-slate-500 m-6'>
        <div className='w-1/3 flex flex-col gap-12 pt-4 border-r border-r-slate-400'>
          <p className="text-white text-4xl font-sans font-semibold text-center">{drone.id}</p>
          <img className='rounded-md' loading='lazy' src="https://imgs.search.brave.com/Ot0DR7B44OUBcKNK9s5jTNUQO1KaWiCvXwRLpdSJ52o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDky/NjgzODY1L3Bob3Rv/L2Ryb25lLXdoaXRl/LWNsb3VkeS1kdXNr/LXNreS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9a3p6Vl9m/dTlvbkJBcmhNS2JF/NHN4UmU0SzIyZnBX/Sy1iZDEtUE1pSjYw/OD0" />
        </div>
        <div className='w-2/3 px-4 flex flex-col'>
          <div className='p-2  py-2 pb-6 border-b border-b-slate-300'>
            <p className='text-slate-100 text-xl font-medium underline'>Drone details :</p>
            <ul className='list-disc px-8'>
              <li className="text-slate-300 text-lg font-medium">Drone ID :  <span className='text-slate-100 font-normal'>{drone.id}</span></li>
              <li className="text-slate-300 text-lg font-medium">Status :  <span className='text-slate-100 font-normal'>{drone.status}</span></li>
              <li className="text-slate-300 text-lg font-medium">Flight Hours :  <span className='text-slate-100 font-normal'>{drone.flight_hours}</span></li>
              <li className="text-slate-300 text-lg font-medium">Battery Status :  <span className='text-slate-100 font-normal'>{drone.battery_status}</span></li>
              <li className="text-slate-300 text-lg font-medium">Last known location :  <span className='text-slate-100 font-normal'>{drone.last_known_location}</span></li>
              <li className="text-slate-300 text-lg font-medium">Current Mission :  <span className='text-slate-100 font-normal'>{drone.current_mission}</span></li>
            </ul>
          </div>
            <div className='p-2'>
              <p className='text-slate-300 text-lg font-medium mt-6 '>Maintainence Logs :</p>
              <div className='w-full'>
                <div className="flex w-full border-b-2 border-t-2 p-2">
                  <p className="text-white w-1/4 font-medium">Date</p>
                  <p className="text-white w-2/4 font-medium">Description</p>
                  <p className="text-white w-1/4 font-medium">Technician</p>
                </div>
                {drone.maintenance_logs.map((log) => {
                  return (
                    <div className="flex w-full border-b  p-2">
                      <p className="text-white w-1/4">{log.date}</p>
                      <p className="text-white w-2/4">{log.description}</p>
                      <p className="text-white w-1/4">{log.technician}</p>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default DronePage