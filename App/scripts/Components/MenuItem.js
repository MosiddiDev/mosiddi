import React from 'react';
var {NavItem} = require('react-bootstrap');

var MenuItem = React.createClass({
    render: function() {
        const style = {
            display: "inline-block",
            paddingRight: 10
        };

        return (
            <NavItem eventKey={this.props.key} href={this.props.route} style={style}>
                {this.props.text}
            </NavItem>
        );
    }
});

module.exports = MenuItem;
