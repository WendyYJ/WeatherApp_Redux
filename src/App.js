import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './component/Header';
import Navigation from './component/Navigation';
import Main from './component/Main';
import Footer from './component/Footer';
import {getWeather} from './util/axios';
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

 
 selectShow = (e,value) => {
    e.target.classList.add('switch-active');
    if(this.state.showLimit !== 10 && value === 10) {
      const showLimit = 10;
      this.setState({showLimit});
      document.querySelector('.forecast__switch_0').classList.remove('switch-active');
      this.componentDidMount();

    } else if(this.state.showLimit !== 5 && value === 5) {
      const showLimit = 5;
      this.setState({showLimit});
      document.querySelector('.forecast__switch_1').classList.remove('switch-active');
      this.componentDidMount();
    }
 }

showSearchValue= (e) => {
  const value = e.target.value;
  if (this.state.city === value) return;
  this.setState({
    searchValue:value,
  });
}

 getInputCity = async() => {
    if (this.state.city === this.state.searchValue) return;
    const city = this.state.searchValue;
    try {
          const response = await getWeather(city);
          this.showTemperature(response);
        } catch(error) {
          alert("city name is not in Australia or invalid");
          return;
        }
        this.setState({city});
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        {this.props.errorMessage && <p className = "alert">{this.props.errorMessage}</p>}
        <Navigation searchValue = {this.state.searchValue} showSearchValue = {this.showSearchValue} searchCity = {this.getInputCity}/>  
        <Main selectShow = {this.selectShow} />
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
