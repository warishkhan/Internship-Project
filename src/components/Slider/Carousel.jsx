import Slider from "react-slick";
import PropTypes from 'prop-types';
import './Carousel.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleBlog from "../Blog/SingleBlog";
import SingleReview from "../Review/SingleReview";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/dataActions';
import { useEffect } from 'react';

const Carousel = ({ data }) => {
  // Destructuring props
  const { useFor, informations, sliderSetting, sliderImages } = data;

  // Redux state management
  const dispatch = useDispatch();
  const { myData } = useSelector(state => state.data);

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, [dispatch]);

  // Render different content based on the 'useFor' prop
  if (useFor === "blog") {
    // Render a Slider containing SingleBlog components for blog posts
    return (
      <Slider {...sliderSetting}>
        {
          informations.map((element, index) => (
            <SingleBlog element={element} key={index} />
          ))
        }
      </Slider>
    );
  } else if (useFor === "review") {
    // Render a Slider containing SingleReview components for testimonials
    return (
      <Slider {...sliderSetting}>
        {
          (myData && myData.testimonials) && myData.testimonials.map((element, index) => (
            <SingleReview element={element} key={index} />
          ))
        }
      </Slider>
    );
  } else if (useFor === "image-slider") {
    // Render a Slider containing images for an image slider
    return (
      <Slider {...sliderSetting}>
        {
          sliderImages.map((item, index) => (
            <img src={item.imgLink} key={index} alt="" />
          ))
        }
      </Slider>
    );
  } else {
    // Default case: render an empty Slider
    return (
      <Slider {...sliderSetting} />
    );
  }
};

// PropTypes for type validation
Carousel.propTypes = {
  variant: PropTypes.string,
  data: PropTypes.object,
  settings: PropTypes.object,
};

export default Carousel;
