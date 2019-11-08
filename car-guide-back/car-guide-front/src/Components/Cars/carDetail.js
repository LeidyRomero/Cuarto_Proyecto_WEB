import React, {Component} from "react";
import "./cars.css";
import "../../App.css";

class CarDetail extends Component {
    
    constructor(props)
    {
        super(props);
        this.state= { 
            datos:[],
          };
          this.renderDetail = this.renderDetail.bind(this);
    }
    componentDidMount()
    {
        fetch('/cars/'+this.props.match.params.license
         ).then((response)=>{return response.json();
         }).then(data=>{
            this.setState({datos:data});
         })
            
    };
    renderDetail() {
        if (this.state.datos.length > 0) 
        {
        return (
            <div className="top_spaced">
                <h1>{this.state.datos[0].name}</h1>
                <div className="row align-items-md-center">
                    <div className="col-md-6">
                    <img className="card-img-top space2" width="100" height="300" src={`${this.state.datos[0].image}`} alt="Card cap"></img>
                    </div>
                    <div className="col-md-3">
                        <div className="card-deck2">
                            <div className="data-card">
                                <p>Precio: {this.state.datos[0].price}</p>
                                <p>Año: {this.state.datos[0].year}</p>
                                <p>Kilometros recorridos: {this.state.datos[0].km}</p>
                                <p>Categoria: {this.state.datos[0].category}</p>
                                <p>Color: {this.state.datos[0].color}</p>
                                <p>Placa: {this.state.datos[0].license}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-deck2">
                            <div className="data-card">
                                <p>Marca: {this.state.datos[0].brand}</p>
                                <p>Cilindraje (cm): {this.state.datos[0].centcubs}</p>
                                <p>Cilindraje: {this.state.datos[0].cil_capacity}</p>
                                <p>Número de puertas: {this.state.datos[0].doors}</p>
                                <p>Transmision: {this.state.datos[0].transmission}</p>
                                <p>Modelo: {this.state.datos[0].model}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
    render()
    {
        return(
        <div className="dashboard-background2">
            <div className="container-fluid">
                <div className="row">
                    {this.renderDetail()}
                </div>
            </div>
        </div>  
        )
    }

}
export default CarDetail;