import React, { Component } from 'react';
import './SimpleSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getBeef } from '../../StoreDB/BeefStore.js'
import { getLamp } from '../../StoreDB/LampStore.js'
import { getChicken } from '../../StoreDB/ChickenStore.js'
import { getBarbecue } from '../../StoreDB/BarbecueStore.js'
import ModalItem from '../ModalItem/ModalItem'

export default class SimpleSlider extends Component {

  state = {
    slideSelected: null
  };

  handleSlideClick = (meat) => {
    console.log(meat)
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
      case "lamp":
        itemsArray = getLamp()
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
      slides.push(
        <div key={i} className="item-div">
          <img className="item-image" onClick={() => this.handleSlideClick(item)} src={item.imageUrl} alt="item" />
          <h3>{item.name}</h3>
        </div>)
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

    let itemName = this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1);

    return (

      <div className="slide-div">

        <h1 className="headerItems">
          <img className="header-icon" src={'/atliz-shino/images/' + this.props.type + '.png'} alt="headerIcon" />
          <span className="item-name">{itemName}</span>
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