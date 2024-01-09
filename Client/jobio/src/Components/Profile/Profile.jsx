import './Profile.scss'

const Profile = () => {
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
          </div>

        </div>

        <div className="education"></div>

        <div className="skills"></div>
      </section>
    </div>
  )
}

export default Profile