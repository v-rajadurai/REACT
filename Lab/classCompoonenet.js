import React from 'react';

class Stateful extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = { message: 'Hello World' };
    }

    render() 
    {
        return (
            <>
                <h1>{this.state.message}</h1>
            </>
        );
    }
}

export default Stateful;
