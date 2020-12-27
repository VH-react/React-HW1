import React, { Component } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

class SwiperSlider extends Component {
    constructor(props) {
        super(props);
        this.slider = React.createRef();
        this.swiper = null;
    }


    componentDidMount() {
        this.swiper = new Swiper(this.slider.current, this.props.settings)
    }

    componentDidUpdate(prevProps) {
        if(this.props.options !== prevProps.options) {
            this.swiper.update(this.props.options)
        }
    }

    componentWillUnmount() {
        this.swiper.destroy(true, true);
    }

    render() {
        const { children, settings } = this.props
        return (
            <div ref={this.slider} className="swiper-container">
                <div className="swiper-wrapper">
                    {children.map(content => <div className="swiper-slide" key={Math.random()}>{content}</div>)}
                </div>
                {
                    settings.navigation ? 
                        <React.Fragment>
                            <div className={settings.navigation.nextEl.slice(1)}></div>
                            <div className={settings.navigation.prevEl.slice(1)}></div>
                        </React.Fragment>
                    : null
                }
                {
                    settings.pagination ? 
                        <React.Fragment>
                            <div className={settings.pagination.el.slice(1)}></div>
                        </React.Fragment>
                    : null
                }
            </div>
        );
    }
}

export default SwiperSlider;