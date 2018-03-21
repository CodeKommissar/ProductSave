import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Nav pullRight>
            <NavItem eventKey={1} href="/auth/google">Login with Google</NavItem>
          </Nav>
        );
      default:
        return (
          <Nav pullRight>
            <NavItem eventKey={1} href="/api/logout">
                <Link to="/products/new">Add New Product</Link>
            </NavItem>
            <NavItem eventKey={2} href="/api/logout">Logout</NavItem>
          </Nav>
        );
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={this.props.auth ? "/products" : "/"}>
              ProductSave
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          {this.renderContent()}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
