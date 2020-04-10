import React, { Component } from 'react';
import './MeatGallery.css';
import { CardDeck, Card } from 'react-bootstrap';

class MeatGallery extends Component {

    createCardItem = (item) => {
        let cardItem =
            <Card key={item.name}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <span><span className="prop-header">כשרות:</span> {item.kosher}</span>
                        <br />
                        <span><span className="prop-header">מחיר ל{this.props.isPriceForKg ? "ק\"ג" : "יחידה"}:</span> {item.price} ₪</span>
                    </Card.Text>
                    <br/>
                    {/* <Button className="meat-gallery-add-to-cart-button" variant="success">הוסף לסל</Button> */}
                </Card.Body>
            </Card>
        return cardItem
    }

    createHTMLItems = (items) => {
        let listItems = [];
        items.forEach(item => {
            listItems.push(this.createCardItem(item));
        });

        let htmlItem =
            <CardDeck>
                {listItems}
            </CardDeck>

        if (htmlItem.props.children.length === 0) {
            htmlItem = 
            <h1 className="no-items-found-error">
                <img className="no-items-found-image" src="/atliz-shino/images/warning.png" alt="warning"/>
                <span> לא נמצאו פריטים תואמים</span>
            </h1>
        }
        return htmlItem
    }

    render() {
        return (
            <div className="gallery-div">
                {this.createHTMLItems(this.props.items)}
            </div>
        )
    }
}
export default MeatGallery;