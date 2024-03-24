import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './Hero.scss'; // Import styles for Hero component
import perser from 'html-react-parser'; // Import HTML parser library
import SocialLinks2 from '../SocialLinks/SocialLinks2'; // Import SocialLinks2 component
import WaterWave from 'react-water-wave'; // Import WaterWave component
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React Redux
import { fetchData } from '../../actions/dataActions'; // Import fetchData action
import MetaData from '../../MetaData'; // Import MetaData component

const Hero3 = ({ data, socialData }) => {
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
    {/* WaterWave component for background with dynamic image */}
    <WaterWave id="home" className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" imageUrl={bgImgLink}>
      {() => (
        <div className="container">
          <div className="st-hero-text">
            {/* Display dynamic name with style */}
            <div className="st-author" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <img
                src={`${(about && about.avatar) && about.avatar.url}`}
                alt="Hero"
              />
            </div>
            {/* Display dynamic name */}
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hi, I m <span className='text-warning'>{myData.about && myData.about.name}</span></h1>
            {/* Display dynamic description */}
            <p className='text-white' data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{myData.about && myData.about.description}</p>
            {/* Render SocialLinks2 component */}
            <SocialLinks2 data={socialData} />
          </div>
        </div>
      )}
    </WaterWave>
    </>
  );
}

// PropType validation for 'data' and 'socialData' props
Hero3.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Hero3;
