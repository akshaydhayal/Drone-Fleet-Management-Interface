import Login from "./components/Login";

const HomePage = () => {
  return (
    <div className="w-screen bg-[#121212] h-[90vh] flex">
      <div className="w-1/2 px-6 flex flex-col  h-full">
        <div className="h-1/3 flex flex-col gap-2 mt-6">
          <p className="text-4xl px-4 text-slate-100 font-bold">
            Effortlessly Manage Your Fleet with DroneMaster
          </p>
          <p className="text-xl px-2 text-slate-300 font-medium">
            Streamline drone operations with a user-friendly interface—monitor,
            control, and optimize your drone activities from anywhere, anytime.
          </p>
        </div>
        <div className="h-3/5 p-8 ">
          <img
            className="h-full object-contain"
            src="https://www.facilitiesnet.com/resources/editorial/2024/drone-sstock-782313298.jpg"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-1/2">
        <Login />
      </div>
    </div>
  );
};

export default HomePage;
