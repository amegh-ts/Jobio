import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AdminNavbar from './Components/Admin/Navbar/AdminNavbar';
import Index from './Components/Index';
import ClientNavbar from './Components/Client/Navbar/ClientNavbar';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import { useDispatch, useSelector } from 'react-redux';
import Landing from './Components/Landing/Landing';
import EmployerNavbar from './Components/Employer/Navbar/EmployerNavbar';
import ForgotPassword from './Components/Login/ForgotPassword';
import { logoutUser } from './Redux/UserRedux';

function App() {

  const reduxData = useSelector((state) => state.user.userInfo[0]);
  // console.log('reduxdata', reduxData);
  const token = reduxData?.accessToken;
  const dispatch = useDispatch()

  let content;

  if (reduxData) {
    const state = reduxData.state;
    const type = reduxData.type;

  
    if (state === 'banned') {
      alert('You are Banned');
      dispatch(logoutUser())
        sessionStorage.clear();
    } else {
      if (token) {
        if (type === 'employee') {
          content = <ClientNavbar />;
        } else if (type === 'admin') {
          content = <AdminNavbar />;
        } else if (type === 'employer') {
          content = <EmployerNavbar />;
        }
      } else {
        content = <Landing />;
      }
    }
  } else {
    content = <Landing />;
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
    }, {
      path: '/forgotpassword',
      element: <ForgotPassword />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
