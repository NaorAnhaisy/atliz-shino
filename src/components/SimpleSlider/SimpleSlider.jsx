import React, { Component } from 'react';
import './SimpleSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalItem from '../ModalItem/ModalItem'
import SliderImageWithDefault from '../SliderImageWithDefault/SliderImageWithDefault'

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
          <div key={i} className="item-div">
            <div className="images-div" onClick={() => this.handleSlideClick(item)}>
              <SliderImageWithDefault src={item.imageUrl} default={'/atliz-shino/images/' + type + '.png'} />
              {item.isHot && <img className="pepper-image" src='/atliz-shino/images/hotPepper.png' alt="hotPepper" />}
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
      <div className="slide-div">
        <h1 className="headerItems">
          <span className="item-name">{this.props.product.itemName}</span>
          <img className="header-icon" src={'/atliz-shino/images/' + this.props.product.type + '.png'} alt="headerIcon" />
        </h1>
        <br />
        <Slider {...settings}>
          {this.createSlides(this.props.product.getItems(), this.props.product.type)}
        </Slider>

        {this.state.slideSelected && <ModalItem item={this.state.slideSelected} cancelSelected={this.cancelSelected} />}
      </div>
    );
  }
}