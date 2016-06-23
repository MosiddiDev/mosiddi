import React from 'react';
var {Pager, PageItem, Panel} = require('react-bootstrap');

var PageTemplate = React.createClass({
    getInitialState: function() {
        return {
            context: this.props.context
        }
    },

    backButton: function(){
        if(!this.props.navBack)
            return "";

        return (
            <Pager>
                <PageItem previous onClick={this.props.navBack}>&larr; Back</PageItem>
            </Pager>
        )
    },

    render: function() {
        var context = this.state.context;
        return (
            <div className="rc-view">
                {this.backButton()}
                <Panel header={context.title}>
                    {context.content}
                </Panel>
            </div>
        );
    }
});

module.exports = PageTemplate;
