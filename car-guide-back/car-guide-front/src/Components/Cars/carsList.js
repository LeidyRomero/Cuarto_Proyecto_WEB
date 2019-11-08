import React, {Component} from "react";
import "./cars.css";
import "../../App.css";
import { Link } from "react-router-dom";
import Car from "./car";
class CarsList extends Component {
  constructor(props) {
    super(props);
    this.state= { 
        carros:[],
      };
      this.renderCars= this.renderCars.bind(this);
    }
    componentDidMount(){
        fetch(
           "/cars" 
        ).then((response)=>{return response.json();
        }).then(data=>{
        this.setState({carros:data});
      })
    }

    renderCars() {
        if (this.state.carros.length > 0) 
        {
        return this.state.carros.map(
            (car,i) => <div className="col-md-4"><Link to={`/cars/${car.license}`}>
                <Car obj={car} key={i}/>
            </Link> </div>
        )
        }
    }
    render()
    {
        return(
            <div className="card-deck2 dashboard-background2 top_spaced">
                    <div className="container-fluid">
                        
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Ventas</h1>
                            </div>
                        </div>
                        <div className="row">
                            {this.renderCars()}
                        </div>
                    </div>
            </div>
        )
    }

}
export default CarsList;