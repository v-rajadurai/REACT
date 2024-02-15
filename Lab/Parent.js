import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    state = { print: 'Hello World' };

    render() {
        return (
            <>
                <h1>Parent:</h1>
                <Child print={this.state.print} />
            </>
        );
    }
}

export default Parent;