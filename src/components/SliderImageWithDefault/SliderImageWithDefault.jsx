import React, { Component } from 'react';
import '../SimpleSlider/SimpleSlider.css'

export default class SliderImageWithDefault extends Component {
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
                className="item-image"
                src={this.state.sourceImg}
                alt="..."
                onError={this._onError}
            />
        );
    }
}