import React from 'react';
import { BrowserRouter,Route}  from "react-router-dom";
import Navbar from "./components/navbar.js";

import Fire from "./components/fire.js";
import Wind from "./components/wind.js";
import Earth from "./components/earth.js";
import Lightning from "./components/lightning.js";
import Water from "./components/water.js";
import Post from "./components/post.js";

class App extends React.Component {
  render(){
  return (
    <div className="App ">
    <BrowserRouter>
      < Navbar />
      <Route path="/fire.html" component={ Fire}/>
      <Route path="/earth.html" component={ Earth}/>
      <Route path="/water.html" component={ Water}/>
      <Route path="/lightning.html" component={ Lightning}/>
      <Route path="/wind.html" component={ Wind }/>

      <Route path="/:post_id" component={ Post }/>

      </BrowserRouter>
    </div>
  );
}
}
export default App;
