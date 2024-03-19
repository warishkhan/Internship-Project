import { Link } from 'react-router-dom';
import './Header.scss';
import { Link as ScrollLink } from 'react-scroll'; 
import { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks from React Redux
import { fetchData } from '../../actions/dataActions'; // Import fetchData action

const Header = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch hook
  const { myData } = useSelector(state => state.data); // Select 'myData' from Redux store state
  const [isScrolled, setIsScrolled] = useState(false); // State variable to track scrolling state
  const [mobileToggle, setMobileToggle] = useState(false); // State variable to toggle mobile menu
  const { about } = myData; // Destructure 'about' from 'myData' object

  // Function to toggle mobile menu
  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }

  // Fetch data from API when component mounts
  useEffect(() => {
    dispatch(fetchData()); // Dispatch 'fetchData' action
    const handleScroll = () => {
      // Update 'isScrolled' state based on scroll position
      if (window.scrollY >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
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
    <header className={`st-site-header st-sticky-header st-style1 ${isScrolled ? 'st-sticky-active' : ''}`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              {/* Render site branding with dynamic name */}
              <Link className="st-site-branding" to='/' id="hero"><h3 className='headerName'>{firstName}</h3></Link>
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
                {/* Mobile phone icon with dynamic phone number */}
                <div className="sp-phone">
                  <svg viewBox="0 0 513.64 513.64">
                    <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                  </svg>
                  <a
                    className="sp-phone-no"
                    href={`https://wa.me/${about && (about.phoneNumber).replace('-','')}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {/* Display dynamic phone number */}
                    {about && about.phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header;
