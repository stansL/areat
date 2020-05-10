import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ClickCounter extends Component {

        render() {
        const {count,handleEvent} = this.props;
        return (
            <button onClick={handleEvent}>Clicked {count} times</button>
        )
    }
}

ClickCounter.propTypes = {
    count: PropTypes.number.isRequired,
    handleEvent: PropTypes.func.isRequired
}

export default ClickCounter

