import React, {Component} from "react";
import "./users.css";
import User from "./user";
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state= { 
        usuarios:[],
      };
      this.renderUsers = this.renderUsers.bind(this);
    }
    componentDidMount(){
        fetch(
           "/users" 
        ).then((response)=>{return response.json();
        }).then(data=>{
        this.setState({usuarios:data});
      })
    }

    renderUsers() {
        if (this.state.usuarios.length > 0) 
        {
        return this.state.usuarios.map(
            (user,i) => <div className="col-md-6">
                <User obj={user} key={i}/>
            </div>
        )
        }
    }
    render()
    {
        return(
            <div className="card-deck2 dashboard-background2">
                    <div className="container-fluid">
                        <div className="row">
                            {this.renderUsers()}
                        </div>
                    </div>
            </div>
        )
    }

}
export default UsersList;