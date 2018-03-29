import React, { Component } from "react";
import ProductForm from "./ProductForm";
import { Grid } from "react-bootstrap";

class ProductNew extends Component {
    render() {
        return (
            <Grid>
                <ProductForm />
            </Grid>
        );
    }
}

export default ProductNew;
