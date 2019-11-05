import React, { Component } from "react";
import "./NavegacionFooter.css";
class Footer extends Component {
    render(){
      return(
        <div className="footer">
             <div className="row">
                <div className="col-md-12">
                    <a ><img src="logo.png" width="10%" alt="logo"/></a>
                </div>
                <div className="col-md-12">
                    <h1>The car guide</h1>
                </div>
                <div className="col-md-12">
                    <p>Bogotá-Colombia</p>
                </div>
                <div className="col-md-12">
                    <p>Crr 100 #23 - 47</p>
                </div>
                <div className="col-md-12">
                    <p>+57 313 202 8555</p>
                </div>
                <div className="col-md-12">
                    <p>theCarGuide@gmail.com</p>
                </div>
             </div>
        </div>
      );
    }

}

export default Footer;