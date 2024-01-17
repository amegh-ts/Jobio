import { useState } from "react";
import { LuBellPlus } from 'react-icons/lu';
import './SendAlert.css'
import { sendAlert } from "../../ApiCalls";

const SendAlert = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [priority, setPriority] = useState('Common Message');

  const handleTextareaChange = (event) => {
    setAlertMessage(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSendClick = async () => {
    try {
      await sendAlert({ alert: alertMessage, priority });
      console.log(alertMessage, priority);
      window.alert("Message sent successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
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
            <textarea name="notification" cols="30" rows="10" value={alertMessage} onChange={handleTextareaChange}></textarea>
          </div>
          <div>
            <button onClick={handleSendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendAlert;
