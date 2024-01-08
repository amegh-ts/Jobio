import React from 'react'
import './AdminNavbar.scss'
import { DiCodeigniter } from "react-icons/di";
import { IoHome, IoLayers, IoChatbubbleEllipses, IoPeople, IoDocumentText, IoCog, IoLogOut } from "react-icons/io5";


const AdminNavbar = () => {
    return (
        <div>
            <div className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter />
                    </div>
                </header>

                <div className="sidebar-menu">
                    <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                                <IoHome />
                                <span>Home</span>
                            </li>
                            <li>
                                <IoLayers />
                                <span>Services</span>
                            </li>
                            <li>
                                <IoChatbubbleEllipses />
                                <span>Inbox</span>
                            </li>
                            <li>
                                <IoPeople />
                                <span>Chats</span>
                            </li>
                            <li>
                                <IoDocumentText />
                                <span>Requests</span>
                            </li>
                            <li>
                                <IoCog />
                                <span>Settings</span>

                            </li>
                        </ul>
                    </div>
                </div>

                <footer>
                    <div className="logout">
                        <IoLogOut />
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default AdminNavbar