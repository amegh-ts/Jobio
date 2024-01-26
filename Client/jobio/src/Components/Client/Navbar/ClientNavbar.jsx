import { useEffect, useState } from 'react';
import './ClientNavbar.scss';
import { DiCodeigniter } from 'react-icons/di';
import {
    IoPersonSharp,
    IoHome,
    IoBriefcase,
    IoChatbubbleEllipses,
    IoSearch,
    IoDocumentText,
    IoCog,
    IoLogOut,
    IoNotifications,
    IoMoonOutline,
} from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../Redux/UserRedux';
import Profile from '../../Profile/Profile';
import Chats from '../../Chats/Chats';
import ClientHome from '../Home/ClientHome';
import ViewJobs from '../Jobs/ViewJobs';
import ClientAlerts from '../Alerts/ClientAlerts';


const ClientNavbar = () => {
    const [primaryColor, setPrimaryColor] = useState('');
    const dispatch = useDispatch()

    const storedData = localStorage.getItem('persist:jobio');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userType = user?.userInfo?.[0]?.type;
    const userId = user?.userInfo?.[0]?.id;


    const [activePage, setActivePage] = useState(() => {
        // Retrieve the active page from sessionStorage on component mount
        return sessionStorage.getItem('activePage') || 'home';
    });

    const setActivePageToChats = () => {
        setActivePage('chats');
    };


    useEffect(() => {
        // Set primary color based on user type
        switch (userType) {
            case 'admin':
                setPrimaryColor('rgb(231, 0, 0)'); // Red color
                break;
            case 'employer':
                setPrimaryColor('rgb(0, 128, 0'); // Green color
                break;
            case 'employee':
                setPrimaryColor('#695CFE'); // Blue color
                break;
            default:
                setPrimaryColor('#695CFE'); // Default color
        }
        document.body.style.setProperty('--primary-color', primaryColor);

    }, [primaryColor]);


    useEffect(() => {
        // Save the active page to sessionStorage whenever it changes
        sessionStorage.setItem('activePage', activePage);
    }, [activePage]);

    const handleLogout = () => {
        dispatch(logoutUser())
        sessionStorage.clear();
        window.location.reload();
    };

    const pageComponents = {
        home: <ClientHome userId={userId}/>,
        chats: <Chats/>,
        profile: <Profile />,
        jobs:<ViewJobs setActivePageToChats={setActivePageToChats} />,
        alert:<ClientAlerts/>
    };

    return (
        <div className='client'>
            <nav className="sidebar">
                <header>
                    <div className="title">
                        <DiCodeigniter className="icon logo" />
                    </div>
                </header>

                <div className="menu-bar">
                    <div className={`menu-item ${activePage === 'home' ? 'active' : ''}`} onClick={() => { setActivePage('home'); }}>
                        <IoHome className="icon" />
                        <span>Home</span>
                    </div>
                    <div className={`menu-item ${activePage === 'jobs' ? 'active' : ''}`} onClick={() => { setActivePage('jobs'); }}>
                        <IoBriefcase className="icon" />
                        <span>Jobs</span>
                    </div>
                    <div className="menu-item">
                        <IoDocumentText className="icon" />
                        <span>Entries</span>
                    </div>
                    <div className={`menu-item ${activePage === 'chats' ? 'active' : ''}`} onClick={() => { setActivePage('chats'); }}>
                        <IoChatbubbleEllipses className="icon" />
                        <span>Chats</span>
                    </div>
                    <div className="menu-item">
                        <IoCog className="icon" />
                        <span>Settings</span>
                    </div>
                </div>
                <footer>
                    <div className="logout">
                        <IoLogOut className="icon logout-icon" onClick={handleLogout} />
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
                            <IoNotifications className={` ${activePage === 'alert' ? 'active' : ''}`} onClick={() => { setActivePage('alert') }} />
                        </span>
                        <div className={`profile  ${activePage === 'profile' ? 'active' : ''}`} onClick={() => { setActivePage('profile'); }}>
                            <IoPersonSharp />
                        </div>
                    </div>
                </div>
                <div className={'main-body'}>
                    {pageComponents[activePage]}
                </div>
            </section>
        </div>
    );
};

export default ClientNavbar;
