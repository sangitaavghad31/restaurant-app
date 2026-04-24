import React from "react";
import "./Summary.css";

function Summary(props){
    const label= "Delicious Food, Delivered To You"
    const summary_1 = "Choose your favorite meal from out board selection of available meals and enjoy a delicious lunch or dinner at home.";
    const summary_2 = "All our meals are cooked with high-quality ingradients, just-in-time and of course by experienced chefs";
    
    return (<div className="summary-container">
            <h1>{label}</h1>
            <p>{summary_1}</p>
            <p>{summary_2}</p>
        </div>)
}

export default Summary;