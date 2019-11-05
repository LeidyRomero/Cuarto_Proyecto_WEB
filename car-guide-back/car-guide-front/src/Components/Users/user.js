import React, {Component} from "react";
import "./users.css";

class User extends Component {

    render()
    {
        return(
            <div className="card space link">
                <div className="card space link">
                    <h5 className="card-title">{this.props.obj.name}</h5>
                    <div className="row">
                        <div className="col-8">
                            <h6 className="card-sub-title">Correo: {this.props.obj.email}</h6>
                        </div>
                        <div className="col-4">
                            <h6 className="card-sub-title2">Edad: {this.props.obj.age}</h6>   
                        </div>
                        <div className="col-8">
                            <h6 className="card-sub-title">Número: {this.props.obj.phone}</h6>   
                        </div>
                        <div className="col-4">
                            <h6 className="card-sub-title2">Tipo: {this.props.obj.role}</h6>   
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}
export default User;