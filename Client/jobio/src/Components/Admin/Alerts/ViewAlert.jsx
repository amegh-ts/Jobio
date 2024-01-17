import { useEffect, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import './ViewAlert.css'
import { getAlert } from "../../ApiCalls";

const ViewAlert = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function display() {
      const alert = await getAlert();
      setState(alert);
    }
    display()

  }, [])

  const reversedState = [...state].reverse();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'high-priority';
      case 'medium':
        return 'medium-priority';
      case 'low':
        return 'low-priority';
      default:
        return '';
    }
  };
  return (
    <div>
      <div className="notification-main">
        <div className='notification-header'>
          <CiBellOn className='bell-icon' />
          <h3>Alerts</h3>
        </div>
        <div className='notification-container'>
          {reversedState &&
            reversedState.map((alert) => (
              <div className={`notification-box ${getPriorityColor(alert.priority)}`} key={alert._id}>
                <div className="ntb-content">
                  {/* <h5>{notification.user}</h5> */}
                  <h6>  {new Date(alert.createdAt).toLocaleString()}</h6>
                  <p>{alert.alert}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ViewAlert