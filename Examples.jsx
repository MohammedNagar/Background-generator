var React = require('react');
var {Link, NavLink} =require('react-router-dom');
var Examples = (props)=>{
  return(
    <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
         <li>
          <Link to='/?location=cairo'>Cairo, Egypt</Link>
         </li>
         <li>
           <Link to='/?location=Alexanderia'>Alexanderia, Egypt</Link>
         </li>
        </ol>
    </div>
  );
}

module.exports = Examples;
