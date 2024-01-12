import { useEffect, useState } from 'react';
import './Profile.scss'
import { editProfile, viewProfile } from '../ApiCalls';
import { IoPencil } from "react-icons/io5";
import Popup from '../../Assets/Popups/Popup';

const Profile = () => {
  const [data, setData] = useState({});
  const [buttonPopup, setButtonPopup] = useState(false)
  const [contactPopup, setContactPopup] = useState(false)

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [dob, setDob] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [district, setDistrict] = useState('')
  const [photo, setPhoto] = useState('')
  const [coverphoto, setCoverphoto] = useState('')
  const [about, setAbout] = useState('')

  const KeralaStates = [
    'Trivandrum',
    'Kollam',
    'Pathanamthitta',
    'Alappuzha',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod',
  ];

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

  useEffect(() => {
    setFirstname(data.firstname || '');
    setLastname(data.lastname || '');
    setUsername(data.username || '');
    setDob(data.dob || '');
    setPhone(data.phone || '');
    setCity(data.city || '');
    setDistrict(data.district || '');
    setPhoto(data.photo || '');
    setCoverphoto(data.coverphoto || '');
    setAbout(data.about || '');
  }, [data])

  console.log(firstname, lastname, username, dob, phone, city, district, photo, coverphoto);

  const onSubmit = async () => {
    try {
      await editProfile({ firstname, lastname, username, dob, phone, city, district, photo, coverphoto, about })
      alert('Successfully updated');
      setButtonPopup(false);

    } catch (error) {
      console.log(error);
      alert("eroor")
    }
  }


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
              <h5>{data.city}, {data.district}, India : <span className='contact-info' onClick={() => { setContactPopup(true) }}>Contact info</span></h5>
              <Popup trigger={contactPopup} setTrigger={setContactPopup}>
                <h3>Contact info</h3>
                <div>
                  <span>Phone : </span><span>{data.phone}</span>
                </div>
              </Popup>
            </div>
          </div>
          <div className='footer'>
            <h4>{data.about}</h4>
          </div>

          <div className='edit-container'>
            <span className='icon' onClick={() => setButtonPopup(true)}>
              <IoPencil />
            </span>
          </div>

          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div className="profile-popup">
              <h3>Edit Profile</h3>
              <div className="form">
                <input type="text" placeholder='Firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                <input type="text" placeholder='Lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="date" placeholder='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
                <input type="number" placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                <select name="district" id="district" value={district} onChange={(e) => { setDistrict(e.target.value) }}>
                  <option value="" disabled selected>State</option>
                  {KeralaStates.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <input type="text" placeholder='Photo' value={photo} onChange={(e) => { setPhoto(e.target.value) }} />
                <input type="text" placeholder='Cover Photo' value={coverphoto} onChange={(e) => { setCoverphoto(e.target.value) }} />
                <textarea name="about" id="about" cols="30" rows="10" placeholder='Tell us about you' value={about} onChange={(e) => { setAbout(e.target.value) }}></textarea>

                <button onClick={onSubmit}>SUBMIT</button>
              </div>
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