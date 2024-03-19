import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Contact.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import SocialLinks from '../SocialLinks/SocialLinks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../actions/dataActions';
import { useEffect } from 'react';

const Contact = ({ data, socialData }) => {
  const { title, subTitle } = data;
  // Retrieve necessary data using useSelector
  const { myData } = useSelector(state => state.data);

   // Dispatch fetchData action using useDispatch
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchData());
   }, [dispatch]);
  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div className="container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>
            <div id="st-alert"></div>
            <form action="#" method="POST" className="st-contact-form" id="contact-form">
              <div className="st-form-field">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="st-form-field">
                <input type="text" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="st-form-field">
                <input type="text" id="subject" name="subject" placeholder="Your Subject" required />
              </div>
              <div className="st-form-field">
                <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" required></textarea>
              </div>
              <button className='st-btn st-style1 st-color1' type="submit" id="submit" name="submit">Send Message</button>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{myData.about && myData.about.description.substring(0,160)}...</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link  to={`mailto:${myData && myData.email}`}>{myData && myData.email}</Link>
                  {/* <Link to="#">info@support.com</Link> */}
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <a href={`https://wa.me/${myData.about && (myData.about.phoneNumber).replace('-','')}`} target='_blank'>{myData.about && myData.about.phoneNumber}</a>
                  {/* <span>+1 213-519-1786</span> */}
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  {/* <span>2661 High Meadow Lane Bear Creek, <br />Olancha, KY 93544</span> */}
                  <span>{myData.about && myData.about.address}</span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  )
}

Contact.propTypes = {
  myData: PropTypes.object,
  data: PropTypes.object,
  socialData: PropTypes.array,
}

export default Contact;
