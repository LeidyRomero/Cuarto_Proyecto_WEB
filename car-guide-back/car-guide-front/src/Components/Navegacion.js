import React, { Component } from "react";
import {NavLink, Redirect}  from 'react-router-dom'
import "./NavegacionFooter.css";

class Navegacion extends Component {
  constructor(props) { 
    super(props);
    this.state = { 
      pagActual:'Inicio',
    }; 
  }
  render(){
      return(
      <nav className="navbar" role="navigation">
          <img src="logo.png" alt="nav-logo" id="nav-logo"/>
              <div className="nav-links">
                  <NavLink to="/" className="nav-link" id="btn-inicio">INICIO
                  </NavLink>
                  <NavLink to="/cars" className="nav-link" id="btn-cars">VENTAS
                  </NavLink>
                  <NavLink to="/services" className="nav-link" id="btn-services">SERVICIOS
                  </NavLink>
                  <NavLink to="/users" className="nav-link" id="btn-users">USUARIOS
                  </NavLink>
                  <NavLink to="/car" className="nav-link" id="btn-add">ADMIN
                  </NavLink>
                  <NavLink to="/comparator" className="nav-link" id="btn-compare">COMPARAR
                  </NavLink>
                  <NavLink to="/login"> <button className="nav-btn-login">LOGIN</button>
                  </NavLink>
                  </div>
      </nav>
      );
    }

}

export default Navegacion;