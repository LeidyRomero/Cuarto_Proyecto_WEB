import React, {Component} from "react";
import Service from "./service.js";
import "../../App.css";

class ServicesList extends Component {

    constructor(props){
        super(props);
        this.state = {
            servicios: []
        };
        this.renderServices = this.renderServices.bind(this);
    }

    componentDidMount() {
        fetch("/services/").then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({servicios: data});
        });
    }    

    renderServices() {
        if (this.state.servicios.length > 0) 
        {
        return (this.state.servicios.map(
            (servicio, i) =>
                <div className="col-6">
                    <a href={`${servicio.link}`}>
                        <Service service={servicio} key={i} />
                    </a>
                </div>
        ));
        }
    };

    render()
    {
        return(
        <div className="container-fluid" background-color="darkslategray">

            <div className="row" width="100%" id="titulo-servicios">
                <img width="100%" alt="imagen de autos" src="https://di-uploads-pod6.dealerinspire.com/mariettatoyota/uploads/2019/04/2019-Toyota-Prius-models-banner.jpg"/>
            </div>
            <div className="row"></div>
            <div className="row text-center" width="100%">
                <div className="col-12 text-center">
                    <h1>Servicios</h1>
                </div>
            </div>
            
            <div className="row" id="servicios">

                <div className="col-12">
                    <div className="dashboard-background">
                        <div className="card-deck">
                            
                            {this.renderServices()}

                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        );
    }

}
export default ServicesList;