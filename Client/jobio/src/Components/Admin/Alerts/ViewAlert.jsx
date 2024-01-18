import { useEffect, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { IoRadio, IoCog, IoPerson } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";

import './ViewAlerts.scss'
import { deleteAlert, getAlert } from "../../ApiCalls";

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
      case 'system':
        return 'system-priority ';
      case 'common':
        return 'common-priority';
      case 'employer':
        return 'employer-priority';
      case 'employee':
        return 'employee-priority';
      default:
        return '';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'system':
        return <IoCog style={{ color: 'rgb(231, 0, 0)' }} />;
      case 'common':
        return <IoRadio style={{ color: 'rgb(141, 141, 141)' }} />;
      case 'employer':
        return <FaUserTie style={{ color: 'rgb(0, 128, 0)' }} />;
      case 'employee':
        return <IoPerson style={{ color: '#695CFE' }} />;
      default:
        return null;
    }
  };

  const handleDeleteAlert = async (data) => {
    try {
      await deleteAlert({id:data})
      window.location.reload();
      alert(`Deleted successfully`)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Alerts">
      <div className="notification-main">
        <div className='notification-header'>
          <CiBellOn className='bell-icon' />
          <h3>Alerts</h3>
        </div>
        <div className='notification-container'>
          {reversedState &&
            reversedState.map((alert) => (
              <div className={`notification-box ${getPriorityColor(alert.priority)}`} key={alert._id}>
                <div className="ntb-left">
                  {getPriorityIcon(alert.priority)}
                </div>
                <div className="ntb-right">
                  <div className="ntb-content">
                    {/* <h5>{notification.user}</h5> */}
                    <h6>  {new Date(alert.createdAt).toLocaleString()}</h6>
                    <p>{alert.alert}</p>
                  </div>
                  <div className="delete-notification" onClick={()=>{handleDeleteAlert(alert._id)}}>
                    <IoTrashOutline className="nt-icon" />
                  </div>
                </div>

              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ViewAlert