import React from "react";

class Class1 extends React.Component{
    constructor(){
        super()
        console.log(this)
    }
    render(){
        return (<div style={{backgroundColor:"green",fontFamily:'cursive'}}>
            <h1>class component 1</h1>
            <h2>{this.props.name}</h2>
        </div>)
    }
}
export default Class1;