import PropTypes from 'prop-types';
import './Hero.scss';
import parser from 'html-react-parser';
import SocialLinks from '../SocialLinks/SocialLinks';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/dataActions';
import MetaData from '../../MetaData';

const Hero = ({ data }) => {
  // Dispatch action to fetch data from Redux store
  const dispatch = useDispatch();
  // Extract 'myData' from Redux store state
  const { myData } = useSelector(state => state.data);
  
  // Extract 'subTitle' and 'bgImgLink' from 'data' prop
  const { subTitle, bgImgLink,imgLink } = data;
  // Extract 'about' object from 'myData'
  const { about } = myData;

  // Fetch data from API when component mounts
  useEffect(() => {
    dispatch(fetchData()); // Dispatch 'fetchData' action
    // Parallax effect on hero image during scroll
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      const heroElements = document.querySelector('.st-hero-wrap .st-hero-img');
      if (heroElements) {
        heroElements.style.right = `${scrollValue * -0.1}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    {/* Setting dynamic title using MetaData component */}
    <MetaData title={`${firstName} - Personal portfolio ReactJs template`}/>
    <section id="home" className="st-hero-wrap">
      <div
        className="st-hero st-bg st-style1"
        style={{ backgroundImage: `url(${bgImgLink})` }}
      >
        <div className="st-height-b80 st-height-lg-b80"></div>
        <div className="container">
          <div className="st-hero-text">
            <h3 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              {subTitle}
            </h3>
            {/* Parse and display the first name with line break using parser */}
            <h1 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {myData.about && parser((myData.about.name).replace(' ','<br>'))}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {myData.about && myData.about.title}
            </h2>
            <div
              className="st-hero-btn"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <ScrollLink className="st-btn st-style1 st-color1" to="contact">
                Hire Me
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
      <div className="st-hero-img st-to-right">
        <img
          src={about && about.avatar ? `${(about && about.avatar) && about.avatar.url}`: imgLink}
          alt="Hero"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1000"
        />
        <div
          className="st-social-group"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          {/* Render SocialLinks component */}
          <SocialLinks/>
        </div>
      </div>
    </section>
    </>
  );
};

// PropType validation for 'myData' prop
Hero.propTypes = {
  myData: PropTypes.object,
};

export default Hero;
