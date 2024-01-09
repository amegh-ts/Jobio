import { useState } from 'react';
import './Home.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';

const Home = () => {
  const [showWelcomeContainer, setShowWelcomeContainer] = useState(true);

  const handleCloseWelcomeContainer = () => {
    setShowWelcomeContainer(false);
  };


  return (
    <div className="Home">
      <div className="home-main">
        <div className="left">
          <div className="header">
            <img src="/Images/bg.png" alt="" />
          </div>
          <div className="photo"></div>
          <div className="footer">
            <h2>Name</h2>
            <h3>Highlights</h3>
            <h5>
              kozhikode, kerala, India <span>Contact info</span>
            </h5>
          </div>
        </div>

        <div className="middle">
          {showWelcomeContainer && (
            <div className="welcome-container">
              <div className="close" onClick={handleCloseWelcomeContainer}>
                <IoCloseCircleOutline className="icon" />
              </div>
              <div className="image">
                <img src="" alt="Profile" />
              </div>
              <div className="note">
                <h1>Welcome back Devil</h1>
              </div>
              <div className="status">
                <button>Available to work</button>
                <button>Unavailable to work</button>
              </div>
            </div>
          )}

          <div className="posts">
            <div className="post-container">
              <div className='header'>
                <div className='header-left'>
                  <div className='image'></div>
                </div>
                <div className='header-right'>

                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="right">
          <h1>ads</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
