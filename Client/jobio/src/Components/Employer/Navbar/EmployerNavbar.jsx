import { useEffect, useRef, useState } from 'react';
import './EmployerNavbar.scss'
import { DiCodeigniter } from 'react-icons/di';
import {
    IoPersonSharp,
    IoHome,
    IoLayers,
    IoChatbubbleEllipses,
    IoSearch,
    IoPeople,
    IoDocumentText,
    IoCog,
    IoLogOut,
    IoNotifications,
    IoMoonOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../Redux/UserRedux';
import Profile from '../../Profile/Profile';
import Chats from '../../Chats/Chats';
import EmployerHome from '../Home/EmployerHome';

const EmployerNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch()


    const [activePage, setActivePage] = useState(() => {
        // Retrieve the active page from sessionStorage on component mount
        return sessionStorage.getItem('activePage') || 'home';
    });

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    };

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
        home:<EmployerHome/>,
        chats: <Chats />,
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
                    <div className="menu-item" >
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
                    <div className="menu-item">
                        <IoChatbubbleEllipses className="icon" />
                        <span>Inbox</span>
                    </div>
                    <div className="menu-item">
                        <IoPeople className="icon" />
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
                            <IoMoonOutline />
                            <IoNotifications />
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