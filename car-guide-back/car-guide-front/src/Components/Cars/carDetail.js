import React, {Component} from "react";
import "./cars.css";
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
            <div>
                <h1>{this.state.datos[0].name}</h1>
                <div className="row align-items-md-center">
                    <div className="col-md-6">
                    <img className="card-img-top space2" width="100" height="300" src={`${this.state.datos[0].image}`} alt="Card image cap"></img>
                    </div>
                    <div className="col-md-3">
                        <div className="card-deck2">
                            <div className="data-card">
                                <h5>Precio: {this.state.datos[0].price}</h5>
                                <h5>Año: {this.state.datos[0].year}</h5>
                                <h5>Kilometros recorridos: {this.state.datos[0].km}</h5>
                                <h5>Categoria: {this.state.datos[0].category}</h5>
                                <h5>Color: {this.state.datos[0].color}</h5>
                                <h5>Placa: {this.state.datos[0].license}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card-deck2">
                            <div className="data-card">
                                <h5>Marca: {this.state.datos[0].brand}</h5>
                                <h5>Cilindraje (cm): {this.state.datos[0].centcubs}</h5>
                                <h5>Cilindraje: {this.state.datos[0].cil_capacity}</h5>
                                <h5>Número de puertas: {this.state.datos[0].doors}</h5>
                                <h5>Transmision: {this.state.datos[0].transmission}</h5>
                                <h5>Modelo: {this.state.datos[0].model}</h5>
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