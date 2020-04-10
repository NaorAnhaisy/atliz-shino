import React, { Component } from 'react';
import './MainNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }

    this.formPreventDefault = this.formPreventDefault.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  sendTextToProps = () => {
    this.props.setSearchText(this.state.text);
  }

  keyPressed = (e) => {
    if (e.key === 'Enter') {
      this.sendTextToProps();
    }
  }

  initText = () => {
    this.props.setSearchText("");
  }

  formPreventDefault(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/atliz-shino" onClick={this.initText}>אטליז שינו ובניו - מרכז הבשר החלק</Navbar.Brand>
          <Nav className="mr-auto-left">
            <Nav.Link as={Link} to="/atliz-shino/about">מי אנחנו</Nav.Link>

            <NavDropdown title="בשרים " id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/atliz-shino/meat/beef">בקר</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atliz-shino/meat/lamb">כבש</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atliz-shino/meat/chicken">עופות</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atliz-shino/meat/barbecue">על האש</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="מכולת " id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/atliz-shino/market/fish">דגים</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atliz-shino/market/wine">יינות</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/atliz-shino/market/spices">תבלינים</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atliz-shino/market/cans">שימורים</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atliz-shino/market/frozen">קפואים</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/atliz-shino/contact">צור קשר</Nav.Link>
          </Nav>
          <Form onSubmit={this.formPreventDefault} inline>
            <FormControl onKeyPress={this.keyPressed} type="text" onChange={this.handleChange} placeholder="הכנס שם מוצר" />
            <Button variant="outline-info" onClick={this.sendTextToProps} className="mr-sm-2">חפש!</Button>
          </Form>
        </Navbar>
        <div>
        </div>
      </div>
    );
  }
}

export default MainNavbar;