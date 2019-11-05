import React, { Component } from "react";
import './services.css';
class Service extends Component {

    render(){
        console.log(this.props);
        return(
            <div className="data-card servicios-card">
                <div className="row">
                    <div className="col-3">
                        <img className="card-img-top" width="50" src={`${this.props.service.image}`} alt="banner servicios"/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7">
                        <div className="row">
                            <div className="col-12 text-left">
                                <h5 id={`card-title${this.props.service._id}`}>{this.props.service.name}</h5>
                            </div>
                        </div>
                        <div className="row text-left">
                            <div className="col-12">
                                <p>{this.props.service.description}</p>
                            </div>
                        </div>
                        <div className="row text-light">
                            <div className="col-4"></div>
                            <div className="col-4 bg-danger">    
                                <p className="text-center"><b>$ {this.props.service.price} COP </b></p>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        );
    }

}

export default Service;