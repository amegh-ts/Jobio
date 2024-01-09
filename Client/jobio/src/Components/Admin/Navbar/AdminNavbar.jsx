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

const AdminNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const [activePage, setActivePage] = useState('home');


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

    const pageComponents = {
        home: <Home />,
        sendAlert: <SendAlert />,
        viewAlert:<
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
                    <div className="menu-item">
                        <IoChatbubbleEllipses className="icon" />
                        <span>Chats</span>
                    </div>

                    <div className="menu-item">
                        <IoBriefcase className="icon" />
                        <span>Jobs</span>
                    </div>
                    <div className="menu-item">
                        <IoPeople className="icon" />
                        <span>Users</span>
                    </div>
                    <div className="menu-item">
                        <IoCog className="icon" />
                        <span>Settings</span>
                    </div>
                </div>

                <footer>
                    <div className="logout">
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
                        <div className="profile">
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
