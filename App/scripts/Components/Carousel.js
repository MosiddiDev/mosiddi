import React from 'react';
var {Carousel, CarouselItem} = require('react-bootstrap');

var MyCarousel = React.createClass({
    propTypes: {
        slides: React.PropTypes.array.isRequired
    },

    getDefaultProps: function() {
        return {
            height: 400,
            interval: 5000
        }
    },

    getStyle: function(slide) {
        var style = {
            slide: {
                position: "relative",
                height: slide.height || this.props.height,
                backgroundImage: "url('"+ slide.src +"')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: slide.contain === true ? "contain" : "cover"
            },
            content: {
                position: "absolute",
                top: 10,
                left: 10
            },
            title: {},
            detail: {}
        }
        return style;
    },

    render: function() {
        const style = {
            height: this.props.height,
            overflow: "hidden"
        }

        return (
            <Carousel style={style} interval={this.props.interval}>
                {
                    this.props.slides.map((function(slide, index){
                        const style = this.getStyle(slide);
                        return (
                            <CarouselItem key={index} style={{height: this.props.height}}>
                                <div style={style.slide}>
                                    <div style={style.content}>
                                        <h3 style={style.title}>{slide.title}</h3>
                                        <p style={style.detail}>{slide.detail}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    }).bind(this))
                }
            </Carousel>
        )
    }
});

module.exports = MyCarousel;
