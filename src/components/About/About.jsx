import PropTypes from 'prop-types';
import './About.scss'; 
import SectionHeading from '../SectionHeading/SectionHeading'; // Im
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React Redux
import { fetchData } from '../../actions/dataActions'; // Import fetchData action
import { useEffect } from 'react';
import Typewriter from "typewriter-effect";

const About = ({ data }) => {
  const dispatch = useDispatch(); // Initialize Redux dispatch hook
  const { myData } = useSelector(state => state.data); // Select 'myData' from Redux store state
  const { cvPdf } = data; // Destructure 'cvPdf' from 'data' prop
  const { about } = myData; // Destructure 'about' from 'myData' object
  
  // Fetch data from API when component mounts
  useEffect(() => {
    dispatch(fetchData()); // Dispatch 'fetchData' action
  }, [dispatch]); // Dependency array to run effect only once on mount

  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      {/* Render SectionHeading component with title */}
      <SectionHeading title={"About Me"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              {/* Display avatar image with background style */}
              <div className="st-about-img st-bg" style={{ backgroundImage: `url(${(about && about.avatar) && about.avatar.url})`}} data-aos="fade-right" data-aos-duration="800" data-aos-delay="400"></div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div className={`st-text-block st-style1`} data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                  {/* Display dynamic name */}
                  <h2 className="st-text-block-title">{myData.about && myData.about.name}</h2>
                  {/* Display dynamic title */}
                  {/* <h4 className="st-text-block-subtitle">{myData.about && myData.about.title}</h4> */}
                  <h4 className="st-text-block-subtitle">
                  <Typewriter
                  options={{
                  strings: [
                   `${myData.about && myData.about.title}`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
                  </h4>
                  <div className="st-text-block-text">
                    {/* Display dynamic description */}
                    <p>{myData.about && myData.about.description}</p>
                  </div>
                  {/* Display dynamic details */}
                  <ul className="st-text-block-details st-mp0">
                    <li><span>Experience</span> : <span>{myData.about && myData.about.exp_year}years</span></li>
                    <li><span>Phone</span> : <span>{myData.about && myData.about.phoneNumber}</span></li>
                    <li><span>Email</span> : <span>{myData && myData.email}</span></li>
                    <li><span>From</span> : <span>{myData.about && myData.about.address}</span></li>
                    <li><span>Quote</span> : <span>{myData.about && myData.about.quote}</span></li>
                    <li><span>Work</span> : <span>{myData.about && myData.about.subTitle}</span></li>
                  </ul>
                  {/* Button to download CV */}
                  <div className="st-text-block-btn">
                    <a className='st-btn st-style1 st-color1' href={cvPdf} download>Download CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// PropType validation for 'data' prop
About.propTypes = {
  data: PropTypes.object,
  myData: PropTypes.object
}

export default About;
