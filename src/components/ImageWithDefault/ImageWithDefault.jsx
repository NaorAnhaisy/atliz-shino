import React, { Component } from 'react';
import './ImageWithDefault.css'

export default class ImageWithDefault extends Component {
    constructor(props) {
        super(props);

        this.state = {
            failed: false,
            sourceImg: this.props.src,
            loaded: false
        };
    }

    _onError = () => {
        this.setState({ failed: true, sourceImg: this.props.default });
    }

    handleImageLoaded = () => {
        this.setState({ loaded: true });
    }

    render() {
        return (
            <div className="toogle-img-loading">
                <img
                    className={this.props.clsName}
                    src={this.state.sourceImg}
                    onLoad={this.handleImageLoaded}
                    onError={this._onError}
                    alt=""
                    style={{ height: !this.state.loaded && "0px" }}
                />
                {!this.state.loaded
                    &&
                    <div className="sk-circle">
                        <div className="sk-circle1 sk-child"></div>
                        <div className="sk-circle2 sk-child"></div>
                        <div className="sk-circle3 sk-child"></div>
                        <div className="sk-circle4 sk-child"></div>
                        <div className="sk-circle5 sk-child"></div>
                        <div className="sk-circle6 sk-child"></div>
                        <div className="sk-circle7 sk-child"></div>
                        <div className="sk-circle8 sk-child"></div>
                        <div className="sk-circle9 sk-child"></div>
                        <div className="sk-circle10 sk-child"></div>
                        <div className="sk-circle11 sk-child"></div>
                        <div className="sk-circle12 sk-child"></div>
                    </div>
                }
            </div> 
        );
    }
}