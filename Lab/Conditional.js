import React from 'react';
class Conditional extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={login:false};
    }
    render()
    {
        if(this.state.login)
        {
            return <h1>Successful</h1>
        }
        return <h1>Failed login</h1>
    }
}
export default Conditional;