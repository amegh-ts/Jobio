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

function App() {

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
