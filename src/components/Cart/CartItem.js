import React from 'react';
import "./CartItem.css";

const CartItem = (props) =>{
    return (<>
        <h1>{props.meal.name}</h1>
        <div className='button-container'>
            <button className='decrement-btn'>-</button>
            <button className='increment-btn'>+</button>
        </div>
        <div className="price-container">
            <div className='price'>${props.meal.price}</div>
            <div className='qty'>x{props.meal.amount}</div>
        </div>
        <hr/>
    </>)
}

export default CartItem;