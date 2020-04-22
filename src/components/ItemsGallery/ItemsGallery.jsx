import React, { Component } from 'react';
import './ItemsGallery.css';
import { Card } from 'react-bootstrap';
import ImageWithDefault from '../ImageWithDefault/ImageWithDefault'
import AOS from 'aos';
import 'aos/dist/aos.css';

class ItemsGallery extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        AOS.init();
    }

    createCardItem = (item, type) => {
        let cardItem =
            <div key={item.name} className="col mb-4" data-aos='flip-down'>
                <Card>
                    <div className="card-title h2">{item.name}</div>
                    <div className="images-div">
                        <ImageWithDefault src={item.imageUrl} default={'/images/default/' + type + '.png'} clsName="card-img-top" />
                        {item.isHot && <img className="pepper-image pepper-gallery-image" src='/images/hotPepper.png' alt="hotPepper" />}
                    </div>
                    <Card.Body>
                    </Card.Body>

                    {/* <Card.Body>
                        <Card.Text>
                            <span><span className="prop-header">כשרות:</span> {item.kosher}</span>
                            <br />
                            <span><span className="prop-header">מחיר ל{this.props.isPriceForKg ? "ק\"ג" : "יחידה"}:</span> {item.price} ₪</span>
                        </Card.Text>
                    </Card.Body> */}
                </Card>
            </div>

        return cardItem
    }

    createHTMLItems = (product) => {
        let items = this.props.itemName ? product : product.getItems();
        let htmlItems = [];

        if (items.length === 0) {
            htmlItems =
                <h1 className="no-items-found-error">
                    <img className="no-items-found-image" src="/images/errorX.png" alt="errorX" />
                    <span> לא נמצאו פריטים תואמים</span>
                </h1>
        } else {
            items.forEach(item => {
                htmlItems.push(this.createCardItem(item, this.props.itemName ? item.type : product.type));
            });
        }

        return htmlItems
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1 className="meats-header">{this.props.itemName ? this.props.itemName : this.props.items.itemName} :</h1>
                    <div className="items-gallery row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                        {this.createHTMLItems(this.props.items)}
                    </div>
                </div>
            </>
        )
    }
}

export default ItemsGallery;