import React from 'react';
import { changeUnitAction } from '../redux/actions/navigationActions';
import { connect } from 'react-redux';

function Navigation(props) {
    const checkEnter = (e) => {
      if(e.key === "Enter") {
        props.searchCity();
      }
    }
    return (
        <nav>
        <div className = "navigation">
          <input onChange = {(e) => props.showSearchValue(e)} onKeyDown = {(e) => checkEnter(e)} className="search-input" value= {props.searchValue} />
          <button onClick = {props.searchCity} className="search-btn" tabIndex="0"><i className="fa fa-search"></i></button>
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
});

const mapPropsToState = dispatch => ({
  changeUnit:() => dispatch(changeUnitAction()),
});

export default connect(mapStateToProps,mapPropsToState)(Navigation);