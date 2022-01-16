import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "../styles/forecastdetails.css";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </div>
      <div className="forecast-details__bold">Min temp</div>
      <div className="forecast-details__minTemperature">
        {`${temperature.min}`}&deg;C
      </div>
      <div className="forecast-details__bold">Max temp</div>

      <div className="forecast-details__maxTemperature">
        {`${temperature.max}`}&deg;C
      </div>
      <div className="forecast-details__bold">Humidity</div>
      <div className="forecast-details__humidity">{`${humidity}%`}</div>
      <div className="forecast-details__bold">Wind speed</div>
      <div className="forecast-details__windSpeed">{wind.speed} mph</div>

      <div className="forecast-details__bold">Wind direction</div>
      <div className="forecast-details__windDirection">
        {wind.direction.toUpperCase()}
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
