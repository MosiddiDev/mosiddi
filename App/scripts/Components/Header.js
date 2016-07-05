import React from 'react';
import { Router } from 'react-router';
var {Nav} = require('react-bootstrap');

import MenuItem from './MenuItem';
import Logo from './Logo';

var {header} = require('../config');

var Header = React.createClass({
    getDefaultProps: function() {
        return {
            logoSrc: " ",
            logoWidth: 100,
            height: 100,
            width: 700
        };
    },

    render: function() {
        const style = {
            width: this.props.width,
            height: this.props.height,
            margin: "0 auto",
            background: "rgba(0,0,0,0)"
        };

        return (
            <div>
                <header className="rc-header" style={ {width: "100%"} }>
                    <div className="rc-header-content" style={style}>
                        <Logo src={header.logo.src} height={header.logo.height} padding={header.logo.padding} />
                         <Nav bsStyle='pills' activeKey={1}>
                        {
                            header.menu.map(function(menuItem, index){
                                return (
                                    <MenuItem route={"#/" + menuItem.route} text={menuItem.text} key={index} />
                                )
                            })
                        }
                        </Nav>
                    </div>
                </header>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Header;
