import { useState } from "react";
import { LuBellPlus } from 'react-icons/lu';
import './SendAlert.css'
import { sendAlert } from "../../ApiCalls";
const SendAlert = () => {
  const [notification, setNotification] = useState('');
  const [priority, setPriority] = useState('Common Message');

  const handleTextareaChange = (event) => {
    setNotification(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSendClick = async () => {
    try {
      await sendAlert({ notification, priority })
      console.log(notification,priority);
    } catch (error) {
      console.log(error);
    }
    alert("Message sent successfully")
  };
  return (
    <div className="send-notification-main">
      <div className="container">
        
        <div className="send-notification-header">
          <LuBellPlus className="bell-plus-icon" />
          <h3>Send Alert</h3>
        </div>
        <div className="send-notification-body">
          <div>
            <select value={priority} onChange={handlePriorityChange}>
              <option value="common">Common</option>
              <option value="system">System</option>
              <option value="employer">Employer</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div>
            <textarea name="notification" cols="30" rows="10" value={notification} onChange={handleTextareaChange} ></textarea>
          </div>
          <div>
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendAlert