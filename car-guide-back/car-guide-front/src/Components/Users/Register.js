import React from 'react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import { post } from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      error: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let username = document.getElementById("register-username").value;
    let name = document.getElementById("register-name").value;
    let age = document.getElementById("register-age").value;
    let email = document.getElementById("register-email").value;
    let phone = document.getElementById("register-phone").value;
    let password = document.getElementById("register-password").value; 
    let role = document.getElementById("register-role").value;
    var user = {username, name, age, email, phone, password, role };

    post('/users/signin', user)
      .then(() => {
        console.log('added:', user);
      });
  }

  render() {
    const { error } = this.state;

    return (
        <div>
        <Container>
          <Row>
            <Col lg="6" md="6">
            <div className="logo-wrap">
                <img id="logo" src="Signin.jpg" alt="imagen registro" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="register-wrap">
                <h1 className="text-center">Registrarse</h1>
                <div className="modal-body">
                  {error.length > 0 ? (
                    <div className="alert alert-danger fade in">{error}</div>
                  ) : (
                    ""
                  )}
                  <form
                    id="register-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <label>Nombre de usuario: <input
                        type="text"
                        id="register-username"
                        className="form-control input-lg"
                        placeholder="usuario"
                        required/></label>
                    </div>
                    <div className="form-group">
                    <label>Nombres y apellidos: <input
                        type="text"
                        id="register-name"
                        className="form-control input-lg"
                        placeholder="nombres y apellidos"
                        required /></label>
                    </div>
                    <div className="form-group">
                    <label>Edad: <input
                        type="number"
                        id="register-age"
                        className="form-control input-lg"
                        placeholder="edad"
                        required/></label>
                    </div>
                    <div className="form-group">
                    <label>Telefono: <input
                        type="number"
                        id="register-phone"
                        className="form-control input-lg"
                        placeholder="telefono"
                        required/></label>
                    </div>
                    <div className="form-group">
                    <label>Correo electronico: <input
                        type="email"
                        id="register-email"
                        className="form-control input-lg"
                        placeholder="email"
                        required /></label>
                    </div>
                    <div className="form-group">
                    <label>Contraseña: <input
                        type="password"
                        id="register-password"
                        className="form-control input-lg"
                        placeholder="password"
                        required /></label>
                    </div>
                    <div className="form-group">
                    <label><input
                        type="hidden"
                        id="register-role"
                        className="form-control input-lg"
                        value="User"
                        /></label>
                    </div>
                    <div className="form-group text-center">
                    <label><input
                        type="submit"
                        id="register-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Registar"
                      /></label>
                    </div>
                    <div className="form-group text-center">
                      <p className="text-center">
                        ¿No tienes una cuenta? Regístrate{" "}
                        <Link to="/signup">aquí</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
