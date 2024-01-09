import { FaUserCircle, FaThumbsUp, FaComment, FaShare, FaSend,} from 'react-icons/fa';

const Jobs = () => {
  return (
    <div>
      <div className="body__main">
        {/* Feed Starts */}
        <div className="feed">

          {/* Post Starts */}
          <div className="post">
            <div className="post__header">
              <FaUserCircle className="material-icons sidebar__topAvatar" />
              <div className="post__info">
                <h2>Somanath Goudar</h2>
                <p>Job Description</p>
              </div>
            </div>

            <div className="post__body">
              <p>Message here</p>
            </div>

            <div className="feed__inputOptions">
              <div className="inputOption">
                <FaThumbsUp style={{ color: 'gray' }} className="material-icons" />
                <h4>Like</h4>
              </div>
              <div className="inputOption">
                <FaComment style={{ color: 'gray' }} className="material-icons" />
                <h4>Comment</h4>
              </div>
              <div className="inputOption">
                <FaShare style={{ color: 'gray' }} className="material-icons" />
                <h4>Share</h4>
              </div>
              <div className="inputOption">
                <FaSend style={{ color: 'gray' }} className="material-icons" />
                <h4>Send</h4>
              </div>
            </div>
          </div>
          {/* Post Ends */}

          {/* Add more posts as needed */}
        </div>
        {/* Feed Ends */}
      </div>
    </div>
  )
}

export default Jobs