import React, { Component } from 'react';
import './DownNavbar.css';
import { Navbar } from 'react-bootstrap';

class DownNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" className="down-navbar">
                  <div class="row">
                        <div class="col my-name">פותח ע"י נאור אנחייסי האגדי</div>
                        <div class="col copyright-span">Atliz-Shino and his sons © 2020 - All Rights Reserve. <a href="/atliz-shino/terms">Terms</a> & <a href="/atliz-shino/privacy">Privacy</a></div>
                    </div>
            </Navbar>
        );
    }
}

export default DownNavbar;