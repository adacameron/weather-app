import React from "react";
import PropTypes from "prop-types";

const LocationDetails = (props) => {
  const { city, country } = props;
  return (
    <h1
      className="location"
      style={{ border: "2px solid red" }}
    >{`${city}, ${country}`}</h1>
  );
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
