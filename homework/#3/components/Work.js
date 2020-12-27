import React, { Component } from 'react';
import SlickSlider from './SlickSlider'
import SwiperSlider from './SwiperSlider'

class Work extends Component {

    render() {
        const slickOptions = {
            dots: true,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            // fade: true,
            cssEase: 'linear'
        }
        const settings = {
            direction: 'horizontal',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            }
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
                    <h1>Swiper Slider</h1>
                    <SwiperSlider settings={settings}>
                        <img src="https://kenwheeler.github.io/slick/img/fonz1.png" alt="slide1"/>
                        <img src="https://kenwheeler.github.io/slick/img/fonz2.png" alt="slide"/>
                        <img src="https://kenwheeler.github.io/slick/img/fonz3.png" alt="slide3"/>
                    </SwiperSlider>
                </div>
            </div>
        );
    }
}

export default Work;
