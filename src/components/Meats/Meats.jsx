import React, { Component } from 'react';
import './Meats.css';
import SimpleSlider from '../SimpleSlider/SimpleSlider'

class Meats extends Component {

    render() {
        return (
            <>
                <SimpleSlider className="content" itemName="בקר" type="beef" />
                <br />
                <SimpleSlider className="content" itemName="כבש" type="lamb" />
                <br />
                <SimpleSlider className="content" itemName="עופות" type="chicken" />
                <br />
                <SimpleSlider className="content" itemName="על האש" type="barbecue" />
            </>
        )
    }
}
export default Meats;