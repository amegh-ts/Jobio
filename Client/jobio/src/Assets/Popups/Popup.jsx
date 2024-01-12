import './Popup.scss'
import { IoCloseCircle } from "react-icons/io5";

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="close-btn" onClick={()=>props.setTrigger(false)}><IoCloseCircle className='icon'/></div>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup