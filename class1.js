import React from "react";
class Class1 extends React.Component {
    constructor() {
      super();
      console.log(this);
      this.state = {
       bgcolor: "red",
        btnColor: "gray",
      };
    }
    handleChangeColor = () => {
      this.setState({
        bgcolor: `#${Math.random().toString().slice(-6)}`,
        btnColor: `#${Math.random().toString().slice(-6)}`
      });
    };
    render() {
      return (
        <div style={{ backgroundColor: this.state.bgcolor }}>
          <h1>class component 1</h1>
          <h2>{this.props.name}</h2>
          <button
            style={{ backgroundColor: this.state.btnColor }}
            type="submit"
            onClick={this.handleChangeColor}>
            change color
          </button>
        </div>
      );
    }
  }
export default Class1
