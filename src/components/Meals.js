import React from "react";
import MealItem from "./MealItem";
import "./Meals.css";

function Meals(props){

    return(<div className="meal-container">
    {props.meals.map((meal, index)=>{
        return<>
            <MealItem key={index} meal={meal}/>
            <hr/>   
        </>
    })}
    </div>) 
}

export default Meals;