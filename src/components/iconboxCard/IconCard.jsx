import PropTypes from "prop-types";
import React from "react";
import "../Iconbox/Iconbox.scss";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector hooks from React Redux
import { fetchData } from "../../actions/dataActions"; // Import fetchData action
import { useEffect, useState } from "react";

const IconCard = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch hook
  const { myData } = useSelector((state) => state.data); // Select 'myData' from Redux store state
  const [expandedArray, setExpandedArray] = useState([]); // State variable to track expanded state of each icon

  // Effect to initialize expanded state array and fetch data
  useEffect(() => {
    // Initialize expanded state array based on number of services
    if (myData.services && myData.services.length) {
      const initialExpandedState = myData.services.map(() => false);
      setExpandedArray(initialExpandedState);
    }
    // Fetch data
    fetchData();
  }, [dispatch, myData.services]); // Dependency array to run effect only when dispatch or myData.services changes

  // Function to toggle expanded state of an icon
  const toggleExpanded = (index) => {
    const newExpandedArray = [...expandedArray];
    newExpandedArray[index] = !newExpandedArray[index];
    setExpandedArray(newExpandedArray);
  };

  return (
    <>
      <div className="container">
        <div className="row">

       {
  (myData.services && myData.services.length) && myData.services.map((element, index) => (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center flex-wrap-wrap" key={index} data-aos={element.effect ? element.effect : "zoom-out-up"} data-aos-duration={element.duration ? element.duration : "800"} data-aos-delay={element.delay ? element.delay : "200"}>
      <div className="main-container d-flex justify-content-center align-items-center">
        <div className="box">
            <div className="box-content">
                <div className="front">
                <div className={`st-iconbox st-style1`}>
        <div className="st-iconbox-icon">
          <img src={element.image.url} alt="Icon" />
        </div>
        <h2 className="st-iconbox-title">{element.name}</h2>
        {/* <p className="st-iconbox-text mb-1 text-info">{element.charge}</p> */}
        <div className="st-iconbox-text">
          {/* Render expanded description if expanded, otherwise truncate */}
          {/* {expandedArray[index] ? element.desc : element.desc.substring(0, 20) + '... '} */}
          {/* <span className='text-warning' onClick={() => toggleExpanded(index)}> */}
            {/* Render toggle button text based on expanded state */}
            {/* {expandedArray[index] ? 'Show less' : 'Read more'} */}
          {/* </span> */}
          {element.desc}
        </div>
      </div>
    </div>
                <div className="back">
                <img src={element.image.url} alt="Icon" className="rounded back-image" />
                 <p className="st-iconbox-text  text-center mb-1 text-info fs-1 fw-bold mb-3 ">{element.charge}</p>
                <p className="st-iconbox-text  text-center mb-1 text-info ">{element.desc}</p>
                </div>
            </div>
        </div>
      </div>
      <div className="st-height-b30 st-height-lg-b30"></div>
    </div>
  ))
}

        </div>
      </div>
    </>
  );
};

IconCard.propTypes = {
  myData: PropTypes.object, // Prop validation for myData
};

export default IconCard;
