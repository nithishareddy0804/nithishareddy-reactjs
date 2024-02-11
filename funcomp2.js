import React, { useState } from "react";

function Funcomp2(props) {
  const [bgcolor, setbgcolor] = useState("cornflowerblue");
  const [btncolor, setbtncolor] = useState("cornflowerblue");
  const handleChangeColor = () => {
    setbgcolor(`#${Math.random().toString().slice(-6)}`);
    setbtncolor(`#${Math.random().toString().slice(-6)}`)
  };
  return (
    <div style={{ backgroundColor: bgcolor }}>
      <h1>function component 2</h1>
      <h2>{props.name}</h2>
      <button style={{backgroundColor:btncolor}} type="submit" onClick={handleChangeColor}>
        change color
      </button>
    </div>
  );
}

export default Funcomp2;
