import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import SocialLinks2 from '../SocialLinks/SocialLinks2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/dataActions';
import MetaData from '../../MetaData';

const Hero2 = ({ data }) => {
  // Initialize Redux dispatch hook
  const dispatch = useDispatch();
  // Select 'myData' from Redux store state
  const { myData } = useSelector(state => state.data);
  // Destructure 'bgImgLink' from 'data' prop
  const { bgImgLink } = data;
  // Destructure 'about' from 'myData'
  const { about } = myData;

  // Fetch data from API when component mounts
  useEffect(() => {
    // Dispatch 'fetchData' action to fetch data from API
    fetchData();
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
      <section id="home"
        className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version" style={{ backgroundImage: `url(${bgImgLink})` }}>
        <div className="container">
          <div className="st-hero-text">
            {/* Display dynamic name with style */}
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hi, I m <span className='text-warning'>{myData.about && myData.about.name}</span></h1>
            {/* Display dynamic description */}
            <p className='text-white' data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{myData.about && myData.about.description}</p>
            {/* Render SocialLinks2 component */}
            <SocialLinks2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" />
          </div>
        </div>
        {/* Background bubbles */}
        <div id="background-wrap">
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
        </div>
      </section>
    </>
  );
}

// PropType validation for 'myData' and 'data' props
Hero2.propTypes = {
  myData: PropTypes.object,
  data: PropTypes.object,
};

export default Hero2;
