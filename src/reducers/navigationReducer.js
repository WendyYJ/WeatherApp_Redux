import {CHANGE_UNIT, SEARCH_VALUE} from '../redux/actions/navigationActions';
const initialState = {
    unit:'C',
    searchValue:'',
};

export const navigationReducer = (state = initialState,action) => {
    switch(action.type) {
        case CHANGE_UNIT:
            return {  
                ...state,
                unit:state.unit === 'C'?'F':'C'
            }
        case SEARCH_VALUE:
            return {
                ...state,
                searchValue:action.value,
            }
        default:
            return state;
    }
};
