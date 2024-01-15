import { useEffect, useRef, useState } from 'react';
import './AdminNavbar.scss';
import { DiCodeigniter } from 'react-icons/di';
import {
    IoPersonSharp,
    IoHome,
    IoChatbubbleEllipses,
    IoBriefcase,
    IoSearch,
    IoPeople,
    IoCog,
    IoLogOut,
    IoNotifications,
    IoMoonOutline,
} from 'react-icons/io5';
import Home from '../Home/Home';
import SendAlert from '../Alerts/SendAlert';
import ViewAlert from '../Alerts/ViewAlert';
import Chats from '../../Chats/Chats';
import Jobs from '../Jobs/Jobs';
import Users from '../Users/Users';
import AdminSettings from '../Settings/AdminSettings';
import Profile from '../../Profile/Profile';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../Redux/UserRedux';

const AdminNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('');
    const dropdownRef = useRef(null);

    const dispatch = useDispatch()

    const [activePage, setActivePage] = useState(() => {
        // Retrieve the active page from sessionStorage on component mount
        return sessionStorage.getItem('activePage') || 'home';
    });

    const setActivePageToChats = () => {
        setActivePage('chats');
    };

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

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
    
    

    useEffect(() => {
        document.addEventListener('click', closeDropdown);

        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    useEffect(() => {
        // Save the active page to sessionStorage whenever it changes
        sessionStorage.setItem('activePage', activePage);
    }, [activePage]);

    const handleLogout = () => {
        dispatch(logoutUser())
        sessionStorage.clear();

    };

    const pageComponents = {
        home: <Home />,
        sendAlert: <SendAlert />,
        viewAlert: <ViewAlert />,
        chats: <Chats />,
        jobs: <Jobs />,
        users: <Users setActivePageToChats={setActivePageToChats}/>,
        settings: <AdminSettings setActivePage={setActivePage} />,
        profile: <Profile />
    };


    return (
        <div className='admin'>
            <nav className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter className="icon logo" />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className={`menu-item ${activePage === 'home' ? 'active' : ''}`} onClick={() => { setActivePage('home'); }}>
                        <IoHome className="icon" />
                        <span>Home</span>
                    </div>
                    <div className="menu-item" onClick={toggleDropdown} ref={dropdownRef}>
                        <IoNotifications className="icon" />
                        <span>Alert</span>
                        <div className={`dropdown-container ${isDropdownVisible ? 'visible' : ''}`} style={{ display: isDropdownVisible ? 'block' : 'none' }}>
                            <span className={`dropdown-item ${activePage === 'sendAlert' ? 'active' : ''}`} onClick={() => { setActivePage('sendAlert'); }}>Send</span>
                            <span className={`dropdown-item ${activePage === 'viewAlert' ? 'active' : ''}`} onClick={() => { setActivePage('viewAlert'); }}>View</span>
                        </div>
                    </div>
                    <div className={`menu-item ${activePage === 'chats' ? 'active' : ''}`} onClick={() => { setActivePage('chats'); }}>
                        <IoChatbubbleEllipses className="icon" />
                        <span>Chats</span>
                    </div>

                    <div className={`menu-item ${activePage === 'jobs' ? 'active' : ''}`} onClick={() => { setActivePage('jobs'); }}>
                        <IoBriefcase className="icon" />
                        <span>Jobs</span>
                    </div>
                    <div className={`menu-item ${activePage === 'users' ? 'active' : ''}`} onClick={() => { setActivePage('users'); }}>
                        <IoPeople className="icon" />
                        <span>Users</span>
                    </div>
                    <div className={`menu-item ${activePage === 'settings' ? 'active' : ''}`} onClick={() => { setActivePage('settings'); }}>
                        <IoCog className="icon" />
                        <span>Settings</span>
                    </div>
                </div>

                <footer>
                    <div className="logout" onClick={handleLogout}>
                        <IoLogOut className="icon logout-icon" />
                    </div>
                </footer>
            </nav>

            <section className="home">
                <div className="navbar-container">
                    <div className="navbar-search">
                        <IoSearch className="icon" />
                        <input type="text" placeholder="Search jobs, freelancers..." />
                    </div>

                    <div className="navbar-icon">
                        <span>
                            <IoMoonOutline />
                        </span>
                        <div className={`profile  ${activePage === 'profile' ? 'active' : ''}`} onClick={() => { setActivePage('profile'); }}>
                            <IoPersonSharp />
                        </div>
                    </div>
                </div>
                <div className={'main-body'}>
                    {pageComponents[activePage]}
                </div>
            </section>
        </div>
    );
};

export default AdminNavbar;
