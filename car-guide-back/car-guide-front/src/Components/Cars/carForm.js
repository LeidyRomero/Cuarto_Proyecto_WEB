import React, {Component} from "react";
import "./cars.css";
class CarForm extends Component {
    constructor() {
        super();
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
        return(
            <div className="card">
                <h1>Digite los siguientes datos:</h1>
                <h2>Los campos marcados (*) son obligatorios:</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <label>Año de modelo del auto: (*) <input type="number" className="form-control" placeholder="Ej. 1999" required/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Kilometros recorridos por el auto: (*) <input type="number" className="form-control" placeholder="Ej. 100000" required/><br></br></label> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Categoria del auto: (*) <input type="text" className="form-control" placeholder="Ej. Camioneta" required/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Color del auto: (*) <input type="text" className="form-control" placeholder="Ej. Azul" required/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Fecha actual: (*) <input type="date" className="form-control" placeholder="Fecha" required/><br></br></label>     
                        </div>
                        <div className="col">
                        <label>Nombre del auto: (*) <input type="text" className="form-control" placeholder="Ej. BMW 509 7" required/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Placa del auto: (*) <input type="text" className="form-control" pattern="[A-Za-z]{3}-[0-9]{3}" title="3 letras y 3 numeros separados por el simbolo -. Ej. ABC-123" placeholder="Ej. ABC-123" required/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Precio de venta: (*) <input type="number" className="form-control" placeholder="Ej. 30000000" required/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Marca del auto: (*) <input type="text" className="form-control" placeholder="Ej. BMW" required/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Cilindraje en centimetros cubicos: (*) <input type="number" className="form-control" placeholder="Ej 3000" required/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Capacidad de cilindraje: (*) <input type="number" className="form-control" placeholder="Ej 3" required/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Modelo del auto: (*) <input type="text" className="form-control" placeholder="Ej. BMW 509" required/><br></br></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Número de puertas del auto: (*) <input type="number" min="1" max="5" className="form-control" placeholder="4" required/><br></br></label>
                        </div>
                        <div className="col">
                        <label>Transmision del auto: (*) <input type="text" className="form-control" placeholder="Mecanica" required/><br></br></label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Agregar auto</button><div></div>
                </form>
            </div>
            
        )
    }

}
export default CarForm;
