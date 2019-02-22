var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage =require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');
const queryString = require('query-string');
var Weather = React.createClass({

  getInitialState:function(){
    return{
    isLoading:false
    }
  },

  handleSearch:function(location){

    var that =this;
    this.setState({
      isLoading:true,
      errorMessage:undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message,
        location: undefined,
        temp: undefined
      });
    });
  },
  componentDidMount: function(){
    const parsed = queryString.parse(this.props.location.search);
    var location = parsed.location;

    if(location && location.length >0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps(newProp){
    const parsed = queryString.parse(newProp.location.search);
    var location = parsed.location;

    if(location && location.length >0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>
      }
      else if (temp && location) {
        return    <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError(){
     if(typeof errorMessage === 'string'){
       return(
         <ErrorModal message={errorMessage}/>
       );
     }
    }

    return(
        <div>
           <h1 className="text-center page-title">Get Weather</h1>
           <WeatherForm onSearch={this.handleSearch}/>
           {renderMessage()}
           {renderError()}
        </div>
    );
  }
});

module.exports = Weather;