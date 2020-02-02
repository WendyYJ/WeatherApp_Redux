import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE,SHIFT_WEATHER } from '../redux/actions/weatherActions';

const initialState = {
    city:'',
    current:{},
    forecast:[],
    forecastMore:[],
    isLoading:false,
    limit:'',
    errorMessage:'',
};

export const weatherReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                city:action.data.city,
                current:action.data.current,
                forecast:action.data.forecast.slice(0,action.data.limit),
                forecastMore:action.data.forecast,
                limit:action.data.limit,
                isLoading:false,
                errorMessage:'',
            };
        case FETCH_WEATHER:
            return {
                ...state,
                isLoading:!state.isLoading,
            }
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                errorMessage:action.errorMessage,
                isLoading:false,
            }
        case SHIFT_WEATHER:
            return {
                ...state,
                forecast:state.forecastMore.slice(0,action.limit),
                limit:action.limit,
            }
        default:return state;
    }
};