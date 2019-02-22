var React = require('react');
var {Link, NavLink} =require('react-router-dom');
var Nav = React.createClass({

  onSearch:function(e){
    e.preventDefault();
    var location = this.refs.quickSearch.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.quickSearch.value ='';
      window.location.hash = '#/?location='+encodedLocation;
    }
  },
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
                <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/Weather">Get Weather</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/about">About</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" activeStyle={{fontWeight: 'Bold'}} to="/examples">Examples</NavLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by city" ref="quickSearch"/>
              </li>
              <li>
                <input type="submit" value="Get Weather" className="button"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
