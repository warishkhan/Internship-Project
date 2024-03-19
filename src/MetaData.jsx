import React from "react";
import Helmet from "react-helmet"; 

// MetaData component definition
const MetaData = ({ title }) => {
  return (
    // Helmet component to dynamically set metadata
    <Helmet>
      {/* Title tag dynamically set based on the 'title' prop */}
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData; 
