import './Header.scss';
import { Link as ScrollLink } from 'react-scroll'; 
import { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React Redux
import { fetchData } from '../../actions/dataActions'; // Import fetchData action

const Header2 = () => {
  // State variable to toggle mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);

  // Function to toggle mobile menu
  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  const dispatch = useDispatch(); // Initialize Redux dispatch hook
  const { myData } = useSelector(state => state.data); // Select 'myData' from Redux store state
  const { about } = myData; // Destructure 'about' from 'myData' object

  // Fetch data from API when component mounts
  useEffect(() => {
    fetchData(); // Fetch data
  }, [dispatch]); // Dependency array to run effect only once on mount

  return (
    <header className="st-site-header st-sticky-header st-style2">
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              {/* Render author image */}
              <div className="st-header-author">
                <img
                  src={`${(about && about.avatar) && about.avatar.url}`}
                  alt="Author"
                  data-aos="fade-left"
                  data-aos-delay="1000"
                  data-aos-duration="1000"
                />
              </div>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                {/* Mobile navigation menu */}
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  <li><ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Home</ScrollLink></li>
                  <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About</ScrollLink></li>
                  <li><ScrollLink to="resume" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Resume</ScrollLink></li>
                  <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Portfolio</ScrollLink></li>
                  <li><ScrollLink to="blog" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Blog</ScrollLink></li>
                  <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Contact</ScrollLink></li>
                </ul>
                {/* Mobile menu toggle button */}
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `} onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="st-height-b20 st-height-lg-b20"></div>
                {/* Hire Me button */}
                <ScrollLink className="st-btn st-style2 st-color1 st-size-medium" to="contact">Hire Me</ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2;