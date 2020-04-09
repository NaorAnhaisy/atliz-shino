import React, { Component } from 'react';
import './MainNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainNavbar extends Component {

  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/atliz-shino">אטליז שינו ובניו - מרכז הבשר החלק</Navbar.Brand>
          <Nav className="mr-auto-left">
            <Nav.Link as={Link} to="/atliz-shino/about">מי אנחנו</Nav.Link>

            <NavDropdown title="בשרים " id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/atliz-shino/meat/beef">בקר</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">כבש</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">עופות</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">על האש</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="מכולת " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">דגים</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">יינות</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">תבלינים</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">שימורים</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">קפואים</NavDropdown.Item>
            </NavDropdown>

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