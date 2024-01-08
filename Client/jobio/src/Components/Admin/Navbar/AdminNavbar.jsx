import React from 'react'
import './AdminNavbar.scss'
import { DiCodeigniter } from "react-icons/di";

const AdminNavbar = () => {
    return (
        <div>
            <div className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default AdminNavbar