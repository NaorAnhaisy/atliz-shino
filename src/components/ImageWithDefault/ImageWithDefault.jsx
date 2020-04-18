import React, { Component } from 'react';
// import { Card } from 'react-bootstrap';

export default class ImageWithDefault extends Component {
    constructor(props) {
        super(props);

        this.state = {
            failed: false,
            sourceImg: this.props.src
        };
    }

    _onError = () => {
        this.setState({ failed: true, sourceImg: this.props.default });
    }

    render() {
        return (
            <img
                className={this.props.clsName}
                src={this.state.sourceImg}
                onError={this._onError}
                alt="itemImage"
            />
        );
    }
}