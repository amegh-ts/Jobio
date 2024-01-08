import './AdminNavbar.scss'
import { IoPersonSharp } from "react-icons/io5";
import Test from './Test';

const AdminNavbar = () => {
    return (
        <div>
            <nav className='sidebar'>
            <header>


            </header>

            <div className="menu-bar">
                <div className="menu">

                </div>
            </div>
        </nav>

            <section className="home" >
                <>
                    <div className='navbar-container'>
                        <div className='navbar-header'>
                            <h1>Unknown</h1>
                        </div>
                      
                        <div className='navbar-icon'>
                            <span>
                                <IoPersonSharp />
                            </span>
                        </div>
                    </div>
                </>
                <div className={'main-body'} >
                    <Test/>
                </div>
            </section>
            </div>
    )
}

export default AdminNavbar