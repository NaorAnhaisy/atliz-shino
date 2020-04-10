import React, { Component } from 'react';
import './Meats.css';
import SimpleSlider from '../SimpleSlider/SimpleSlider'

class Meats extends Component {

    render() {
        return (
            <>
                <h3 className="meats-header">טעימה מהבשרים שלנו ...</h3>
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