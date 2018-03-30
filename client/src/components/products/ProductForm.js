import React, { Component } from "react";
import { reduxForm, Field, getFormValues } from "redux-form";
import { Grid, FormGroup, ControlLabel, FormControl, Form, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

const ReduxFormControl = ({input, meta, ...props}) => {
     return <FormControl {...props} {...input} />
};

class ProductForm extends Component {
    render() {
        return (
            <Grid style={{ textAlign: "center" }}>
              <h1>Save New Product</h1>
              <br />
              <Form horizontal>
                <FormGroup controlId="productName">
                  <Col componentClass={ControlLabel} sm={4}>
                    Name of the Product:
                  </Col>
                  <Col sm={6}>
                    <Field
                        type="text"
                        name="name"
                        component={ReduxFormControl}
                        placeholder="Enter Product Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="productUrl">
                  <Col componentClass={ControlLabel} sm={4}>
                    URL to the Product:
                  </Col>
                  <Col sm={6}>
                    <Field
                        type="text"
                        name="productUrl"
                        component={ReduxFormControl}
                        placeholder="Enter Product URL"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="productImage">
                  <Col componentClass={ControlLabel} sm={4}>
                    URL to Image of the Product:
                  </Col>
                  <Col sm={6}>
                    <Field
                        type="text"
                        name="imageUrl"
                        component={ReduxFormControl}
                        placeholder="Enter Product Image URL"
                    />
                  </Col>
                </FormGroup>
                <FormGroup controlId="productName">
                  <Col componentClass={ControlLabel} sm={4}>
                    Price of the Product:
                  </Col>
                  <Col sm={6}>
                    <Field
                        type="number"
                        name="price"
                        component={ReduxFormControl}
                        placeholder="Enter Product Price"
                        min={0}
                        step="0.01"
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={3} sm={6}>
                    <Button
                      bsStyle="success" bsSize="large"
                      onClick={() => this.props.submitProduct(
                        this.props.formValues, this.props.history)
                      }
                    >
                      Save Product
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
  formValues: getFormValues('my-very-own-form')(state),
});
const formConfiguration = {
  form: 'my-very-own-form',
}
export default connect(mapStateToProps, actions)(
  reduxForm(formConfiguration)(withRouter(ProductForm))
);
