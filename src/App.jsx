import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import Viewpaste from './components/Viewpaste'

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<div>
   <Navbar></Navbar>
   <Home></Home>

    </div>
  },
    {
    path:'/pastes',
    element:<div>
      <Navbar></Navbar>
      <Pastes></Pastes>
    </div>
  },
    {
    path:'/pastes/:id',
    element:<div>
      <Navbar></Navbar>
      <Viewpaste></Viewpaste>
    </div>
  },
])
 return (
    
    <RouterProvider router={router}>

    </RouterProvider>
     
    
 )
}

export default App
