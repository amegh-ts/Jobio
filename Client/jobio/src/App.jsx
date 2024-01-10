import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AdminNavbar from './Components/Admin/Navbar/AdminNavbar';
import Index from './Components/Index';
import ClientNavbar from './Components/Client/Navbar/ClientNavbar';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/indx',
      element:<Index/> ,
    }, {
      path: '/',
      element:<AdminNavbar/> ,
    }, {
      path: '/cnav',
      element:<ClientNavbar/> ,
    }, {
      path: '/profile',
      element:<Profile/> ,
    }, {
      path: '/login',
      element:<Login/> ,
    }, 
  ]);
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
