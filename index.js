import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import Career from "./pages/Career";
import Navbar from "./pages/Navbar";
import NoPage from "./pages/NoPage";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Routes>
    </BrowserRouter>
);