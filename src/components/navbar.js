import React from 'react';
import { Link,withRouter}  from "react-router-dom";
class App extends React.Component {
  render(){
    console.log(this.props);
  return (
    <div className="App">
      <nav className="">
        <div className="nav-wrapper container">
          <a href="" className="brand-logo">Ninja Way</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="fire.html">Fire</Link></li>
            <li><Link to="earth.html">Earth.</Link></li>
            <li><Link to="lightning.html">lightning</Link></li>
            <li><Link to="wind.html">Wind</Link></li>
            <li><Link to="water.html">water</Link></li>

          </ul>
        </div>
      </nav>
      </div>
  );
}
}
export default withRouter(App);
