import React, { Component } from 'react';
import './MeatGallery.css';
import { Card } from 'react-bootstrap';

class MeatGallery extends Component {

    createCardItem = (item) => {
        let cardItem =
            <div key={item.name} className="col mb-4">
                <Card>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Img variant="top" className="card-img-top" src={item.imageUrl} alt="..." />
                    <Card.Body>
                        <Card.Text>
                            <span><span className="prop-header">כשרות:</span> {item.kosher}</span>
                            <br />
                            <span><span className="prop-header">מחיר ל{this.props.isPriceForKg ? "ק\"ג" : "יחידה"}:</span> {item.price} ₪</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        return cardItem
    }

    createHTMLItems = (items) => {
        let listItems = [];
        items.forEach(item => {
            listItems.push(this.createCardItem(item));
        });

        if (listItems.length === 0) {
            listItems =
                <h1 className="no-items-found-error">
                    <img className="no-items-found-image" src="/atliz-shino/images/warning.png" alt="warning" />
                    <span> לא נמצאו פריטים תואמים</span>
                </h1>
        }
        return listItems
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        {this.createHTMLItems(this.props.items)}
                    </div>
                </div>
            </>
        )
    }
}
export default MeatGallery;