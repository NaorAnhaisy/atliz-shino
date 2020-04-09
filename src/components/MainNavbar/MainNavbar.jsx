import React, { Component } from 'react';
import './MainNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import { DropdownButton, Dropdown } from 'react-bootstrap';

class MainNavbar extends Component {

  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand>אטליז שינו ובניו - מרכז הבשר החלק</Navbar.Brand>
        <Nav className="mr-auto-left">
          <Nav.Link href="#about">מי אנחנו</Nav.Link>
          <Nav.Link href="#meats">
            בשרים
          </Nav.Link>
          <Nav.Link href="#features">אחר</Nav.Link>
          <Nav.Link href="#features">צור קשר</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="הכנס שם מוצר" />
          <Button variant="outline-info" className="mr-sm-2">חפש!</Button>
        </Form>
      </Navbar>
    );
  }
}

export default MainNavbar;