import React from "react";
import ReactDOM from "react-dom/client";
import Class1 from "./class components/class1";
import Class2 from "./class components/class2";
import Class3 from "./class components/class3";
import Fumcomp1 from "./functionComponents/fumcomp1";
import Funcomp2 from "./functionComponents/funcomp2";
import Funcomp3 from "./functionComponents/funcomp3";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
    <Class1 />
    <Class2/>
    <Class3/>
    <Fumcomp1/>
    <Funcomp2/>
    <Funcomp3/>
</div>);