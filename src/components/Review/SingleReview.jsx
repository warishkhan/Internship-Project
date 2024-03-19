import { useState } from 'react';
import './Review.scss';
import PropTypes from 'prop-types';

const SingleReview = ({ element }) => {
  // Destructure the 'element' prop
  const { image, name, position, review } = element;

  // State to manage whether the review is expanded or not
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`st-testimonial st-style1 `} data--duration="0.8s" data--delay="0.2s">
      <div className="st-testimonial-text">
        {/* Render the review text conditionally based on the 'expanded' state */}
        <p>{expanded ? review : review.substring(0, 150) + '...'}</p>
        {/* Render a quote image */}
        <div className="st-quote"><img src="/images/icon/quote.png" alt="quote" /></div>
        {/* Render a button to toggle the expansion of the review */}
        <p className='text-warning' onClick={toggleExpanded}>
          {/* Change the button text based on the 'expanded' state */}
          {expanded ? 'Show less' : 'Read more'}
        </p>
      </div>
      <div className="st-testimonial-info">
        {/* Render the reviewer's image */}
        <div className="st-testimonial-img"><img src={image.url} alt="client1" /></div>
        <div className="st-testimonial-meta">
          {/* Render the reviewer's name */}
          <h4 className="st-testimonial-name">{name}</h4>
          {/* Render the reviewer's position */}
          <div className="st-testimonial-designation">{position}</div>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking and documentation
SingleReview.propTypes = {
  // Ensure that the 'element' prop is required and of type object
  element: PropTypes.object.isRequired,
};

export default SingleReview;
