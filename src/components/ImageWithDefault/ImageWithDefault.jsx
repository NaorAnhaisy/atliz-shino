import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

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
            <Card.Img
                variant="top"
                className="card-img-top"
                src={this.state.sourceImg}
                onError={this._onError}
            />
        );
    }
}