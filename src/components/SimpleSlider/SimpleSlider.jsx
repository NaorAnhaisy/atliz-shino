import React, { Component } from 'react';
import './SimpleSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getBeef } from '../../StoreDB/BeefStore.js'
import { getLamb } from '../../StoreDB/LambStore.js'
import { getChicken } from '../../StoreDB/ChickenStore.js'
import { getBarbecue } from '../../StoreDB/BarbecueStore.js'
import ModalItem from '../ModalItem/ModalItem'

export default class SimpleSlider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideSelected: null
    }
  }

  handleSlideClick = (meat) => {
    this.setState({ slideSelected: meat })
  }

  cancelSelected = () => {
    this.setState({ slideSelected: null })
  }

  getItemsArrayByType = (type) => {
    let itemsArray = null;
    switch (type) {
      case "beef":
        itemsArray = getBeef()
        break;
      case "lamb":
        itemsArray = getLamb()
        break;
      case "chicken":
        itemsArray = getChicken()
        break;
      case "barbecue":
        itemsArray = getBarbecue()
        break;
      default:
        alert("No valid array for that type: " + type)
        break;
    }

    return itemsArray
  }

  createSlides = (type) => {
    let slides = [];
    let itemsArray = this.getItemsArrayByType(type)

    itemsArray.forEach((item, i) => {

      slides.push
        (
          <div key={i} className="item-div">
            <div className="images-div">
              <img className="item-image" onClick={() => this.handleSlideClick(item)} src={item.imageUrl} alt="item" />
              {item.isHot && <img className="pepper-image" src='/atliz-shino/images/hotPepper.png' alt="hotPepper" />}
            </div>
            <h4>{item.name} - ₪ {item.price} לק"ג</h4>
          </div>
        )
    });

    return slides;
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
    };

    return (

      <div className="slide-div">
        <h1 className="headerItems">
          <span className="item-name">{this.props.itemName}</span>
          <img className="header-icon" src={'/atliz-shino/images/' + this.props.type + '.png'} alt="headerIcon" />
        </h1>
        <br />
        <Slider {...settings}>
          {this.createSlides(this.props.type)}
        </Slider>

        {this.state.slideSelected && <ModalItem item={this.state.slideSelected} cancelSelected={this.cancelSelected} />}
      </div>
    );
  }
}