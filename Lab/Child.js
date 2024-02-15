import React from "react";

class Child extends React.Component {
    render() {
        return (
            <>
                <h1>Child: {this.props.print}</h1>
            </>
        );
    }
}

export default Child;