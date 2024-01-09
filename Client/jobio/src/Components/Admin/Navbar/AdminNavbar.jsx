import { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import './AdminNavbar.scss';

const AdminNavbar = () => {
    const [isSidebarClosed, setSidebarClosed] = useState(true);
    const [activePage, setActivePage] = useState('dashboard');

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };

    const closeSidebar = () => {
        setSidebarClosed(true);
    };

    const handleLogout = () => {
        // Implement logout functionality
    };

    return (
        <div>
            <>
                <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
                    <header>
                        <div className="image-text" onClick={toggleSidebar}>
                            <span className="image">
                                <img src="logo.png" alt="" />
                            </span>
                            <div className="text logo-text">
                                <span className="name">Admin</span>
                                <span className="profession">Page</span>
                            </div>
                        </div>
                    </header>

                    <div className="menu-bar">
                        <div className="menu">
                            <ul className="menu-links">
                                <li className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => { setActivePage('dashboard'); closeSidebar(); }}>
                                    <a href="#dashboard">
                                        <i className='bx bx-home-alt icon' ></i>
                                        <span className="text nav-text">Dashboard</span>
                                    </a>
                                </li>
                                {/* ... Other menu items ... */}
                            </ul>
                        </div>

                        <div className="bottom-content">
                            <li onClick={handleLogout}>
                                <a href="#logout">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </nav>

                <section className="home">
                    <>
                        <div className='navbar-container'>
                            <div className='navbar-header'>
                                <h1>Unknown</h1>
                            </div>
                            <div className={`navbar-icon ${activePage === 'profile' ? 'active' : ''}`} onClick={() => { setActivePage('profile'); closeSidebar(); }}>
                                <span>
                                    <IoPersonSharp />
                                </span>
                            </div>
                        </div>
                    </>
                    <div className={'main-body'} onClick={closeSidebar}>
                        {/* Content based on activePage */}
                    </div>
                </section>
            </>
        </div>
    );
};

export default AdminNavbar;
