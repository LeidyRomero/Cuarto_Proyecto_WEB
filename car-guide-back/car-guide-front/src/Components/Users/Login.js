import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import store from 'store';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    
  }

  render() {
    const { error } = this.state;

    return (
        <div className="login-background">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12">
              
            </Col>
            <Col lg="4" md="4" sm="12">
              <div className="login-wrap">
                <h1 className="login-title">Ingresar</h1>
                <div className="modal-body">
                  {error.length > 0 ? (
                    <div className="alert alert-danger fade in">{error}</div>
                  ) : (
                    ""
                  )}
                  <form
                    id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <label>Correo electronico <input
                        type="email"
                        id="login-email"
                        className="form-control input-lg"
                        placeholder="email"
                        required/></label>
                    </div>
                    <div className="form-group">
                      <label>Contraseña <input
                        type="password"
                        id="login-password"
                        className="form-control input-lg"
                        placeholder="password"
                      required/></label>
                    </div>
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        id="login-button"
                        className="login-form-button"
                        value="Ingresar"
                      />
                    </div>
                    <div className="form-group text-center">
                      <p className="text-center">
                        ¿No tienes una cuenta? Regístrate{" "}
                        <Link to="/signup" id="form-link">aquí</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg="4" md="4" sm="12">
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
