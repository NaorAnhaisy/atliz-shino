import React, { Component } from 'react';
import windowSize from 'react-window-size';

class ScreenSize extends Component {

    componentDidUpdate() {
        this.props.setWidth(this.props.windowWidth)
        this.props.setHeight(this.props.windowHeight)
    }

    render() {
        return (
            <>
            </>
        );
    }

}

export default windowSize(ScreenSize);