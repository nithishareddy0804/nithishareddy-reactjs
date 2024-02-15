import React from "react";
import ReactDOM from "react-dom/client";
//import Funcomp2 from "./functionComponents/funcomp2";
//import ListOfItems from "./functionComponents/ListOfItems";
////import EmployeComp from "./functionComponents/EmployeComp";
//import LoginClass from "./class components/LoginClass";
import LoginFunc from "./functionComponents/LoginFunc";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
//import Class1 from "./class components/class1";
//import Class2 from "./class components/class2";
//import Class3 from "./class components/class3";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
    {/*<Class1 name='Nithisha' />*/}
   {/*<Funcomp2 name="Nithisha Reddy"/>*/}
   {/*<ListOfItems/>*/}
   {/*<EmployeComp/>*/}
   {/*<LoginClass/>*/}
   <LoginFunc/>
    
</div>);