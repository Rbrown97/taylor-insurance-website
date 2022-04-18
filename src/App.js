import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import NavMenu from './components/NavMenu.js';
import Home from "./pages/Home.js";
import getQuote from "./pages/getQuote.js";
import homeQuote from "./pages/homeQuote.js";
import vehicleQuote from "./pages/vehicleQuote.js";
import currentCustomerVehicleQuote from "./pages/currentCustomerVehicleQuote.js"
import signIn from "./pages/signIn.js";
import signUp from "./pages/signUp.js";
import signUpVehicle from "./pages/signUpVehicle.js";
import profile from "./pages/profile.js";
import userQuotes from "./pages/userQuotes.js";
import userAutoQuotes from "./pages/userAutoQuotes.js";
import userPolicies from "./pages/userPolicies.js";
import userAutoPolicies from "./pages/userAutoPolicies.js";
import Footer from "./components/Footer.js";
import Fog from "./assets/Fog3.png";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import Typography from '@mui/material/Typography';



function App() {
  return (
    <div>
      <div className="App">   
        <Router>
          <NavMenu />
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/getQuote" exact component={getQuote}/>
              <Route path="/signIn" exact component={signIn}/>
              <Route path="/signUp" exact component={signUp}/>
              <Route path="/signUpVehicle" exact component={signUpVehicle}/>
              <Route path="/homeQuote" exact component={homeQuote}/>
              <Route path="/vehicleQuote" exact component={vehicleQuote}/>
              <Route path="/currentCustomerVehicleQuote" exact component={currentCustomerVehicleQuote}/>
              <Route path="/profile" exact component={profile}/>
              <Route path="/userQuotes" exact component={userQuotes}/>
              <Route path="/userAutoQuotes" exact component={userAutoQuotes}/>
              <Route path="/userPolicies" exact component={userPolicies}/>
              <Route path="/userAutoPolicies" exact component={userAutoPolicies}/>
            </Switch>
        </Router>
        
      </div>
      <div className="overFlow">
        <img src={Fog} className="secondBackground"/>
      </div>
    </div>
  );
}




export default App;
