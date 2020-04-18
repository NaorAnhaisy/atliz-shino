import React, { Component } from 'react';
import './Meats.css';
import SimpleSlider from '../SimpleSlider/SimpleSlider'
import { getAllProducts } from '../../StoreDB/Store.js'

class Meats extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

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
                <div className="kosher-div">
                    <h1>Try</h1>
                    <h1 style={{ textDecoration: "underline" }}>אטליז שינו ובניו - מרכז הבשר החלק</h1>
                    <br />
                    <h2>כשרויות מהודרות בהשגחת הרב מחפוד יורה דעה, עטרה בית יוסף והרב רובין.</h2>
                    <h3>בהשגחת רבנות בת-ים</h3>
                    <img className="kosher-img" src="/atliz-shino/images/robin-kosher.png" alt="..." />
                    <img className="kosher-img" src="/atliz-shino/images/atara-kosher.png" alt="..." />
                    <img className="kosher-img" src="/atliz-shino/images/mahfod-kosher.png" alt="..." />
                </div>
                
                <div>
                    <h1 className="meats-header">נגיעה, מן המגוון...</h1>
                    {this.createMeatSliders()}
                </div>
            </div>
        )
    }
}
export default Meats;