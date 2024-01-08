import React, { useState } from 'react';
import './AdminNavbar.css'
import { IoPersonSharp } from "react-icons/io5";



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
        // dispatch(logoutUser())
    };

    const setActivePageToChats = () => {
        setActivePage('chats');
    };

    const pageComponents = {
        // dashboard: <AdminDashboard />,
        // notification: <SendNotification />,
        // allusers: <AllUsers setActivePageToChats={setActivePageToChats} />, 
        // profile: <Profile />,
        // chats: <Chat />
    };



    return (
        <div>
            <>
                <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
                    <header>
                        <div className="image-text">
                            <span className="image">
                                <img src="/Images/people.svg" alt="" onClick={toggleSidebar} />
                            </span>

                            <div className="text logo-text">
                                <h1>Job.io</h1>
                            </div>
                        </div>

                    </header>

                    <div className="menu-bar">
                        <div className="menu">

                            {/* <li className="search-box">
                                    <i className='bx bx-search icon'></i>
                                    <input type="text" placeholder="Search..." />
                                </li> */}

                            <ul className="menu-links">
                                <li className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => { setActivePage('dashboard'); closeSidebar(); }}>
                                    <a href="#dashboard">
                                        <i className='bx bx-home-alt icon' ></i>
                                        <span className="text nav-text">Dashboard</span>
                                    </a>
                                </li>

                                <li className={`nav-link ${activePage === 'notification' ? 'active' : ''}`} onClick={() => { setActivePage('notification'); closeSidebar(); }}>
                                    <a href="#notification">
                                        <i className='bx bx-bell icon'></i>
                                        <span className="text nav-text">Notifications</span>
                                    </a>
                                </li>

                                <li className={`nav-link ${activePage === 'allusers' ? 'active' : ''}`} onClick={() => { setActivePage('allusers'); closeSidebar(); }}>
                                    <a href="#revenue">
                                        <i className='bx bx-group icon' ></i>
                                        <span className="text nav-text">Users</span>
                                    </a>
                                </li>

                                <li className={`nav-link ${activePage === 'chats' ? 'active' : ''}`} onClick={() => { setActivePage('chats'); closeSidebar(); }}>
                                    <a href="#chats">
                                        <i className='bx bx-chat icon' ></i>
                                        <span className="text nav-text">Chats</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#analytic">
                                        <i className='bx bx-pie-chart-alt icon' ></i>
                                        <span className="text nav-text">Analytics</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#likes">
                                        <i className='bx bx-heart icon' ></i>
                                        <span className="text nav-text">Likes</span>
                                    </a>
                                </li>

                                <li className="nav-link" onClick={closeSidebar}>
                                    <a href="#wallet">
                                        <i className='bx bx-wallet icon' ></i>
                                        <span className="text nav-text">Wallets</span>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="bottom-content">
                            <li className="" onClick={handleLogout}>
                                <a href="#logout">
                                    <i className='bx bx-log-out icon' ></i>
                                    <span className="text nav-text">Logout</span>
                                </a>
                            </li>
                        </div>
                    </div>
                </nav>

                <section className="home" >
                    <>
                        <div className='navbar-container'>
                            <div className='navbar-header'>
                                <input type="text" />
                            </div>
                            <div className={`navbar-icon ${activePage === 'profile' ? 'active' : ''}`} onClick={() => { setActivePage('profile'); closeSidebar(); }}>
                                <span>
                                    <IoPersonSharp />
                                    <p>Name</p>
                                </span>
                            </div>
                        </div>
                    </>
                    <div className={'main-body'} onClick={closeSidebar}>
                        {pageComponents[activePage]}
                    </div>
                </section>
            </>
        </div>
    );
};

export default AdminNavbar;
