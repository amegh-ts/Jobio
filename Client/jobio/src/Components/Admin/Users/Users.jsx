/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Users.scss';
import { GrGroup } from "react-icons/gr";
import { IoSearch, IoPencil, IoChatbubbles, IoBan } from "react-icons/io5";
import { banUser, createChat, fetchUser, getAllUsers } from '../../ApiCalls';
import Popup from '../../../Assets/Popups/Popup';

const Users = ({ setActivePageToChats }) => {
    const [data, setData] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [banPopup, setBanPopup] = useState(false)
    const [Ids, setIds] = useState({})
    // const [banState, setBanState] = useState('');

    const storedData = localStorage.getItem('persist:jobio');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userId = user?.userInfo?.[0]?.id;

    useEffect(() => {
        async function display() {
            try {
                const users = await getAllUsers();
                // console.log(users);
                const filteredUsers = users.filter(user => user._id !== userId);
                setAllUsers(filteredUsers);
                setFilteredUsers(filteredUsers);
            } catch (error) {
                console.log(error);
            }
        }
        display();
    }, []);


    const handleChatButtonClick = async (firstId, secondId) => {
        try {
            await createChat({ firstId, secondId });
            setActivePageToChats();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);
        const filtered = allUsers.filter(user =>
            user.username.toLowerCase().includes(inputValue.toLowerCase()) ||
            user.email.toLowerCase().includes(inputValue.toLowerCase()) ||
            user.type.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleBanButtonClick = async (AdminId, userId) => {
        setBanPopup(true);
        setIds({ AdminId, userId })
        try {
            const apiData = await fetchUser(userId)
            setData(apiData)
        } catch (error) {
            console.log(error);
        }
    }

    const handleBanUser = async () => {
        console.log(userId);

        const newState = data.state === 'banned' ? 'inactive' : 'banned';
        try {
            await banUser(Ids.userId, { state: newState })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        // setBanState(newState);
    }

    return (
        <div>
            <div className="all-users-main">
                <div className="al-users-header">
                    <div className='all-users-title'>
                        <GrGroup className='users-icon' />
                        <h3>Users</h3>
                    </div>
                    <div className='all-users-input'>
                        <input
                            type="text"
                            value={searchInput}
                            onChange={handleSearchInputChange}
                            placeholder="Search"
                        />
                        <IoSearch />
                    </div>
                </div>
                <div className="table-container">
                    <table className="all-users-table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>State</th>
                                <th>Phone</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="user-cards-img">
                                            <img src='/Images/p1.png' alt="" />
                                        </div>
                                    </td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.state}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.type}</td>
                                    <td>
                                        <div className="edit-chat">
                                            <button><IoPencil className='bicon' /></button>
                                            <button onClick={() => handleChatButtonClick(userId, user._id)}><IoChatbubbles className='bicon' /></button>
                                            <button onClick={() => handleBanButtonClick(userId, user._id)}><IoBan /></button>

                                            <Popup trigger={banPopup} setTrigger={setBanPopup} key={user._id}>
                                                <div className="ban-popup">
                                                    <h3>{data.state === 'banned' ? 'Unban' : 'Ban'}</h3>
                                                    <div className="ban-popup-container">
                                                        <div className="container-prompt">
                                                            <h2>Do you want to {data.state === 'banned' ? 'unban' : 'ban'} {data.username}</h2>
                                                            {/* <h3>{Ids.AdminId}</h3>
                                                            <h3>{Ids.userId}</h3> */}
                                                            <h2></h2>
                                                        </div>
                                                        <div className="container-button">
                                                            <button onClick={() => handleBanUser(userId, user._id)}>
                                                                {data.state === 'banned' ? 'Unban' : 'Ban'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Popup>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
