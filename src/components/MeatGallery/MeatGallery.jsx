import React, { Component } from 'react';
import './MeatGallery.css';
import { CardDeck, Card, Button } from 'react-bootstrap';

const ITEMS_IN_ROW = 4;
class MeatGallery extends Component {

    createCardItem = () => {
        let cardItem =
            <Card>
                <Card.Img variant="top" src="https://d3m9l0v76dty0.cloudfront.net/system/photos/3480348/large/b554bddc6f4f2065870e0118fee3bbd7.jpg" />
                <Card.Body>
                    <Card.Title>בשר ראש</Card.Title>
                    <Card.Text>
                        <span>כשרות: בד"צ</span>
                        <br />
                        <span>מחיר לקילו: 55 ש"ח</span>
                    </Card.Text>
                    <Button variant="success">הוסף לסל</Button>
                </Card.Body>
            </Card>
        return cardItem
    }

    createHTMLItems2 = (items) => {
    }

    createHTMLItems = () => {
        let i =
        <>
            <CardDeck>
                {this.createCardItem()}
                {this.createCardItem()}
                {this.createCardItem()}
                {this.createCardItem()}
            </CardDeck>
            <CardDeck>
                {this.createCardItem()}
                {this.createCardItem()}
                {this.createCardItem()}
            </CardDeck>
            </>
        return i
    }

    render() {
        return (
            <div className="gallery-div">
                {this.createHTMLItems()}
            </div>
        )
    }
}
export default MeatGallery;