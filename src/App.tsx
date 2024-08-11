import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Home"
import Navbar from "./components/Navbar"
import LoginPage from "./LoginPage"

function App() {

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<LoginPage/>
    },{
      path:'/home',
      element:<Home/>
    }
  ])
  return (
    <div>
      <Navbar/>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
  )
}

export default App
