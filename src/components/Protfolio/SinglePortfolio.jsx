import PropTypes from 'prop-types'; 
import { Icon } from '@iconify/react';

const SinglePortfolio = ({ data, getData }) => {
  // Destructure data object
  const { image, title, description, githuburl, liveurl } = data;

  return (
    <div className="col-lg-4 col-md-6" data-aos={"fade-up"} data-aos-duration={"500"} data-aos-delay={"200"}>
      {/* Portfolio item container */}
      <div className="st-portfolio-single st-style1" onClick={() => getData(image.url, title, description, githuburl, liveurl)}>
        {/* Portfolio item */}
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            {/* Portfolio image */}
            <div className="st-portfolio-img st-zoom-in">
              <img src={image && image.url} alt="portfolio" />
            </div>
            {/* Portfolio item hover effect */}
            <div className="st-portfolio-item-hover">
              {/* Plus circle icon */}
              <Icon icon="mdi:plus-circle" />
              {/* Portfolio title */}
              <h5>{title}</h5>
              {/* Portfolio description */}
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

// PropTypes validation
SinglePortfolio.propTypes = {
  data: PropTypes.object.isRequired, // data prop is required and should be an object
  getData: PropTypes.func.isRequired // getData prop is required and should be a function
}

export default SinglePortfolio;
