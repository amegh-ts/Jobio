import { useEffect, useState } from 'react';
import './Profile.scss'
import { viewProfile } from '../ApiCalls';

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(()=>{
    async function fetchProfile() {
      try {
        const apiData=await viewProfile();
        setData(apiData)
        console.log('api data',apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile()
  },[])
  return (
    <div className="Profile">
      <section className="column">
        <div className="profile-container">
          <div className='header'>
            <img src="/Images/bg.png" alt="" />
          </div>
          <div className='photo'></div>
          <div className='footer'>
            <h2>Name</h2>
            <h3>Highlights</h3>
            <h5>kozhikode, kerala, India <span>Contact info</span></h5>
          </div>

        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className='skill-container'>
            <button className='btn'>HTML</button>
            <button className='btn'>HTML</button>
            <button className='btn'>HTML</button>
            <button className='btn'>HTML</button>
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
        </div>

      </section>
    </div>
  )
}

export default Profile