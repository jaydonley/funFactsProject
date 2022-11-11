import './ff-app.css';
import React, { Component } from 'react';

import Fact_One from "./Components/Fact_One";
import Fact_Two from "./Components/Fact_Two";
import Fact_Three from "./Components/Fact_Three";
import FF_Home from "./Components/FF_Home";
import {BrowserRouter, Route }from "react-router-dom";

class App extends Component {
    render() {
      return (
        <BrowserRouter>
        <div className='App'>
          {/* <Navbar /> */}
          <Route exact path= '/' component={FF_Home} />
          <Route path= '/Fact_One' component={Fact_One} />
          <Route path= '/Fact_Two' component={Fact_Two} />
          <Route path= '/Fact_Three' component={Fact_Three} />
        </div>
        </BrowserRouter>
      )
    }
  }
  
  export default App;