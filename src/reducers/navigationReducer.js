import {CHANGE_UNIT} from '../redux/actions/navigationActions';
const initialState = {
    unit:'C'
};

export const navigationReducer = (state = initialState,action) => {
    switch(action.type) {
        case CHANGE_UNIT:
            return {  
                ...state,
                unit:state.unit === 'C'?'F':'C'
            }
        default:
            return state;
    }
};
