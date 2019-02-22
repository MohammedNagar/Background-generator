var React = require('react');


var About =(props)=>{
  return(
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a wearther application  build on react.
           I have built this for the complete react web app developer course.!!!  </p>
         <p>
           Here are some of the tools i have used:
         </p>
         <ul>
          <li>
           <a href="https://facebook.github.io/react/" target="_blank">React</a> - This was the javascript framework used.
          </li>
          <li>
           <a href="http://openweathermap.org" target="_blank">Open weather app</a> - I used open weather map to search for weather data by city name.
          </li>
         </ul>
    </div>
  );
}

module.exports = About;
