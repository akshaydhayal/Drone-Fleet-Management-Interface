import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar"
// import DroneListPage from "./DroneListPage"
import HomePage from "./HomePage"
import { Provider } from "react-redux";
import { store } from "./store/store";
const DronePage=lazy(()=>import("./DronePage"));
const DroneListPage=lazy(()=>import('./DroneListPage'));

function App() {

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>
    },{
      path:'/drones',
      element:<Suspense fallback={<h1>Loading</h1>}>
          <DroneListPage/>
        </Suspense>
    },{
      path:'/drones/:droneId',
      element:<Suspense><DronePage/></Suspense>
    }
  ])
  return (
    <Provider store={store}>
      <div>
        <Navbar/>
        <RouterProvider router={appRouter}>
        </RouterProvider>
      </div>
    </Provider>
  )
}

export default App
