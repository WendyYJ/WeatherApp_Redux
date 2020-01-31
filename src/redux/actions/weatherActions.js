import { getWeather } from '../../util/axios'; 

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';
export const SHIFT_WEATHER = 'SHIFT_WEATHER';

export const featchWeather = () => ({
    type:FETCH_WEATHER,
});

export const fetchWeatherSuccess = data => ({
    type:FETCH_WEATHER_SUCCESS,
    data,
});

export const featchWeatherFailure = errorMessage => ({
    type:FETCH_WEATHER_FAILURE,
    errorMessage,
});

export const shiftWeather = data => ({
    type:SHIFT_WEATHER,
    data,
})

export const loadShiftWeather = (city,limit) => dispatch => {
    getWeather(city)
    .then(data => {
        const forecast = data.forecast.slice(0,limit);
        dispatch(fetchWeatherSuccess (
            {   
                    forecast,
                    limit,
            }
        ));
    }).catch(error => {
        dispatch(featchWeatherFailure(error.message));
    })
}

export const loadWeather = (city,limit) => dispatch => {
    dispatch(featchWeather());

    getWeather(city)
    .then(data => {
        const city = data.city.name;
        const current = data.current;
        const forecast = data.forecast.slice(0,limit);
        dispatch(fetchWeatherSuccess (
            {
                    city,
                    current,
                    forecast,
                    limit,
                }
            ));
    }).catch(error => {
        dispatch(featchWeatherFailure(error.message));
    })
}
