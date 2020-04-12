import React, { Component } from 'react';
import './ItemsGallery.css';
import { Card } from 'react-bootstrap';

class ItemsGallery extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    createCardItem = (item) => {
        let cardItem =
            <div key={item.name} className="col mb-4">
                <Card>
                    <div className="card-title h2">{item.name}</div>
                    <Card.Img variant="top" className="card-img-top" src={item.imageUrl} alt="..." />
                    <Card.Body>
                        <Card.Text>
                            <span><span className="prop-header">כשרות:</span> {item.kosher}</span>
                            <br />
                            {/* <span><span className="prop-header">מחיר ל{this.props.isPriceForKg ? "ק\"ג" : "יחידה"}:</span> {item.price} ₪</span> */}
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
                    {this.props.itemName && <h1 className="meats-header">{this.props.itemName} :</h1>}
                    <br />
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4">
                        {this.createHTMLItems(this.props.items)}
                    </div>
                </div>
            </>
        )
    }
}
export default ItemsGallery;