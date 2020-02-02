import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Main from './component/Main';
import Footer from './component/Footer';
import { loadWeather as loadWeatherAction } from './redux/actions/weatherActions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       searchValue:'',
    };
  }
 componentDidMount() {
   this.props.loadWeather('Brisbane');
}

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        {this.props.errorMessage && <p className = "alert">{this.props.errorMessage}</p>}
        <Navigation />  
        <Main />
        <Footer />
      </div>
    )
  } 
}

const mapStateToProps = state => ({
  errorMessage:state.weather.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  loadWeather:city => dispatch(loadWeatherAction(city,5)),
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
