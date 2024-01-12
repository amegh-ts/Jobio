import { useEffect, useState } from 'react';
import './Profile.scss'
import { viewProfile } from '../ApiCalls';
import { IoPencil } from "react-icons/io5";
import Popup from '../../Assets/Popups/Popup';

const Profile = () => {
  const [data, setData] = useState({});
  const [buttonPopup,setButtonPopup]=useState(false)

  useEffect(() => {
    async function fetchProfile() {
      try {
        const apiData = await viewProfile();
        setData(apiData)
        console.log('api data', apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile()
  }, [])
  return (
    <div className="Profile">
      <section className="column">
        <div className="profile-container">
          <div className='header'>
            <img src="/Images/bg.png" alt="" />
          </div>
          <div className='middle'>
            <div className="photo"></div>
            <div>
              <h2>{data.firstname}</h2><span> </span><h2>{data.lastname}</h2>
              <h2>{data.username}</h2>
              <h5>kozhikode, kerala, India <span>Contact info</span></h5>
            </div>
          </div>
          <div className='footer'>
            <h3>Highlights</h3>
            <h3>Highlights</h3>
            <h3>Highlights</h3>
          </div>

          <div className='edit-container'>
            <span className='icon' onClick={()=>setButtonPopup(true)}>
              <IoPencil />
            </span>
          </div>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="profile-popup">
            <h3>Edit Profile</h3>
            <input type="text" placeholder='Firstname' />
            </div>
          </Popup>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className='skill-container'>
            <button className='btn'>HTML</button>
            <button className='btn'>HTML</button>
            <button className='btn'>HTML</button>
            <button className='btn'>HTML</button>
          </div>
          <div className='edit-container'>
            <span className='icon'>
              <IoPencil />
            </span>
          </div>
        </div>

        <div className="education">
          <h3>Education</h3>
          <div className="education-container">
            <div>
              <h5>University of Calicut</h5>
              <h6>Bachelor of science - CS</h6>
              <p>2020 - 2023</p>
            </div>
          </div>
          <div className='edit-container'>
            <span className='icon'>
              <IoPencil />
            </span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Profile