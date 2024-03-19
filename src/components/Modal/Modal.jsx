import './Modal.scss'; 
import React, { useState } from 'react'; 
import { FaEllipsisV, FaGithub, FaLink } from 'react-icons/fa'; // Import FontAwesome icons
import { Link } from 'react-router-dom'; 

const Modal = ({ img, title, subTitle, modalClose, githuburl, liveurl }) => {
  // State to manage visibility of options menu
  const [showOptions, setShowOptions] = useState(false);

  // Function to toggle visibility of options menu
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Inline style for modal background
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };

  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            {/* Title */}
            <h4 className="modal-title">{title}</h4>

            {/* Options menu */}
            <div className="options-menu" title="click to view links">
              <FaEllipsisV className="options-icon" onClick={toggleOptions} />
              {/* Show options list if showOptions is true */}
              {showOptions && (
                <ul className="options-list">
                  {/* Link to GitHub */}
                  <li>
                    <Link to={githuburl}>Github</Link> <FaGithub />
                  </li>
                  {/* Link to live website */}
                  <li>
                    <Link to={liveurl}>Live</Link> <FaLink />
                  </li>
                </ul>
              )}
            </div>

            {/* Close button */}
            <button type="button" className="btn-close" onClick={modalClose}></button>
          </div>
          <div className="modal-body">
            {/* Image */}
            <div className="st-flex-center">
              <img src={img} alt="Modal" />
            </div>

            {/* Subtitle */}
            <p className="modal-subtitle">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
