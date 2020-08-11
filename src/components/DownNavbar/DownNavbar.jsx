import React, { Component } from 'react';
import './DownNavbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DownNavbar extends Component {

    initText = () => {
        this.props.setSearchText("");
    }

    render() {
        return (
            <Navbar bg="dark" className="down-navbar">
                <table style={{ width: "100%" }}>
                    <tbody className="about-site-table">
                        <tr>
                            <td style={{ width: "50%" }} className="my-name">האתר פותח ע"י <a href="https://github.com/NaorAnhaisy" className="down-nav-link">נאור אנחייסי</a></td>
                            <td style={{ width: "50%" }} className="copyright-span">
                                Atliz-Shino and his sons © 2020 - All Rights Reserve.
                                <Nav.Link replace className="down-nav-link" onClick={this.initText} as={Link} to="/terms">
                                    <span> Terms </span>
                                </Nav.Link>
                                <span> & </span>
                                <Nav.Link replace className="down-nav-link" onClick={this.initText} as={Link} to="/privacy">
                                    <span> Privacy </span>
                                </Nav.Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Navbar>
        );
    }
}

export default DownNavbar;