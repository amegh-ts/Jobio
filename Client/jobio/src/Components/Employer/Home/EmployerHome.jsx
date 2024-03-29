/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './EmployerHome.scss';
import { IoCloseCircleOutline, IoThumbsUpOutline, IoEllipsisVertical, IoSend } from 'react-icons/io5';
import { allFeeds, createFeed, viewProfile } from '../../ApiCalls';
import Popup from '../../../Assets/Popups/Popup';

const EmployerHome = ({ userId }) => {
  const [showWelcomeContainer, setShowWelcomeContainer] = useState(true);
  const [data, setData] = useState({});
  const [addFeedPopup, setAddFeedPopup] = useState(false)

  const [feedContent, setFeedContent] = useState('');
  const [file, setFile] = useState('');
  const [allFeed, setAllFeed] = useState([])

  // console.log(data);

  const handleCloseWelcomeContainer = () => {
    setShowWelcomeContainer(false);
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const apiData = await viewProfile();
        setData(apiData)
        const allfeedData = await allFeeds()
        setAllFeed(allfeedData)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProfile()
  }, [])

  const reversedState = [...allFeed].reverse();



  const convertToBase64 = async (e) => {
    // console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      // console.log(reader.result);
      setFile(reader.result)
    }
    reader.onerror = error => {
      console.log('Error ', error);
    }
  }

  const onSendClick = async () => {
    try {
      window.location.reload();
      await createFeed({ senderId: userId, description: feedContent, image: file, username: data.username })
      alert("Feed created successfully")
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="EHome">
      <div className="home-main">
        <div className="left">
          <div className="header">
            {/* <img src={!data.coverphoto || data.coverphoto === '' || data.coverphoto === null ? '/Images/banner.png' : data.coverphoto} alt="" width={100} height={100} /> */}
            <img
              src={data?.coverphoto || '/Images/banner.png'}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="photo">
            {/* <img src={!data.photo || data.photo === '' || data.photo === null ? '/Images/user.png' : data.photo} alt="" width={100} height={100} /> */}
            <img
              src={data?.photo || '/Images/user.png'}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div className="footer">
            {data && (
              <>
                <h2>{data.username}</h2>
                <h3>{data.about}</h3>
                <h5>{data.city}, {data.district} </h5>
                <h5>Contact info : <span>{data.email}</span></h5>
                {/* <button>Add post</button> */}
              </>
            )}
          </div>
        </div>
        <div className="middle">
          <div className="add-post-container">
            <div className="apc-header">
              <section>
                <div className="image">
                  {/* <img src={!data.photo || data.photo === '' || data.photo === null ? '/Images/user.png' : data.photo} alt="" width={100} height={100} /> */}
                  <img
                    src={data?.photo || '/Images/user.png'}
                    alt=""
                    width={100}
                    height={100}
                  />
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
                <div className="afp-container">
                  <textarea name="" id="" placeholder='What do you want to write about?' value={feedContent} onChange={(e) => setFeedContent(e.target.value)}></textarea>
                </div>
                <div className="afp-footer">
                  <input type="file" name="" id="" accept='image/*' onChange={convertToBase64} />
                  {file == '' || file == null ? '' : <img src={file} alt="" width={100} height={100} />}
                  <button onClick={onSendClick}><IoSend /></button>
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
                {/* <img src={!data.photo || data.photo === '' || data.photo === null ? '/Images/user.png' : data.photo} alt="" width={100} height={100} /> */}
                <img
                  src={data?.photo || '/Images/user.png'}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="note">
                <h1>Welcome back {data?.username}</h1>
              </div>
              <div className="status">
                {/* <button>Available to work</button>
                <button>Unavailable to work</button> */}
              </div>
            </div>
          )}
          <div className="posts">
            {reversedState &&
              reversedState.map((feeds,) => (
                <div className="post-container" key={feeds._id}>
                  <div className='header'>
                    <div className='header-left'>
                      <div className='image'>
                        {/* <img src={!data.photo || data.photo === '' || data.photo === null ? '/Images/user.png' : data.photo} alt="" width={70} height={70} /> */}
                        <img
                          src={feeds?.photo || '/Images/user.png'}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="header-title">
                        <h3>{feeds.username}</h3>
                        <h6>{new Date(feeds.createdAt).toLocaleString()}</h6>
                      </div>
                    </div>
                    <div className='header-right'>
                      <IoEllipsisVertical className="icon" />
                    </div>
                  </div>
                  <div className='description'>
                    <p>{feeds.description}</p>
                  </div>
                  <div className='cimage'>
                    <img src={feeds.image} alt="" />
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
              ))}
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