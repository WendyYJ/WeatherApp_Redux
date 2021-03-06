import React from 'react';
import { connect } from 'react-redux';

function ForecastRow(props) {
    return (
        <div>
            <div className="weather-forecast__row">
                <span className="weather-forecast__day">{props.day}</span>
                <span className="weather-forecast__icon">
                <i className="fa fa-clock-o"></i> {props.time}
                </span>
                <span className="weather-forecast__high">{props.high} {props.unit}</span>
                <span className="weather-forecast__low">{props.low} {props.unit}</span>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    unit: state.navigation.unit,
  });
  
  
export default connect (mapStateToProps)(ForecastRow);