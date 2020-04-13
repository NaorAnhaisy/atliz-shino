import React, { Component } from 'react';
import './ItemsGallery.css';
import { Card } from 'react-bootstrap';
import GalleryImageWithDefault from '../GalleryImageWithDefault/GalleryImageWithDefault'

class ItemsGallery extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    createCardItem = (item, type) => {
        let cardItem =
            <div key={item.name} className="col mb-4">
                <Card>
                    <div className="card-title h2">{item.name}</div>
                    
                    <div className="images-div">
                        <GalleryImageWithDefault src={item.imageUrl} default={'/atliz-shino/images/' + type + '.png'} />
                        {item.isHot && <img className="pepper-image" src='/atliz-shino/images/hotPepper.png' alt="hotPepper" />}
                    </div>
                    
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

    createHTMLItems = (product) => {
        let listItems = [];
        let items = this.props.itemName ? product : product.getItems();
        items.forEach(item => {
            listItems.push(this.createCardItem(item, this.props.itemName ? item.type : product.type));
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
                    <h1 className="meats-header">{this.props.itemName ? this.props.itemName : this.props.items.itemName} :</h1>}
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