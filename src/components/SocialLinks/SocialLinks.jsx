import PropTypes from 'prop-types';
import { Icon } from '@iconify/react'; 
import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux
import { fetchData } from '../../actions/dataActions'; // Importing fetchData action

// SocialLinks component definition
const SocialLinks = () => {
  // Redux state management
  const dispatch = useDispatch(); // Dispatch hook
  const { myData } = useSelector(state => state.data); // Selecting data from Redux store

  // State to track active link
  const [activeLink, setActiveLink] = useState(0);

  // Function to handle icon hover
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData(); // Dispatching fetch data action
  }, [dispatch]); // Dependency array to run effect only once on mount

  return (
    // Container for social links
    <div className="st-social-link">
      {/* Mapping over social links data and rendering each link */}
      {(myData.social_handles && myData.social_handles.length) && myData.social_handles.map((item, index) => (
        <Link
          to={item.link}
          className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
          onMouseEnter={() => handleIconHover(index)}
          key={index}
        >
          {/* Social icon */}
          <span className="st-social-icon"><Icon icon={`fa6-brands:${String(item.platform).toLowerCase()}`} /></span>
          {/* Social platform name */}
          <span className="st-icon-name">{item.platform}</span>
        </Link>
      ))}
    </div>
  );
}

// PropTypes for type validation
SocialLinks.propTypes = {
  data: PropTypes.array, // Expecting an array of social links data
}

export default SocialLinks; // Exporting SocialLinks component
