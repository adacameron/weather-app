import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__temperature">
        {temperature.max}&deg;C
        {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">{humidity}</div>
      <div className="forecast-details__wind">
        {(wind.speed, wind.direction)}
      </div>
    </div>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      direction: PropTypes.string,
      speed: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
