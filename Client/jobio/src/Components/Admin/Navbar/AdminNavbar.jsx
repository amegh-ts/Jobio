import React from 'react'
import './AdminNavbar.scss'
import { DiCodeigniter } from "react-icons/di";
import { IoHome,IoLayers, IoChatbubbleEllipses,IoPeople ,IoCog} from "react-icons/io5";


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
                                <IoPeople/>
                                <span>Chats</span>
                            </li>
                            <li><IoCog/></li>
                            <span>Settings</span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar