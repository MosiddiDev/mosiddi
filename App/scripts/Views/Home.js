import React from 'react';
var {Jumbotron} = require('react-bootstrap');
var MyCarousel = require('../Components/Carousel');
var {home} = require('../config');
var {carousel} = home;

var Home = React.createClass({
    render: function() {
        return (
            <div className="rc-view">
                <Jumbotron>
                    <h1>{home.title}</h1>
                    <p>{home.content}</p>
                </Jumbotron>
                <MyCarousel slides={carousel.slides} height={carousel.height} interval={carousel.interval} />
            </div>
        );
    }
});

module.exports = Home;
