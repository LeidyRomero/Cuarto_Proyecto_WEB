import React, {Component} from "react";
import "./cars.css";
class Car extends Component {

    render()
    {
        return(
            <div className="card space link">
                <h5 className="card-title">${this.props.obj.price}</h5>
                <img className="card-img-top" width="50" height="200" src={`${this.props.obj.image}`} alt="Card image cap"></img>
               <div className="row">
                    <div className="col-6">
                        <h6 className="card-sub-title">Modelo: {this.props.obj.model}</h6>
                    </div>
                    <div className="col-6">
                        <h6 className="card-sub-title">Tipo: {this.props.obj.category}</h6>   
                    </div>
               </div>
            </div>
            
        )
    }

}
export default Car;