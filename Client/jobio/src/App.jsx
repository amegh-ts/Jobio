import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AdminNavbar from './Components/Admin/Navbar/AdminNavbar';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<AdminNavbar/> ,
    }, 
  ]);
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
