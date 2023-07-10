import React, { useState } from "react";
import Header from "./header";
import data from "./data";
import App from "../App"; 
import { BrowserRouter as Router } from "react-router-dom";

const AppOverAll = () => {
    const {foodItems} = data;
    const [carItems, setCartItems]= useState([]);
    return (
        <div>
            <Router>
                <App foodItems={foodItems} carItems={carItems} />
            </Router>
        </div>
    )
}
export default AppOverAll;