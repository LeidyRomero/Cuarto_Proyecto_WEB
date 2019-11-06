import React, { Component } from "react";
import Navegacion from "./Components/Navegacion";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/statistics";
import ServicesList from './Components/Services/servicesList';
import CarsList from './Components/Cars/carsList';
import CarDetail from './Components/Cars/carDetail';
import UsersList from './Components/Users/usersList';
import CarForm from './Components/Cars/carForm';
import Login from './Components/Users/Login';
import Register from './Components/Users/Register.js';
import Comparator from './Components/Comparator/Comparator.js';

export default class app extends Component {
 
  render() {

    return (
      <div>
        <BrowserRouter>
        
          <div id="nav">
            <Navegacion />
          </div>   
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Register}/>
          <Route exact path="/" component={Home} />
          <Route path="/cars" component={CarsList} exact/>
          <Route path="/cars/:license" component={CarDetail} exact/>
          <Route path="/services" component={ServicesList} exact/>
          <Route path="/users" component={UsersList} exact/>
          <Route path="/car" component={CarForm} exact/>
          <Route path="/comparator" component={Comparator} exact/>
        </BrowserRouter>
        <div id="footer">
          <Footer />
        </div> 
      </div>
    );
  }
}