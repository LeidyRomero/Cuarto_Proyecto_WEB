import React, {Component} from "react";
import './Comparator.css';
class Comparator extends Component {
    constructor(props)
    {
        super(props);
        this.state= { 
            carros:[],
          };
        
        this.renderComparator = this.renderComparator.bind(this);
    }
    componentDidMount(){
        fetch(
            "/cars" 
         ).then((response)=>{return response.json();
         }).then(data=>{
         this.setState({carros:data});
       })
    }

    renderComparator() {
        if (this.state.carros.length > 0) 
        {
            return (
                <div className="row">
                    <div className = "column-md-3 background-menu">
                        <p><b>COMPARAR VEHICULOS</b></p>
                        <button type="submit" className="btn btn-danger">GUARDAR COMPARACION</button>

                        <p>CATEGORIA</p>
                        <p>MODELO</p>
                        <p>MARCA</p>
                        <p>AÑO</p>
                    </div>

                    <div className = "column-md-9">
                    <div className="row justify-content-center">
                        <div className = "column-md-6">
                            <select>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                            </select>

                        </div> 
                        <div className = "column-md-6">
                            <select>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                            </select>
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
        <div>
            {this.renderComparator()}
        </div>
        )
    }

}
export default Comparator;