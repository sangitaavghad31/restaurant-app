import React from "react";
import "./MealItem.css";

function MealItem(props){

    return(
        <div className="meal-item-container">

            <h5>{props.meal.name}</h5>
            <p className="meal-description">{props.meal.description}</p>
            <p className="meal-price">${props.meal.price}</p>
    
        </div>
    )
}

export default MealItem;