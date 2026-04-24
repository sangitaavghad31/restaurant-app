import React, { useState } from "react";
import "./MealItem.css";

function MealItem(props) {
  const [count, setCount] = useState(0);

  const handleOnClick = () => {
    setCount((prev) => prev + 1);
  };

  const totalAmount = count * props.meal.price;

  return (
    <div className="meal-item-container" key={props.key}> 
      <h5>{props.meal.name}</h5>

      <div className="description-name-container">
        <p className="meal-description">{props.meal.description}</p>

        <p style={{ color: "black" }}>
          Amount{" "}
          <span className="badge">{count}</span>
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <p className="meal-price">
          ${props.meal.price}
          {" "}
          <span className="btn-container">
            <button className="add-btn" onClick={handleOnClick}>
              + Add
            </button>
          </span>
        </p>
      </div>

      {/* ✅ Total Price */}
      {count > 0 && (
        <p className="total-amount">
          Total: ${totalAmount}
        </p>
      )}
    </div>
  );
}

export default MealItem;