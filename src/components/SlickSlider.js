import React, { Component } from 'react';
import $ from 'jquery'
import slick from 'slick-carousel'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

class SlickSlider extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.slick(this.props.settings);

        this.handleChange = this.handleChange.bind(this);
        this.$el.on('change', this.handleChange);
    }

    componentWillUnmount() {
        this.$el.off('change', this.handleChange);
        this.$el.slick('unslick');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.children !== this.props.children) {
          this.$el.trigger("slick:updated");
        }
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const { children, mainCssClass, itemCssClass } = this.props
        return (
            <div ref={el => this.el = el} className={mainCssClass}>
                {children.map(content => <div className={itemCssClass} key={Math.random()} >{content}</div>)}
            </div>
        );
    }
}

export default SlickSlider;
