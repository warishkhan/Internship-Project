import PropTypes from 'prop-types';
import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState, useEffect } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/dataActions';

// Define PortfolioSection component
const PortfolioSection = () => {
  // Retrieve necessary data using useSelector
  const { myData } = useSelector(state => state.data);
  
  // Define local component state
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  // Dispatch fetchData action using useDispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Load Items logic
  useEffect(() => {
    if (myData.projects) {
      setVisibleItems(myData.projects.sort((a, b) => a.sequence - b.sequence).slice(0, 6));
      setShowLoadMore(myData.projects.length > 6);
    }
  }, [myData.projects]);

  // Function to handle opening modal
  const getData = (imgLink, title, subTitle,githuburl,liveurl) => {
    setTempData([imgLink, title, subTitle,githuburl,liveurl]);
    setModal(true);
  }

  // Function to handle closing modal
  const modalClose = () => {
    setModal(false);
  }

  // Function to load more items
  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = myData.projects.slice(currentLength, currentLength + 6);
    setVisibleItems(prevItems => [...prevItems, ...nextChunk]);

    if (currentLength + 6 >= myData.projects.length) {
      setShowLoadMore(false);
    }
  };

  // Return JSX for rendering component
  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? <Modal img={tempData[0]} title={tempData[1]} subTitle={tempData[2]} githuburl={tempData[3]} liveurl={tempData[4]} modalClose={modalClose}/> : ""}
    </>
  );
};

// Define prop types for PortfolioSection component
PortfolioSection.propTypes = {
  myData: PropTypes.object,
};

// Export PortfolioSection component
export default PortfolioSection;
