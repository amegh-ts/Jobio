import { useEffect, useState } from 'react';
import { sendMessage, viewMessages } from '../ApiCalls';


//     return (
//         <div className='chat-body-main'>
//             <p>Chat id {selectedChatId}</p>
//             <div className="chat-body-container">
//                 {messages.length > 0 ? (
//                     <ul className="message-list">
//                         {messages.map((msg) => (
//                             <li key={msg._id} className={`message ${msg.senderId === senderId ? 'sender-message' : 'receiver-message'}`}>
//                                 <div className="message-bubble">{msg.text}</div>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No Conversation yet...</p>
//                 )}
//             </div>
//             <div className="input-container">
//                 <input
//                     type="text"
//                     placeholder="Type your message..."
//                     value={inputMessage}
//                     onChange={handleMessageChange}
//                     onKeyPress={handleKeyPress}
//                 />
//                 <button onClick={handleSendMessage}>Send</button>
//             </div>
//         </div>
//     );
// };

// export default ChatBody;



const ChatBody = () => {

    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    console.log('selected user', selectedChatDetails);

    const storedData = localStorage.getItem('persist:jobio');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const senderId = user?.userInfo?.[0]?.id;

    useEffect(() => {
        async function fetchData() {
            try {
                const getChat = await viewMessages(selectedChatId);
                setMessages(getChat || []);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectedChatId]);

    const handleMessageChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = async () => {
        if (inputMessage.trim() === '') {
            // Don't send empty messages
            return;
        }

        try {
            // Update the local message list with the new message
            setMessages((prevMessages) => [
                ...prevMessages,
                { _id: Date.now(), senderId, text: inputMessage },
            ]);

            // Call sendMessage function with chatId, senderId, and text
            await sendMessage(selectedChatId, senderId, inputMessage);

            // Clear the input field
            setInputMessage('');
        } catch (error) {
            // Handle the error (e.g., show an error message)
            console.error('Error sending message:', error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="cmblr-container"><div className="cmbr-header">
            <p>Chat with ramu</p>
        </div>
            <div className="cmbr-message">
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
                <div className="cmbl-card"><h1>abc test</h1></div>
            </div></div>
    )
}

export default ChatBody