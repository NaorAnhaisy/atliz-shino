import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

export default class HoverControlledDropdown extends Component {

    constructor(props) {
        super(props)
        this.state = { isOpen: false }
    }

    is_touch_device = () => {
        return !!('ontouchstart' in window || navigator.maxTouchPoints);
    };

    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    toogle = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    }

    render() {
        return (
            <NavDropdown
                {...this.props}
                onMouseEnter={!this.is_touch_device() ? this.handleOpen : null}
                onMouseLeave={!this.is_touch_device() ? this.handleClose : null}
                onClick={this.toogle}
                show={this.state.isOpen}
            />
        );
    }

}