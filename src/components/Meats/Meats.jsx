import React, { Component } from 'react';
import './Meats.css';
import SimpleSlider from '../SimpleSlider/SimpleSlider'

class Meats extends Component {

    render() {
        return (
            <>
                <SimpleSlider className="content" type="beef" />
                <br />
                <SimpleSlider className="content" type="lamb" />
                <br />
                <SimpleSlider className="content" type="chicken" />
                <br />
                <SimpleSlider className="content" type="barbecue" />
            </>
        )
    }

}
export default Meats;