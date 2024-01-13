import { useState } from 'react';
import './AdminSettings.scss';
import Popup from '../../../Assets/Popups/Popup';
import { deleteProfile } from '../../ApiCalls';

const AdminSettings = ({ setActivePage }) => {
  const [hoveredOption, setHoveredOption] = useState(null);
  const [deletePopup, setDeletePopup] = useState(false);

  const handleOptionHover = (description) => {
    setHoveredOption(description);
  };

  const options = [
    {
      title: 'Edit Account',
      description: 'Edit your Account',
      onClick: () => setActivePage('profile'),
    },
    {
      title: 'Delete Profile',
      description: 'Delete your profile',
      onClick: () => setDeletePopup(true),
    },
    { title: 'Send Feedback', description: 'Send your profile' },
    // Add more options as needed
  ];

  const handleDeleteProfile = async () => {
    try {
      await deleteProfile()
      dispatch(logoutUser())
      sessionStorage.clear();
      alert('Successfully deleted your account');

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Admin-settings">
      <div className="settings-container">
        <h3>Settings</h3>
        <div className="content-container">
          <div className="content-left">
            {options.map((option, index) => (
              <div
                key={index}
                className="left-option"
                title={option.title}
                onMouseEnter={() => handleOptionHover(option.description)}
                onMouseLeave={() => handleOptionHover(null)}
                onClick={option.onClick}
              >
                {option.title}
              </div>
            ))}
          </div>
          <div className="content-right">
            <p className="description">{hoveredOption || 'Hover over left options for details'}</p>
          </div>
          <Popup trigger={deletePopup} setTrigger={setDeletePopup}>
            <div className="delete-account-popup">
              <h3>Delete account</h3>
              <div className='message'>
                <p>Are you sure you want to delete your account..?</p>
              </div>
              <div className='delete-button'>
                <button>DELETE</button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
