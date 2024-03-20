import PropTypes from 'prop-types';
import './Skill.scss';
import SectionHeading from '../SectionHeading/SectionHeading'; 
import { useDispatch, useSelector } from 'react-redux'; // Importing Redux hooks
import { fetchData } from '../../actions/dataActions'; // Importing fetch data action
import { useEffect } from 'react';

// Skill component definition
const Skill = ({ data }) => {
  // Destructuring props
  const { title } = data;

  // Redux state management
  const dispatch = useDispatch(); // Dispatch hook
  const { myData } = useSelector(state => state.data); // Selecting data from Redux store

  // Fetch data on component mount
  useEffect(() => {
    fetchData(); // Dispatching fetch data action
  }, [dispatch]); // Dependency array to run effect only once on mount

  return (
    // Skill section container
    <section className="st-dark-bg">
      {/* Spacing for better layout */}
      <div className="st-height-b100 st-height-lg-b80"></div>
      {/* Section heading */}
      <SectionHeading title="Skills" />
      {/* Main content container */}
      <div className="container">
        <div className="row">
          {/* Left column for skill heading and description */}
          <div className="col-lg-6">
            <div className="st-skill-wrap">
              {/* Skill heading */}
              <div
                className="st-skill-heading"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h2 className="st-skill-title">{title}</h2>
                {/* Skill description */}
                <div className="st-skill-subtitle">{myData.about && myData.about.description}</div>
              </div>
            </div>
          </div>
          {/* Right column for skill progress bars */}
          <div className="col-lg-6">
            {/* Spacing */}
            <div className="st-height-b0 st-height-lg-b30"></div>
            {/* Wrapper for skill progress bars */}
            <div className="st-progressbar-wrap" title='Press keys ⬆ & ⬇ to scroll'>
              {/* Mapping over skills data and rendering progress bars */}
              {(myData.skills && myData.skills.length) && myData.skills.map((element, index) => (
                <div
                  className="st-single-progressbar"
                  key={index}
                  // data-aos={"fade-up"}
                  data-aos-duration={"500"}
                  data-aos-delay={"500"}
                >
                  {/* Individual skill progress bar */}
                  <div className="st-progressbar-heading">
                    {/* Skill name */}
                    <h3 className="st-progressbar-title">{element.name}</h3>
                    {/* Skill percentage */}
                    <div
                      className="st-progressbar-percentage "
                      data--duration="1.5s"
                      data--delay="0.5s"
                    >
                      {element.percentage}%
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="st-progressbar" data-progress={element.percentage}>
                    <div className="st-progressbar-in " style={{width:`${element.percentage}%`}}></div>
                  </div>
                  {/* Spacing */}
                  <div className="st-height-b30 st-height-lg-b20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PropTypes for type validation
Skill.propTypes = {
  myData: PropTypes.object,
};

export default Skill;
