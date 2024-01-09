import { useState } from "react";

const Chats = () => {
  const [state, setState] = useState([]);
    const [data, setData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showChatBody, setShowChatBody] = useState(false);

    const storedData = localStorage.getItem('persist:unknown');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const senderId = user?.userInfo?.[0]?.id;

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const allusers = await getUsers();
    //             setData(allusers);
    //             const apiData = await userChats();
    //             setState(apiData);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    // const secondMembers = state.map(item => item.members[1]);
    // console.log('-------------------', secondMembers);

    // const handleUserClick = (user) => {
    //     setSelectedUser(user);
    //     setShowChatBody(true);
    // };
  return (
    <div>Chats</div>
  )
}

export default Chats