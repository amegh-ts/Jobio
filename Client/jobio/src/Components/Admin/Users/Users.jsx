/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import './Users.scss';
import { GrGroup } from "react-icons/gr";
import { IoSearch, IoPencil, IoChatbubbles } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { createChat, getAllUsers } from '../../ApiCalls';

const Users = ({ setActivePageToChats }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filterStatus, setFilterStatus] = useState('active'); // 'all' or 'banned'

    const storedData = localStorage.getItem('persist:jobio');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userId = user?.userInfo?.[0]?.id;

    useEffect(() => {
        async function display() {
            try {
                const users = await getAllUsers();
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
            user.state.toLowerCase().includes(inputValue.toLowerCase()) ||
            user.type.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleFilterClick = () => {
        setFilterStatus(filterStatus === 'active' ? 'banned' : 'active');
        
        // Update filteredUsers based on the new filterStatus
        const filtered = allUsers.filter(user =>
            filterStatus === 'banned' ? user.isBanned : true
        );
        setFilteredUsers(filtered);
    };
    
    

    return (
        <div>
            <div className="all-users-main">
                <div className="al-users-header">
                    <div className='all-users-title'>
                        <GrGroup className='users-icon' />
                        <h3>Users</h3>
                    </div>
                    <div className='all-user-utils'>
                        <div className='all-users-input'>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                placeholder="Search"
                            />
                            <IoSearch />
                        </div>
                        <div className={`all-user-filter ${filterStatus === 'banned' ? 'active' : ''}`} onClick={handleFilterClick}>
                            <FaFilter style={{ color: filterStatus === 'banned' ? 'green' : 'inherit' }} />
                        </div>
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
