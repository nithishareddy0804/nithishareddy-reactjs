import React from "react";
import ReactDOM from "react-dom/client";
import Class1 from "./class components/class1";
import Class2 from "./class components/class2";
import Class3 from "./class components/class3";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
    <Class1 name='Nithisha' />
    <Class2 name='Nithisha Reddy'/>
    <Class3 name='Nithisha Dembal'/>
</div>);