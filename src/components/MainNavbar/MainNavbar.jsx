import React, { Component } from 'react';
import './MainNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainNavbar extends Component {

  render() {
    return (
      <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand>אטליז שינו ובניו - מרכז הבשר החלק</Navbar.Brand>
        <Nav className="mr-auto-left">
          <Nav.Link as={Link} to="/about">מי אנחנו</Nav.Link>
          <Nav.Link as={Link} to="/">בשרים</Nav.Link>
          <Nav.Link href="#other">אחר</Nav.Link>
          <Nav.Link href="#contant">צור קשר</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="הכנס שם מוצר" />
          <Button variant="outline-info" className="mr-sm-2">חפש!</Button>
        </Form>
      </Navbar>
        <div>
        </div>
      </div>
    );
  }
}

export default MainNavbar;