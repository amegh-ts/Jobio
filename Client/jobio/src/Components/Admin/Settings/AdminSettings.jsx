import './AdminSettings.scss';

const AdminSettings = () => {
  return (
    <div className="Admin-settings">
      <div className="settings-container">
        <h3>Settings</h3>
        <div className="content-container">
          <div className="content-left">
            <div className="left-option" title="Edit Profile">
              edit Profile
            </div>
            <div className="left-option" title="Delete Profile">
              Delete Profile
            </div>
            {/* Add more options as needed */}
          </div>
          <div className="content-right">
            <p className="description">Hover over left options for details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
