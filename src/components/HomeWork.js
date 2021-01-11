import React, { Component } from 'react';
import SlickSlider from './SlickSlider'

class HomeWork extends Component {

    render() {
        const slickOptions = {
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            // fade: true,
            cssEase: 'linear'
        }
        return (
            <div className="wrap">
                <div className="content">
                    <h1>Slick Slider</h1>
                    <SlickSlider options={slickOptions} mainCssClass="sliderFade" itemCssClass="slider-item" >
                        <img src="https://kenwheeler.github.io/slick/img/fonz1.png" alt="slide1"/>
                        <img src="https://kenwheeler.github.io/slick/img/fonz2.png" alt="slide"/>
                        <img src="https://kenwheeler.github.io/slick/img/fonz3.png" alt="slide3"/>
                    </SlickSlider>
                </div>
            </div>
        );
    }
}

export default HomeWork;
