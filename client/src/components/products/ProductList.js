import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts, deleteProduct } from "../../actions/index";
import { Row, Col, Thumbnail, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    renderProducts() {
        return this.props.products.map(product => {
            return (
                <Col xs={3} md={3} style={{ textAlign: "center" }} key={product._id}>
                    <Thumbnail src={product.imageUrl} alt="242x200">
                        <h3><a href={product.productUrl}>{product.name}</a></h3>
                        <p>Price: <b>${product.price}</b></p>
                        <div style={{ textAlign: "center" }}>
                            <Link 
                                to={{ pathname: "/products/edit", product: product }}
                            >
                                <Button bsStyle="success" style={{ marginRight: "2px" }}>
                                    Edit
                                </Button>
                            </Link>
                            <Button 
                                bsStyle="danger" 
                                style={{ marginLeft: "2px" }}
                                onClick={() => this.props.deleteProduct(product._id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </Thumbnail>
                </Col>
            );
        });
    }

    render() {
        return (
            <div>
                <Row>
                    {this.renderProducts()}
                </Row>
            </div>
        );
    }
}

function mapStateToProps({ products }) {
    return { products };
}

export default connect(mapStateToProps, { fetchProducts, deleteProduct })(ProductList);