import React, { Component } from 'react';

class EvenCounterDisplayer extends Component {
    render() {
        return (
            <>
                <p>Even counter Clicked {this.props.clickCount} times</p>
            </>
        );
    }
}

export default EvenCounterDisplayer;
