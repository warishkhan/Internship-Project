import PropTypes from 'prop-types';

const SingleResume = ({ element }) => {
  // Destructure props
  const { company_name, startDate, endDate, jobTitle, jobLocation, bulletPoints, summary, forEducation, duration, title, subTitle, text } = element;

  // Function to format date string
  const formatDate = (dateStr) => {
    // Create a new Date object from the dateString
    const date = new Date(dateStr);

    // Define an array to map month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Get the month and year from the Date object
    const monthIndex = date.getMonth(); // Returns a number from 0 to 11
    const year = date.getFullYear();

    // Format the date
    const formattedDate = `${monthNames[monthIndex]} ${year}`;
    return formattedDate;
  }

  // Format start and end dates
  const startDateFormatted = formatDate(startDate);
  const endDateFormatted = formatDate(endDate);
  const durationString = `${startDateFormatted} - ${endDateFormatted}`;

  return (
    <>
      {!forEducation ? (
        <div className="st-resume-timeline">
          <h3 className="st-resume-timeline-title">{title}</h3>
          <div className="st-resume-timeline-duration">{duration}</div>
          <div className="st-resume-timeline-duration">{subTitle}</div>
          <div className="st-resume-timeline-text"><p>{text}</p></div>
        </div>
      ) : (
        <div className="st-resume-timeline">
          <h3 className="st-resume-timeline-title">{jobTitle}</h3>
          <div className="st-resume-timeline-duration">{company_name}</div>
          <div className="st-resume-timeline-duration">{durationString}</div>
          <h4 className="st-resume-timeline-subtitle">{jobLocation}</h4>
          <div className="st-resume-timeline-text">
            {(bulletPoints && bulletPoints.length) && bulletPoints.slice(0,1).map((point, index) => <p key={index}>{point}</p>)}
          </div>
          <div className="st-resume-timeline-text mt-3"><p>{summary}</p></div>
        </div>
      )}
    </>
  );
}

// PropTypes validation
SingleResume.propTypes = {
  element: PropTypes.object.isRequired // Ensure element prop is required and of type object
}

export default SingleResume;
