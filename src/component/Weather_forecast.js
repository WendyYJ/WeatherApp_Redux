import React from 'react';
import { connect } from 'react-redux';
import ForecastRow from '../component/Forecast_row';
import { loadWeather as loadWeatherAction } from '../redux/actions/weatherActions';
import { format } from 'date-fns';

function Weather_forecast(props){
  
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button onClick = {props.loadWeather(props.city,5)} className="forecast__switch_0 switch-active">5 items</button>
          <button onClick = {props.loadWeather(props.city,10)} className="forecast__switch_1">10 items</button>
        </div> 
         {
           props.forecast.map(forecast => {
            const date = new Date(forecast.time * 1000);
            const day = format(date,'EEE');
            const newTime = format(date,'HH:MM');

             return(
              <ForecastRow 
                key = {forecast.time} 
                day = {day} 
                time = {newTime}  
                high = {props.unit === 'C' ? forecast.maxCelsius : forecast.maxFahrenheit} 
                unit = {forecast.unit} 
                low = {props.unit === 'C' ? forecast.minCelsius : forecast.minFahrenheit} 
              />
             )
           })
         }
      </section>
      );
}


const mapStateToProps = state => ({
  city:state.weather.city,
  unit: state.navigation.unit,
  forecast:state.weather.forecast,
  limit:state.weather.limit,
});

const mapDispatchToState = dispatch => ({
  loadWeather(city,limit) { 
    return () => { 
      dispatch(loadWeatherAction(city,limit))
    };
  },
});

export default connect (mapStateToProps,mapDispatchToState)(Weather_forecast);