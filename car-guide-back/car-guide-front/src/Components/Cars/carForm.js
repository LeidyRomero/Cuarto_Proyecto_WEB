import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import "./cars.css";
import "../../App.css";
class CarForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('/cars/', {
          method: 'POST',
          body: data,
        });
      }
    render()
    {
        console.log(this.props.user_role);
        if(this.props.user_role !== "Admin"){
            return <Redirect to="/forbidden" />
        }
        else{
            return(
                <div className="card top_spaced">
                    <h1>Digite los siguientes datos:</h1>
                    <h2>Los campos marcados (*) son obligatorios:</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label>Año de modelo del auto: (*) <input type="text" className="form-control" placeholder="Ej. 1999"/><br></br></label>
                            </div>
                            <div className="col">
                            <label>Kilometros recorridos por el auto: (*) <input type="text" className="form-control" placeholder="Ej. 100000"/><br></br></label> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Categoria del auto: (*) <input type="text" className="form-control" placeholder="Ej. Camioneta"/><br></br></label>
                            </div>
                            <div className="col">
                            <label>Color del auto: (*) <input type="text" className="form-control" placeholder="Ej. Azul"/><br></br></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Fecha actual: (*) <input type="date" className="form-control" placeholder="Fecha"/><br></br></label>     
                            </div>
                            <div className="col">
                            <label>Nombre del auto: (*) <input type="text" className="form-control" placeholder="Ej. BMW 509 7"/><br></br></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Placa del auto: (*) <input type="text" className="form-control" pattern="[A-Za-z]{3}-[0-9]{3}" title="3 letras y 3 numeros separados por el simbolo -. Ej. ABC-123" placeholder="Ej. ABC-123"/><br></br></label>
                            </div>
                            <div className="col">
                            <label>Precio de venta: (*) <input type="text" className="form-control" placeholder="Ej. 30000000"/><br></br></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Marca del auto: (*) <input type="text" className="form-control" placeholder="Ej. BMW"/><br></br></label>
                            </div>
                            <div className="col">
                            <label>Cilindraje en centimetros cubicos: (*) <input type="text" className="form-control" placeholder="Ej 3000"/><br></br></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Capacidad de cilindraje: (*) <input type="text" className="form-control" placeholder="Ej 3"/><br></br></label>
                            </div>
                            <div className="col">
                            <label>Modelo del auto: (*) <input type="text" className="form-control" placeholder="Ej. BMW 509"/><br></br></label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <label>Número de puertas del auto: (*) <input type="number" min="1" max="5" className="form-control" placeholder="4"/><br></br></label>
                            </div>
                            <div className="col">
                            <label>Transmision del auto: (*) <input type="text" className="form-control" placeholder="Mecanica"/><br></br></label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success">Agregar auto</button><div></div>
                    </form>
                </div>
                
            )
        }
    }

}
export default CarForm;
