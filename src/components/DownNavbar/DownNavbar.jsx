import React, { Component } from 'react';
import './DownNavbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DownNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" className="down-navbar">
                  <div className="row">
                        <div className="col my-name">
                            פותח ע"י נאור אנחייסי האגדי
                        </div>
                        <div className="col copyright-span">
                            Atliz-Shino and his sons © 2020 - All Rights Reserve.
                            <Nav.Link className="down-nav-link" onClick={this.initText} as={Link} to="/atliz-shino/terms">
                                <span> Terms </span>
                            </Nav.Link> 
                            <span> & </span>
                            <Nav.Link className="down-nav-link" onClick={this.initText} as={Link} to="/atliz-shino/privacy">
                                <span> Privacy </span>
                            </Nav.Link> 
                        </div>
                    </div>
            </Navbar>
        );
    }
}

export default DownNavbar;