import React from 'react';
import { changeUnitAction,searchValueAction } from '../redux/actions/navigationActions';
import { connect } from 'react-redux';
import { loadWeather as loadWeatherAction } from '../redux/actions/weatherActions';

function Navigation(props) {
    const checkEnter = (e) => {
      if(e.key === "Enter") {
        props.loadWeather(e.target.value);
      }
    }
    return (
        <nav>
        <div className = "navigation">
          <input onChange = {(e) => props.searchValue(e)} onKeyDown = {(e) => checkEnter(e)} className="search-input" value= {props.value} />
          <button onClick = {() => props.loadWeather(props.value)} className="search-btn" tabIndex="0"><i className="fa fa-search"></i></button>
          <button  onClick = {props.changeUnit} className="temp-switch">
            <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
            <sup>&deg;</sup>{props.unit}
          </button>
        </div>
      </nav>
    );
}
const mapStateToProps = state => ({
  unit: state.navigation.unit,
  value:state.navigation.searchValue,
});

const mapPropsToState = dispatch => ({
  changeUnit:() => dispatch(changeUnitAction()),
  searchValue:(e) => dispatch(searchValueAction(e.target.value)),
  loadWeather:city => dispatch(loadWeatherAction(city,5)),
});

export default connect(mapStateToProps,mapPropsToState)(Navigation);