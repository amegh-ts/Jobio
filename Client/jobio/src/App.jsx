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
import Test from './Components/Test/Test';
import { useEffect } from 'react';

function App() {

  const reduxData = useSelector((state) => state.user.userInfo[0]);
  // console.log('reduxdata', reduxData);
  const token = reduxData?.accessToken;
  const dispatch = useDispatch()

  useEffect(() => {
    const validateToken = () => {
      if (token) {
        // Decode the token to get expiration time (assuming it contains an 'exp' claim)
        const decodedToken = atob(token.split('.')[1]);
        const { exp } = JSON.parse(decodedToken);

        // Check if the token is expired
        if (exp && exp * 1000 < Date.now()) {
          // Token is expired, logout the user
          dispatch(logoutUser());
        }
      }
    };

    validateToken();
  }, [token, dispatch]);

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
    },{
      path: '/test',
      element: <Test />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
