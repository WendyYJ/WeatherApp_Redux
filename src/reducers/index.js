import {combineReducers} from 'redux';
import {navigationReducer} from './navigationReducer';
import {weatherReducer } from './weatherReducer';

export const reducers = combineReducers ({
    navigation:navigationReducer,
    weather:weatherReducer,
});

