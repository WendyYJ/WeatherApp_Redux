import React from 'react';
import { connect } from 'react-redux';
import Condition from '../component/Weather_condition';
import Forecast from '../component/Weather_forecast';
import CircularProgress from '@material-ui/core/CircularProgress';

function Main(props) {
    return (
        <main>
           { props.isLoading 
            ? <CircularProgress color="primary" size = "6em" className = "circle" />
            :<div>
                <Condition />
                <Forecast selectShow = {props.selectShow} forecast = {props.forecast} />
            </div>
            }
        </main>
    );
}
const mapStateToProps = state => ({
  isLoading:state.weather.isLoading,
});

export default connect(mapStateToProps,null)(Main);