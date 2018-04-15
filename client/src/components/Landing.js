import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="overlay">
          <div className="vertical-center">
            <h1>ProductSave</h1>
            <p>Save your favorite Products!</p>
            <br/>
            <Button bsStyle="primary" bsSize="large" href="/auth/google">
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;