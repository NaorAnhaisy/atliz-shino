import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class SimpleSlider extends Component {

    render() {
        return (
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>
        )
    }
}

export default SimpleSlider;