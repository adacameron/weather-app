import React from "react";
import PropTypes from "prop-types";
import "../styles/LocationDetails.css";

const LocationDetails = (props) => {
  const { city, country } = props;
  return <h2 className="location-details">{`${city}, ${country}`}</h2>;
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
