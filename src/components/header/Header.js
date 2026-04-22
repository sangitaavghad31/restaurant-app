import React, { useState, useEffect } from "react";
import "./Header.css";
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

    return (<>
        <div className="header">
            <div className="heading-label">ReactMeal</div>
            <div className="container">
                <button className="cart-button"> <FaShoppingCart style={{ color: "white", fontSize: "24px" }}/> <spna className="cart-label">Your Cart</spna><div className="total-items">0</div></button>
            </div>
        </div>
    </>)
};

export default Header;