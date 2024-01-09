import { FaRegUserCircle,FaRegThumbsUp, FaRegCommentDots, FaShare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import './Jobs.css'

const Jobs = () => {
  return (
    <div>
      <div className="body__main">
          <div className="post">
            <div className="post__header">
              <FaRegUserCircle />
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
                <FaRegThumbsUp />
                <h4>Like</h4>
              </div>
              <div className="inputOption">
                <FaRegCommentDots />
                <h4>Comment</h4>
              </div>
              <div className="inputOption">
                <FaShare />
                <h4>Share</h4>
              </div>
              <div className="inputOption">
                <IoSend />
                <h4>Send</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Jobs