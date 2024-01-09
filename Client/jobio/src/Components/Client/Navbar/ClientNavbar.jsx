import { useState } from 'react';
// import './ClientNavbar.scss';
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

const ClientNavbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <div>
            <nav className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter className="icon logo" />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu-item" onClick={toggleDropdown}>
                        <IoHome className="icon" />
                        <span>Home</span>
                        <div className={`dropdown-container ${isDropdownVisible ? 'visible' : ''}`} style={{ display: isDropdownVisible ? 'block' : 'none' }}>
                            <span className="dropdown-item">jjd</span>
                            <span className="dropdown-item">jjd</span>
                            <span className="dropdown-item">jjd</span>
                        </div>
                    </div>
                    <div className="menu-item">
                        <IoLayers className="icon" />
                        <span>Services</span>
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
                            <IoNotifications />
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

export default ClientNavbar;
