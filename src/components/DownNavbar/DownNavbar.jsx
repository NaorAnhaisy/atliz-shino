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
                            <td style={{ width: "50%" }} className="my-name">פותח ע"י נאור אנחייסי</td>
                            <td style={{ width: "50%" }} className="copyright-span">
                                Atliz-Shino and his sons © 2020 - All Rights Reserve.
                                <Nav.Link className="down-nav-link" onClick={this.initText} as={Link} to="/terms">
                                    <span> Terms </span>
                                </Nav.Link>
                                <span> & </span>
                                <Nav.Link className="down-nav-link" onClick={this.initText} as={Link} to="/privacy">
                                    <span> Privacy </span>
                                </Nav.Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <a href="https://www.freepik.com/free-photos-vectors/food">Food photo created by timolina - www.freepik.com</a>
            </Navbar>
        );
    }
}

export default DownNavbar;