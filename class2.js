import React from "react";
class Class2 extends React.Component{
   
    render(){
        const divStyle={backgroundColor:'cornflowerblue',fontfamily:'serif'}
        return (<div style={divStyle}>
            <h1>class component 2</h1>
            <h2>{this.props.name}</h2>
        </div>)
    }
}
export default Class2;