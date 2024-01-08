import React from 'react'
import './AdminNavbar.scss'
import { DiCodeigniter } from "react-icons/di";
import { IoHome, IoLayers, IoChatbubbleEllipses, IoPeople, IoDocumentText, IoCog, IoLogOut } from "react-icons/io5";


const AdminNavbar = () => {
    return (
        <div className='admin-main'>
            <div className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter className='icon logo'/>
                    </div>
                </header>

                <div className="sidebar-menu">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <IoHome className='icon'/>
                                <span>Home</span>
                            </li>
                            <li className="nav-link">
                                <IoLayers className='icon'/>
                                <span>Services</span>
                            </li>
                            <li className="nav-link">
                                <IoChatbubbleEllipses className='icon'/>
                                <span>Inbox</span>
                            </li>
                            <li className="nav-link">
                                <IoPeople className='icon'/>
                                <span>Chats</span>
                            </li>
                            <li className="nav-link">
                                <IoDocumentText className='icon'/>
                                <span>Requests</span>
                            </li>
                            <li className="nav-link">
                                <IoCog className='icon'/>
                                <span>Settings</span>

                            </li>
                        </ul>
                    </div>
                </div>

                <footer>
                    <div className="logout">
                        <IoLogOut className='icon logout-icon'/>
                    </div>
                </footer>
            </div>

            <section className='home'>
                abba
            </section>
        </div>
    )
}

export default AdminNavbar