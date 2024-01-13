import { useState } from 'react';
import './AdminSettings.scss';

const AdminSettings = () => {
  const [hoveredOption, setHoveredOption] = useState(null);

  const handleOptionHover = (description) => {
    setHoveredOption(description);
  };

  const options = [
    { title: 'Edit Profile', description: 'Edit your profile' },
    { title: 'Delete Profile', description: 'Delete your profile' },
    // Add more options as needed
  ];

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
              >
                {option.title}
              </div>
            ))}
          </div>
          <div className="content-right">
            <p className="description">{hoveredOption || 'Hover over left options for details'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
