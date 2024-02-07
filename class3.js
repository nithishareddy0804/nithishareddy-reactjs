import React from "react";
import './class3.css';
import Fumcomp1 from "../functionComponents/fumcomp1";
import Funcomp2 from "../functionComponents/funcomp2";
import Funcomp3 from "../functionComponents/funcomp3";
class Class3 extends React.Component{
    render(){
        return (<div>
            <h1 className='divstyle'>class component 3</h1>
            <h2 className='divstyle'>{this.props.name}</h2>
            <Fumcomp1 name='Hi'/>
            <Funcomp2 name='Hello'/>
            <Funcomp3 name='gd mrng'/>
        </div>)
    }
}
export default Class3;