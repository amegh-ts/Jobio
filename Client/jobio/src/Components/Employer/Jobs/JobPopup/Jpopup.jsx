/* eslint-disable react/prop-types */
import './Jpopup.scss'
import { IoCloseCircle } from "react-icons/io5";

const Jpopup = (props) => {
    return (props.trigger) ? (
        <div className="jpopup">
            <div className="jpopup-inner">
                <div className="jclose-btn" onClick={()=>props.setTrigger(false)}><IoCloseCircle className='icon'/></div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Jpopup