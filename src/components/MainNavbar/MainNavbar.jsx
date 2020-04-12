import React, { Component } from 'react';
import './MainNavbar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainNavbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      navBackground: "dark",
      expanded: false
    }

    this.formPreventDefault = this.formPreventDefault.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  setExpanded= (newExpanded) => {
    this.setState({expanded: newExpanded})
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 70 ? "dark" : "light";
      this.setState({ navBackground: backgroundcolor });
    });
  }

  clearText() {
    this.myFormRef.value = ""
    this.initText()
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  sendTextToProps = () => {
    this.props.setSearchText(this.state.text);
    this.setExpanded(false);
  }

  keyPressed = (e) => {
    if (e.key === 'Enter') {
      this.sendTextToProps();
    }
  }

  initText = () => {
    this.props.setSearchText("");
    this.setExpanded(false)
  }

  formPreventDefault(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Navbar expanded={this.state.expanded} bg={this.state.navBackground} variant={this.state.navBackground} className={this.state.navBackground === "dark" ? "darkCls" : "lightCls"} expand="lg" sticky="top">
        <Navbar.Brand as={Link} to="/atliz-shino" onClick={this.initText}>אטליז שינו ובניו</Navbar.Brand>
        <Navbar.Toggle onClick={() => this.setExpanded(this.state.expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto-left">
            <Nav.Link onClick={this.initText} as={Link} to="/atliz-shino/about">מי אנחנו</Nav.Link>
            <NavDropdown title="בשרים " id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/meat/beef">בקר</NavDropdown.Item>
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/meat/lamb">כבש</NavDropdown.Item>
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/meat/chicken">עופות</NavDropdown.Item>
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/meat/barbecue">על האש</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="מכולת " id="basic-nav-dropdown">
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/market/fish">דגים</NavDropdown.Item>
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/market/wine">יינות</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/market/spices">תבלינים</NavDropdown.Item>
              {/* <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/market/cans">שימורים</NavDropdown.Item> */}
              <NavDropdown.Item onClick={this.initText} as={Link} to="/atliz-shino/market/frozen">קפואים</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={this.initText} as={Link} to="/atliz-shino/contact">צור קשר</Nav.Link>
          </Nav>
          <Form onSubmit={this.formPreventDefault} inline>
            <div className="search-clear-div">
              <img className="clear-img" src="/atliz-shino/images/clearText.png" alt="..." onClick={this.clearText} />
              <FormControl ref={(el) => this.myFormRef = el} onKeyPress={this.keyPressed} className="mr-sm-2 search-field" type="text" onChange={this.handleChange} placeholder="הכנס שם מוצר" />
            </div>
            <Button className="search-btn" variant="outline-info" onClick={this.sendTextToProps}>חפש!</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;