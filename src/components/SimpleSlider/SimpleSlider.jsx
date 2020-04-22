import React, { Component } from 'react';
import './SimpleSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalItem from '../ModalItem/ModalItem'
import ImageWithDefault from '../ImageWithDefault/ImageWithDefault'

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

  createSlides = (itemsArray, type) => {
    let slides = [];
    itemsArray.forEach((item, i) => {
      slides.push
        (
          <div key={i} className="item-div" onClick={() => this.handleSlideClick(item)}>
            <div className="images-div">
              <ImageWithDefault src={item.imageUrl} default={'/images/default/' + type + '.png'} clsName="item-image" />
              {item.isHot && <img className="pepper-image pepper-slider-image" src='/images/hotPepper.png' alt="hotPepper" />}
            </div>
            <h4>{item.name}</h4>
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
      <div className="slide-div round-top">
        <h1 className="headerItems round-top">
          <span className="item-name">{this.props.product.itemName}</span>
          <img className="header-icon" src={'/images/default/' + this.props.product.type + '.png'} alt="headerIcon" />
        </h1>
        <div className="br-space-after"></div>
        <Slider {...settings}>
          {this.createSlides(this.props.product.getItems(), this.props.product.type)}
        </Slider>

        {this.state.slideSelected && <ModalItem item={this.state.slideSelected} type={this.props.product.type} cancelSelected={this.cancelSelected} />}
      </div>
    );
  }
}