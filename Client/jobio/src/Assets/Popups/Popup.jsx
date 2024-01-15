/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Popup.scss'
import { IoCloseCircle } from "react-icons/io5";

const Popup = (props) => {
    
  const [primaryColor, setPrimaryColor] = useState('');

  const storedData = localStorage.getItem('persist:jobio');
  const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
  const userType = user?.userInfo?.[0]?.type;



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

  }, [primaryColor, userType]);


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="close-btn" onClick={()=>props.setTrigger(false)}><IoCloseCircle className='icon'/></div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup