import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Landing extends Component {
  render() {
    return (
      <Grid style={{ textAlign: "center" }}>
        <h1>ProductSave</h1>
        Save your favorite Products!
      </Grid>
    )
  }
}

export default Landing;