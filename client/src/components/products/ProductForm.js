import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Grid, FormGroup, ControlLabel, FormControl, Form, Col, Button } from "react-bootstrap";

const ReduxFormControl = ({input, meta, ...props}) => {
     return <FormControl {...props} {...input} />
};

class ProductForm extends Component {
    render() {
        return (
            <Grid style={{ textAlign: "center" }}>
              <h1>Save New Product</h1>
              <br />
              <Form horizontal
                onSubmit={this.props.handleSubmit(values => console.log(values))}
              >
                <FormGroup controlId="productName">
                  <Col componentClass={ControlLabel} sm={4}>
                    Name of the Product:
                  </Col>
                  <Col sm={6}>
                    <Field
                        type="text"
                        name="productName"
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
                        name="productURL"
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
                        name="productImage"
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
                        name="productPrice"
                        component={ReduxFormControl}
                        placeholder="Enter Product Price"
                        min={0}
                        step="0.01"
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={3} sm={6}>
                    <Button bsStyle="success" type="submit" bsSize="large"
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

export default reduxForm({
  form: "productForm"
})(ProductForm);

/*
<form
  onSubmit={this.props.handleSubmit(values => console.log(values))}
>
  <Field
      type="text"
      name="surveyTitle"
      component="input"
  />
  <button type="submit">Submit</button>
</form>
*/
