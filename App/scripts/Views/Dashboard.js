import React from 'react';
var {ListGroup, ListGroupItem} = require('react-bootstrap');
var DetailTemplate = require('./PageTemplate');
var {dashboard} = require('../config');

var Dashboard = React.createClass({
    getInitialState: function() {
        return {
            selectedItem: null
        }
    },

    openDetails: function(item) {
        this.setState({selectedItem: item});
    },

    navigateBack: function(){
        this.setState({selectedItem: null});
    },

    renderDetail: function(item) {
        return (
            <DetailTemplate context={item} navBack={this.navigateBack.bind(this)} />
        )
    },

    renderList: function() {
        return (
            <div className="rc-view rc-dashboard">
                <ListGroup>
                {
                    dashboard.map((function(dashboardItem, index){
                        return (
                            <div onClick={this.openDetails.bind(this, dashboardItem)}>
                                <ListGroupItem header={dashboardItem.title}>{dashboardItem.preview || dashboardItem.content}</ListGroupItem>
                            </div>
                        )
                    }).bind(this))
                }
                </ListGroup>
            </div>
        )
    },

    render: function() {
        return ( this.state.selectedItem ? this.renderDetail(this.state.selectedItem) : this.renderList() );
    }
});

module.exports = Dashboard;
