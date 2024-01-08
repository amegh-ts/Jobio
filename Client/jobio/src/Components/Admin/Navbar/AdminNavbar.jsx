import './AdminNavbar.scss'
import { DiCodeigniter } from "react-icons/di";
import { IoPersonSharp, IoHome, IoLayers, IoChatbubbleEllipses, IoPeople, IoDocumentText, IoCog, IoLogOut } from "react-icons/io5";

const AdminNavbar = () => {
    return (
        <div>
            <nav className='sidebar'>
                <header>
                    <div className="title">
                        <DiCodeigniter className='icon logo' />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className="menu-item">
                        <IoHome className='icon' />
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <IoLayers className='icon' />
                        <span>Services</span>
                    </div>
                    <div className="menu-item">
                        <IoChatbubbleEllipses className='icon' />
                        <span>Inbox</span>
                    </div>
                    <div className="menu-item">
                        <IoPeople className='icon' />
                        <span>Chats</span>
                    </div>
                    <div className="menu-item">
                        <IoDocumentText className='icon' />
                        <span>Requests</span>
                    </div>
                    <div className="menu-item">
                        <IoCog className='icon' />
                        <span>Settings</span>
                    </div>
                </div>

                <footer>
                    <div className="logout">
                        <IoLogOut className='icon logout-icon' />
                    </div>
                </footer>
            </nav>

            <section className="home" >
                <>
                    <div className='navbar-container'>
                        <div className='navbar-header'>
                            <h1>Jobio</h1>
                        </div>

                        <div className='navbar-icon'>
                            <span>
                                <IoPersonSharp />
                            </span>
                        </div>
                    </div>
                </>
                <div className={'main-body'} >


                </div>
            </section>
        </div>
    )
}

export default AdminNavbar