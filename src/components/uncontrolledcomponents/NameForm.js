import React, { Component } from 'react'

class NameForm extends Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Some submission happened here!", this.input.current.value);


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Some placeholder"
                    ref={this.input}
                    //note the use of default value instead of value for uncontrolled components
                    // Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue.
                    defaultValue="Bob" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm
