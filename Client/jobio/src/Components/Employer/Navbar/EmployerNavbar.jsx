import { useEffect, useRef, useState } from 'react';
import './EmployerNavbar.scss'
import { DiCodeigniter } from 'react-icons/di';
import {
    IoPersonSharp,
    IoHome,
    IoLayers,
    IoChatbubbleEllipses,
    IoSearch,
    IoDocumentText,
    IoCog,
    IoLogOut,
    IoNotifications,
    IoMoonOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../Redux/UserRedux';
import Profile from '../../Profile/Profile';
import EmployerHome from '../Home/EmployerHome';
import Chats from '../../Chats/Chats';

const EmployerNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('');
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()

    const storedData = localStorage.getItem('persist:jobio');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userType = user?.userInfo?.[0]?.type;
    const userId = user?.userInfo?.[0]?.id;

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
        window.location.reload();
    };
    const pageComponents = {
        home:<EmployerHome userId={userId}/>,
        chats: <Chats setActivePageToChats={setActivePageToChats}/>,
        profile: <Profile />
    };

  return (
    <div className='employer'>
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
                        <IoLayers className="icon" />
                        <span>Services</span>
                        <div className={`dropdown-container ${isDropdownVisible ? 'visible' : ''}`} style={{ display: isDropdownVisible ? 'block' : 'none' }}>
                            <span className="dropdown-item">jjd</span>
                            <span className="dropdown-item">jjd</span>
                            <span className="dropdown-item">jjd</span>
                        </div>
                    </div>
                    <div className={`menu-item ${activePage === 'chats' ? 'active' : ''}`} onClick={() => { setActivePage('chats'); }}>
                        <IoChatbubbleEllipses className="icon" />
                        <span>Chats</span>
                    </div>
                    <div className="menu-item">
                        <IoDocumentText className="icon" />
                        <span>Request</span>
                    </div>
                    <div className="menu-item">
                        <IoCog className="icon" />
                        <span>Settings</span>
                    </div>
                </div>

                <footer>
                    <div className="logout">
                        <IoLogOut className="icon logout-icon" onClick={handleLogout}/>
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
                            <IoMoonOutline className='icon'/>
                            <IoNotifications className='icon'/>
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
  )
}

export default EmployerNavbar