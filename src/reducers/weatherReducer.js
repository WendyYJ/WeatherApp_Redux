import { FETCH_WEATHER, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../redux/actions/weatherActions';

const initialState = {
    city:'',
    current:{},
    forecast:[],
    isLoading:false,
    limit:'',
};

export const weatherReducer = (state = initialState,action) => {
    switch(action.type) {
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                city:action.data.city,
                current:action.data.current,
                forecast:action.data.forecast,
                limit:action.data.limit,
                isLoading:false,
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

        default:return state;
    }
};