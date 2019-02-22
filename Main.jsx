var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var { HashRouter, Route, Switch } = require('react-router-dom');
var Main  = (props)=> {

  return (
    <div>
    <HashRouter>
      <div>
       <Nav/>
       <div className="columns medium-6 large-4 small-centered">
       <Switch>
          <Route path='/about' component={About}/>
          <Route path='/examples' component={Examples}/>
          <Route component={Weather}/>
       </Switch>
     </div>
      </div>
    </HashRouter>
    </div>
  );

}

module.exports =Main;


// return(
//   <div>
//     <Nav/>
//     <div className="row">
//       <div className="columns medium-6 large-4 small-centered">
//           {props.children}
//       </div>
//     </div>
//   </div>
// );
