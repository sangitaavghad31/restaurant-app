import React from "react";
import "./RestaurantSummary.css";

function RestaurantSummary(props){
    const label= "Delicious Food, Delivered To You"
    const summary_1 = "Choose your favorite meal from out board selection of available meals and enjoy a delicious lunch or dinner at home.";
    const summary_2 = "All our meals are cooked with high-quality ingradients, just-in-time and of course by experienced chefs";
    
    return (<div className="summary-container">
            <h1>{label}</h1>
            <span>{summary_1}</span>
            <span>{summary_2}</span>
        </div>)
}

export default RestaurantSummary;