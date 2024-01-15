import { useEffect, useState } from 'react';
import './Users.scss';
import { GrGroup } from "react-icons/gr";
import { IoSearch, IoPencil } from "react-icons/io5";
import { createChat, getAllUsers } from '../../ApiCalls';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchInput, setSearchInput] = useState('');

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

    const storedData = localStorage.getItem('persist:unknown');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userId = user?.userInfo?.[0]?.id;

    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value;
        setSearchInput(inputValue);
        const filtered = allUsers.filter(user =>
            user.username.toLowerCase().includes(inputValue.toLowerCase()) ||
            user.email.toLowerCase().includes(inputValue.toLowerCase()) ||
            user.phone.includes(inputValue.toLowerCase()) ||
            user.type.toLowerCase().includes(inputValue.toLowerCase())
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
                                    <td>{user.phone}</td>
                                    <td>{user.type}</td>
                                    <td>
                                        <div className="edit-chat">
                                            <button><IoPencil className='bicon' /></button>
                                            <span> </span>
                                            <button onClick={() => handleChatButtonClick(userId, user._id)}>Chat</button>
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
