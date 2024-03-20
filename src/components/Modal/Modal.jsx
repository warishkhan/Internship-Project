import './Modal.scss'; 
import React from 'react';  
import { FaGithub} from 'react-icons/fa'; // Import FontAwesome icons


const Modal = ({ img, title, subTitle, modalClose, githuburl, liveurl }) => {
 
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
          <div className='st-portfolio-btns d-flex justify-content-between align-items-center mb-4 px-3'>
        <a href={liveurl} className='st-btn-2 st-style-2 st-color2 mt-3'>Live URL</a>
        <a href={githuburl} className='st-btn-3 st-style-3 st-color3 mt-3'><span className='me-1'><FaGithub/></span> GitHub</a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
