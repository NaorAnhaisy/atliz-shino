import React, { Component } from 'react';
import './Meats.css';
import SimpleSlider from '../SimpleSlider/SimpleSlider'

var meatItems = [
    { itemName: "בקר", type: "beef" },
    { itemName: "עופות", type: "lamb" },
    { itemName: "כבש", type: "chicken" },
    { itemName: "על האש", type: "barbecue" }
]

class Meats extends Component {

    createMeatSliders = () => {
        let slidersElements = []
        meatItems.forEach((meatItem, i) => {
            slidersElements.push(
                <div key={i}>
                    <SimpleSlider className="content" itemName={meatItem.itemName} type={meatItem.type} />
                    <br />
                </div>
            )
        });

        return slidersElements;
    }

    render() {
        return (
            <div>
                <h3 className="meats-header">טעימה מהבשרים שלנו ...</h3>
                {this.createMeatSliders()}
            </div>
        )
    }
}
export default Meats;