import { useEffect, useState } from 'react';
import './EmployerHome.scss';
import { IoCloseCircleOutline, IoThumbsUpOutline, IoEllipsisVertical } from 'react-icons/io5';
import { viewProfile } from '../../ApiCalls';
import Popup from '../../../Assets/Popups/Popup';

const EmployerHome = () => {
  const [showWelcomeContainer, setShowWelcomeContainer] = useState(true);
  const [data, setData] = useState({});
  const [addFeedPopup, setAddFeedPopup] = useState(false)

  const handleCloseWelcomeContainer = () => {
    setShowWelcomeContainer(false);
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const apiData = await viewProfile();
        setData(apiData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile()
  }, [])


  return (
    <div className="EHome">
      <div className="home-main">
        <div className="left">
          <div className="header">
            <img src="/Images/bg.png" alt="" />
          </div>
          <div className="photo"></div>
          <div className="footer">
            <h2>{data.username}</h2>
            <h3>{data.about}</h3>
            <h5>{data.city}, {data.district} </h5>
            <h5>Contact info</h5>
            <button>Add post</button>

          </div>
        </div>

        <div className="middle">

          <div className="add-post-container">
            <div className="apc-header">
              <section>
                <div className="image">
                  <img src="" alt="" />
                </div>
                <div className="add-post">
                  <button onClick={() => { setAddFeedPopup(true) }}>add post</button>
                </div>
              </section>
              <div className="add-post-buttons">
                <button onClick={() => { setAddFeedPopup(true) }}>Media</button>
                <button onClick={() => { setAddFeedPopup(true) }}>Events</button>
                <button onClick={() => { setAddFeedPopup(true) }}>Write Article</button>
              </div>
            </div>
            <Popup trigger={addFeedPopup} setTrigger={setAddFeedPopup}>
              <div className="add-feed-popup">
                <div className="afp-header">
                  <h3>Create New feed</h3>
                </div>
              </div>
            </Popup>
          </div>

          {showWelcomeContainer && (
            <div className="welcome-container">
              <div className="close" onClick={handleCloseWelcomeContainer}>
                <IoCloseCircleOutline className="icon" />
              </div>
              <div className="image">
                <img src="" alt="Profile" />
              </div>
              <div className="note">
                <h1>Welcome back {data.username}</h1>
              </div>
              <div className="status">
                {/* <button>Available to work</button>
                <button>Unavailable to work</button> */}
              </div>
            </div>
          )}

          <div className="posts">
            <div className="post-container">
              <div className='header'>
                <div className='header-left'>
                  <div className='image'>
                    <img src="" alt="pic" />
                  </div>
                  <div className="header-title">
                    <h3>Name</h3>
                    <h6>Time</h6>
                  </div>
                </div>
                <div className='header-right'>
                  <IoEllipsisVertical className="icon" />
                </div>
              </div>
              <div className='description'>
                <h4>Headline</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eligendi facere repudiandae eaque aperiam eum nisi natus. Id deserunt illum cumque, laboriosam, recusandae impedit, eos sunt labore magni maxime magnam.</p>
              </div>
              <div className='cimage'>
                <img src="/Images/bg.png" alt="" />
              </div>
              <div className='footer'>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Like</span>
                </div>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Comment</span>
                </div>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Repost</span>
                </div>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Send</span>
                </div>
              </div>
            </div>

            <div className="post-container">
              <div className='header'>
                <div className='header-left'>
                  <div className='image'>
                    <img src="" alt="pic" />
                  </div>
                  <div className="header-title">
                    <h3>Name</h3>
                    <h6>Time</h6>
                  </div>
                </div>
                <div className='header-right'>
                  <IoEllipsisVertical className="icon" />
                </div>
              </div>
              <div className='description'>
                <h4>Headline</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eligendi facere repudiandae eaque aperiam eum nisi natus. Id deserunt illum cumque, laboriosam, recusandae impedit, eos sunt labore magni maxime magnam.</p>
              </div>
              <div className='cimage'>
                <img src="/Images/bg.png" alt="" />
              </div>
              <div className='footer'>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Like</span>
                </div>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Comment</span>
                </div>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Repost</span>
                </div>
                <div className='blocks'>
                  <IoThumbsUpOutline />
                  <span>Send</span>
                </div>
              </div>
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

export default EmployerHome;
