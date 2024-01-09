import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AdminNavbar from './Components/Admin/Navbar/AdminNavbar';
import Index from './Components/Index';
import ClientNavbar from './Components/Client/Navbar/ClientNavbar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Index/> ,
    }, {
      path: 'anav',
      element:<AdminNavbar/> ,
    }, {
      path: 'cnav',
      element:<ClientNavbar/> ,
    }, 
  ]);
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
