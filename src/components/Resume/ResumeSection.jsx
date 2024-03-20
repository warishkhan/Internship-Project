import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import "./Resume.scss";
import SingleResume from './SingleResume';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/dataActions';
import { useEffect } from 'react';

const ResumeSection = ({ data }) => {
  const dispatch = useDispatch();
  const { myData } = useSelector(state => state.data);

  console.log(myData);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  // Destructure props
  const { educationTitle, education, experienceTitle } = data;

  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={"Resume"} />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div className="row">
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img src="/images/icon/resume-icon1.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">{educationTitle}</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {/* Mapping through education items */}
                {education.map((educationItem, index) => (
                  <SingleResume element={educationItem} key={index} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <img src="/images/icon/resume-icon2.png" alt="resume-icon" />
                <h2 className="st-resume-heading-title">{experienceTitle}</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {/* Mapping through timeline items */}
                {myData && myData.timeline && myData.timeline.map((experience, index) => (
                  <SingleResume element={experience} key={index} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PropTypes validation
ResumeSection.propTypes = {
  data: PropTypes.object.isRequired // Ensure data prop is required and of type object
}

export default ResumeSection;
