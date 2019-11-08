import React, {Component} from "react";
import "./cars.css";
class Car extends Component {

    render()
    {
        return(
            <div className="card space link">
                <h1 className="card-title">${this.props.obj.price}</h1>
                <img className="card-img-top" width="50" height="200" src={`${this.props.obj.image}`} alt="Card cap"></img>
               <div className="row">
                    <div className="col-6">
                        <p className="card-sub-title">Modelo: {this.props.obj.model}</p>
                    </div>
                    <div className="col-6">
                        <p className="card-sub-title">Tipo: {this.props.obj.category}</p>   
                    </div>
               </div>
            </div>
            
        )
    }

}
export default Car;