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
    IoMoonOutline,
} from 'react-icons/io5';

const AdminNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <div className='admin'>
            <nav className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter className="icon logo" />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu-item">
                        <IoHome className="icon" />
                        <span>Home</span>
                    </div>
                    <div className="menu-item" onClick={toggleDropdown} ref={dropdownRef}>
                        <IoChatbubbleEllipses className="icon" />
                        <span>Inbox</span>
                        <div className={`dropdown-container ${isDropdownVisible ? 'visible' : ''}`} style={{ display: isDropdownVisible ? 'block' : 'none' }}>
                            <span className="dropdown-item">Send</span>
                            <span className="dropdown-item">View</span>
                        </div>
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
                <div className={'main-body'}></div>
            </section>
        </div>
    );
};

export default AdminNavbar;
