import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './Hero.scss';
import SocialLinks2 from '../SocialLinks/SocialLinks2'; 
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React Redux
import { fetchData } from '../../actions/dataActions'; // Import fetchData action
import MetaData from '../../MetaData'; // Import MetaData component

const Hero4 = ({ data, socialData }) => {
  const dispatch = useDispatch(); // Initialize Redux dispatch hook
  const { myData } = useSelector(state => state.data); // Select 'myData' from Redux store state
  const { bgImgLink } = data; // Destructure 'bgImgLink' from 'data' prop
  const { about } = myData; // Destructure 'about' from 'myData' object
  
  // Fetch data from API when component mounts
  useEffect(() => {
    fetchData(); // Dispatch 'fetchData' action
  }, [dispatch]); // Dependency array to run effect only once on mount

  // Function to get the first name from the full name
  function getFirstName(fullName) {
    // Split the full name into parts using space as separator
    var names = fullName.split(" ");
    // Extract the first name
    var firstName = names[0];
    return firstName;
  }

  // Get full name from 'about' object or use default name "Davis"
  var fullName = about ? about.name : "Davis";
  var firstName = getFirstName(fullName);

  return (
    <>
    {/* Dynamic Title */}
    {/* Setting dynamic title using MetaData component */}
    <MetaData title={`${firstName} - Personal portfolio ReactJs template`} />
    {/* Hero section with dynamic background image */}
    <section id="home"
      className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: `url(${bgImgLink})` }}>
      <div className="container">
        <div className="st-hero-text">
          {/* Display dynamic name with style */}
          <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hi, I m <span className='text-warning'>{myData.about && myData.about.name}</span></h1>
          {/* Display dynamic description */}
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{myData.about && myData.about.description}</p>
          {/* Render SocialLinks2 component with social data */}
          <SocialLinks2 data={socialData} />
        </div>
      </div>
    </section>
    </>
  )
}

// PropType validation for 'data' and 'socialData' props
Hero4.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero4;
