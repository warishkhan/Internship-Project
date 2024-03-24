import PropTypes from 'prop-types'; 
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Importing useDispatch and useSelector hooks from react-redux
import { fetchData } from '../../actions/dataActions'; // Importing fetchData action
import { useEffect } from 'react';

// SocialLinks2 component definition
const SocialLinks2 = () => {
  const dispatch = useDispatch(); // Dispatch hook
  const { myData } = useSelector(state => state.data); // Selecting data from Redux store

  // Fetch data on component mount
  useEffect(() => {
    fetchData(); // Dispatching fetch data action
  }, [dispatch]); // Dependency array to run effect only once on mount

  return (
    // Container for social links
    <div className="st-hero-social-links" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
      {/* Mapping over social links data and rendering each link */}
      {(myData.social_handles && myData.social_handles.length) && myData.social_handles.map((item, index) => (
        <Link to={item.link} className="st-social-btn" key={index}>
          {/* Social icon */}
          <span className="st-social-icon text-white"><Icon icon={`fa6-brands:${String(item.platform).toLowerCase()}`} /></span>
        </Link>
      ))}
    </div>
  );
}

// PropTypes for type validation
SocialLinks2.propTypes = {
  myData: PropTypes.array, // Expecting an array of social links data
}

export default SocialLinks2; // Exporting SocialLinks2 component
