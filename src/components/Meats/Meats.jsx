import React, { Component } from 'react';
import './Meats.css';
import SimpleSlider from '../SimpleSlider/SimpleSlider'
import { getAllProducts } from '../../StoreDB/Store.js'

class Meats extends Component {

    createMeatSliders = () => {
        let slidersElements = []
        getAllProducts().filter(product => product.general === "meat")
            .forEach((product, i) => {
            slidersElements.push(
                <div key={i}>
                    <SimpleSlider className="content" product={product} />
                    <br />
                </div>
            )
        });

        return slidersElements;
    }

    render() {
        return (
            <div>
                <h1 className="meats-header">נגיעה, מן המגוון...</h1>
                {this.createMeatSliders()}
            </div>
        )
    }
}
export default Meats;