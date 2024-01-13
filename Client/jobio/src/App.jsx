import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AdminNavbar from './Components/Admin/Navbar/AdminNavbar';
import Index from './Components/Index';
import ClientNavbar from './Components/Client/Navbar/ClientNavbar';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import { useSelector } from 'react-redux';
import Landing from './Components/Landing/Landing';
import EmployerNavbar from './Components/Employer/Navbar/EmployerNavbar';
import { useEffect, useState } from 'react';

function App() {
  const [primaryColor, setPrimaryColor] = useState('');

const storedData = localStorage.getItem('persist:jobio');
const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
const userType = user?.userInfo?.[0]?.type;



  useEffect(() => {
    // Set primary color based on user type
    switch (userType) {
      case 'admin':
        setPrimaryColor('rgb(231, 0, 0)'); // Red color
        break;
      case 'employer':
        setPrimaryColor('rgb(0, 128, 0'); // Green color
        break;
      case 'employee':
        setPrimaryColor('#695CFE'); // Blue color
        break;
      default:
        setPrimaryColor('#695CFE'); // Default color
    }
    document.body.style.setProperty('--primary-color', primaryColor);

  }, [primaryColor]);


  const reduxData = useSelector((state) => state.user.userInfo[0]);
  // console.log('reduxdata', reduxData);
  const token = reduxData?.accessToken;

  let content;

  if (reduxData) {
    // console.log('The access token is', token);
    const id = reduxData.id;
    // console.log('The id is', id);
    const type = reduxData.type;
    // console.log('The type is', type);

    // Token and User type check
    if (token) {
      if (type === 'employee') {
        content = <ClientNavbar />;
      } else if (type === 'admin') {
        content = <AdminNavbar />
      } else if (type === 'employer') {
        content = <EmployerNavbar />
      }
    } else {
      // If there's no token, redirect to login
      content = <Landing />;
    }
  } else {
    content = <Landing />
  }


  const router = createBrowserRouter([
    {
      path: '/',
      element: content,
    }, {
      path: '/indx',
      element: <Index />,
    }, {
      path: '/anav',
      element: <AdminNavbar />,
    }, {
      path: '/cnav',
      element: <ClientNavbar />,
    }, {
      path: '/profile',
      element: <Profile />,
    }, {
      path: '/login',
      element: token ? content : <Login />,
    }, {
      path: '/signup',
      element: <Signup />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
